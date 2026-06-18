"""Fundamental curator lenses driven by yfinance signals (forward-looking).

Two new goblins that finally give the firm teeth beyond price action:

  * Analyst -- Wall Street's own forward view: implied upside to the mean target
    + the consensus rating. confidence scales with how many analysts cover it.
  * Value   -- cheap + profitable + growing is bullish; expensive is bearish.

Each returns (lean in [-1,1], confidence in [0,1], narrative) or None when the
signal data is missing. Deterministic, like the price lenses.

LEAK WARNING: these read CURRENT fundamentals, so they are only valid for a
FORWARD run (today's date). Wiring them at a past backtest date would be
lookahead leakage. The firm backtest never runs them; only the forward path
(`run_fundamental_curators_for_date`, used by sim/forward.py) does.
"""
from __future__ import annotations

from typing import Dict, List, Optional, Tuple

from ..config import Settings
from ..data.signals import fetch_signals
from ..db import reports as report_store
from ..db import store
from ..llm import get_llm

Signal = Optional[Tuple[float, float, str]]


def _clip(x: float, lo: float, hi: float) -> float:
    return lo if x < lo else hi if x > hi else x


def analyst_signal(sig: Dict) -> Signal:
    upside = sig.get("implied_upside")
    rec = sig.get("recommendationMean")          # 1 strong buy .. 5 sell
    n = sig.get("numberOfAnalystOpinions") or 0
    if upside is None and rec is None:
        return None
    parts, weight = 0.0, 0.0
    if upside is not None:
        parts += 0.6 * _clip(upside / 0.30, -1.0, 1.0)
        weight += 0.6
    if rec is not None:
        parts += 0.4 * _clip((3.0 - rec) / 2.0, -1.0, 1.0)   # 1->+1, 3->0, 5->-1
        weight += 0.4
    lean = _clip(parts / weight, -1.0, 1.0) if weight else 0.0
    conf = _clip(0.3 + min(1.0, n / 30.0) * 0.7, 0.1, 1.0)
    key = sig.get("recommendationKey") or "n/a"
    tgt = sig.get("targetMeanPrice")
    note = (f"{int(n)} analysts, consensus '{key}'"
            + (f", mean target ${tgt:,.0f}" if tgt else "")
            + (f" = {upside:+.0%} upside" if upside is not None else "") + ".")
    return lean, conf, note


def value_signal(sig: Dict) -> Signal:
    pe = sig.get("trailingPE")
    pb = sig.get("priceToBook")
    margins = sig.get("profitMargins")
    growth = sig.get("revenueGrowth")
    if all(v is None for v in (pe, pb, margins, growth)):
        return None
    parts, weight = 0.0, 0.0
    if pe is not None and pe > 0:
        parts += 0.35 * _clip((22.0 - pe) / 22.0, -1.0, 1.0)     # cheap good, rich bad
        weight += 0.35
    if pb is not None and pb > 0:
        parts += 0.15 * _clip((3.0 - pb) / 3.0, -1.0, 1.0)
        weight += 0.15
    if margins is not None:
        parts += 0.25 * _clip(margins / 0.20, -1.0, 1.0)         # profitability
        weight += 0.25
    if growth is not None:
        parts += 0.25 * _clip(growth / 0.20, -1.0, 1.0)          # growth
        weight += 0.25
    lean = _clip(parts / weight, -1.0, 1.0) if weight else 0.0
    conf = _clip(0.3 + weight * 0.6, 0.1, 0.9)
    bits = []
    if pe is not None:
        bits.append(f"P/E {pe:.0f}")
    if margins is not None:
        bits.append(f"margins {margins:.0%}")
    if growth is not None:
        bits.append(f"rev growth {growth:+.0%}")
    return lean, conf, ("; ".join(bits) + ".") if bits else "limited fundamentals."


# ── persisted fundamental curators (forward only) ─────────────────────────────
#
# These mirror the price-lens Curator shape (lean/confidence deterministic, LLM
# writes only the prose) but read a live `signals` dict instead of PriceMetrics.
# They persist a report per ticker so a trader's existing trust-weighted score
# folds them in with zero changes to the scoring code -- the goblin just needs
# trust in "Analyst" / "Value".

# fields worth keeping in the report's machine-readable detail blob
_DETAIL_FIELDS = ("currentPrice", "targetMeanPrice", "recommendationKey",
                  "numberOfAnalystOpinions", "implied_upside", "trailingPE",
                  "priceToBook", "profitMargins", "revenueGrowth")


class FundamentalCurator:
    """A per-ticker lens reading live fundamentals. Same persistence contract as
    the price-lens Curator, different input (a signals dict)."""

    name = "fundamental"
    stance = "fundamental"

    def signal(self, sig: Dict) -> Signal:
        raise NotImplementedError

    def system_prompt(self) -> str:
        raise NotImplementedError

    def run(self, conn, run_id: int, agent_id: int, as_of_date: str, ticker: str,
            sig: Dict, llm, real_llm: bool, model: str) -> Optional[int]:
        res = self.signal(sig)
        if res is None:                      # no coverage for this name -> no report
            return None
        lean, conf, note = res
        detail = {k: sig.get(k) for k in _DETAIL_FIELDS}
        llm_call_id = None
        if real_llm:
            user = (f"Ticker {ticker}. Your computed lean is {lean:+.2f} "
                    f"(confidence {conf:.2f}). Facts: {note}\n\n"
                    "Write your 2-sentence narrative in character, citing the "
                    "numbers. No hype. Prose only.")
            completion = llm.complete(self.system_prompt(), user,
                                      max_tokens=220, temperature=0.6)
            note = completion.strip() or note
            llm_call_id = report_store.insert_llm_call(
                conn, run_id, agent_id, as_of_date, model,
                {"max_tokens": 220, "temperature": 0.6}, user, completion)
        return report_store.insert_report(
            conn, run_id, agent_id, ticker, as_of_date, self.stance,
            detail, note, conf, lean, llm_call_id)


class Analyst(FundamentalCurator):
    """Wall Street's forward view: implied upside to mean target + consensus."""
    name = "Analyst"
    stance = "analyst"

    def signal(self, sig: Dict) -> Signal:
        return analyst_signal(sig)

    def system_prompt(self) -> str:
        return ("You are the Analyst goblin: you channel Wall Street's published "
                "view -- price targets and consensus ratings. Cite the implied "
                "upside and the number of analysts in 2 sentences. No hype.")


class Value(FundamentalCurator):
    """Cheap + profitable + growing is bullish; expensive is bearish."""
    name = "Value"
    stance = "value"

    def signal(self, sig: Dict) -> Signal:
        return value_signal(sig)

    def system_prompt(self) -> str:
        return ("You are the Value goblin: you care about valuation, margins and "
                "growth -- cheap quality is bullish, expensive is bearish. Cite "
                "P/E, margins and growth in 2 sentences. No hype.")


FUNDAMENTAL_CURATORS = [Analyst(), Value()]


def run_fundamental_curators_for_date(
        conn, run_id: int, as_of_date: str, tickers: List[str],
        prefer_real_llm: bool = False, model: str = Settings.llm_model,
        verbose: bool = False) -> int:
    """FORWARD ONLY. Fetch live signals per ticker and persist Analyst + Value
    reports for `as_of_date` (which must be today). Returns report count.

    Leak guard: this reads CURRENT fundamentals, so calling it for any past date
    would inject lookahead. The firm backtest never invokes it."""
    llm, real_llm = get_llm(model, prefer_real_llm)
    agent_ids = {c.name: store.get_or_create_agent(conn, c.name, "curator",
                                                    {"stance": c.stance})
                 for c in FUNDAMENTAL_CURATORS}
    n = 0
    for t in tickers:
        sig = fetch_signals(t)
        for c in FUNDAMENTAL_CURATORS:
            if c.run(conn, run_id, agent_ids[c.name], as_of_date, t, sig,
                     llm, real_llm, model) is not None:
                n += 1
    if verbose:
        src = "Claude" if real_llm else "heuristic"
        print(f"[teeth] {as_of_date}: {n} Analyst/Value reports "
              f"over {len(tickers)} names ({src})")
    return n
