"""The five curator goblins.

Per-ticker lenses (Quant, Bull, Bear, Momentum) all read the same PriceMetrics
and differ in how they weight them. Macro is universe-level: it reads breadth +
the SPY benchmark trend and emits one market regime call per date.

Bias is encoded deterministically:
  * Bull lean is clamped >= 0 (it never argues short), strength tracks the facts.
  * Bear lean is clamped <= 0.
  * Momentum lean is free-signed (it follows the trend either way).
  * Quant lean is a neutral factual momentum read (it's the anchor, not an arguer).
"""
from __future__ import annotations

from dataclasses import asdict
from typing import Dict, Optional, Tuple

from ..db import reports as report_store
from ..metrics import PriceMetrics
from .base import Curator, _clip, clarity, momentum_read


def _strength_word(mag: float) -> str:
    return ("a marginal" if mag < 0.25 else "a moderate" if mag < 0.55
            else "a strong" if mag < 0.8 else "an emphatic")


class Quant(Curator):
    """The anchor: facts, not opinions. Neutral factual momentum read."""
    name = "Quant"
    stance = "quant"

    def lean_confidence(self, m: PriceMetrics) -> Tuple[float, float]:
        lean = momentum_read(m)
        conf = _clip(0.4 + 0.6 * min(1.0, abs(m.sharpe_like) / 1.5), 0.1, 1.0)
        return lean, conf

    def heuristic_narrative(self, m, lean, conf) -> str:
        return (
            f"{m.ticker}: {m.return_3m:+.0%} 3m / {m.return_12m:+.0%} 12m, vol "
            f"{m.annualized_vol:.0%}, Sharpe-like {m.sharpe_like:.2f}, "
            f"{'above' if m.above_200d else 'below'} the 200-day, RSI {m.rsi_14:.0f}. "
            f"Stated as fact, not opinion."
        )

    def system_prompt(self) -> str:
        return ("You are the Quant goblin: cold, factual, no opinions. State the "
                "numbers plainly in 2 sentences. Never recommend; never editorialize.")


class Bull(Curator):
    """Relentlessly long-biased. Always argues to buy; strength tracks the facts."""
    name = "Bull"
    stance = "bull"

    def lean_confidence(self, m: PriceMetrics) -> Tuple[float, float]:
        mo = momentum_read(m)
        lean = _clip(0.5 + 0.5 * mo + (0.15 if m.above_200d else -0.10)
                     - (0.15 if m.rsi_14 > 75 else 0.0), 0.05, 1.0)
        return lean, clarity(m)

    def heuristic_narrative(self, m, lean, conf) -> str:
        return (
            f"{m.ticker} makes {_strength_word(lean)} long: {m.return_3m:+.0%} over 3m, "
            f"{m.return_12m:+.0%} over 12m, {'riding above' if m.above_200d else 'working back toward'} "
            f"the 200-day with a {m.sharpe_like:.2f} Sharpe-like. The trend is your friend here."
        )

    def system_prompt(self) -> str:
        return ("You are the Bull goblin: a relentlessly long-biased analyst. Make "
                "the strongest HONEST case to BUY, citing numbers. You NEVER argue "
                "to short -- at worst you're lukewarm. 2-3 sentences, no hype.")


class Bear(Curator):
    """Always argues caution/avoid. Strength tracks risk + weak trend."""
    name = "Bear"
    stance = "bear"

    def lean_confidence(self, m: PriceMetrics) -> Tuple[float, float]:
        mo = momentum_read(m)
        risk = (min(1.0, m.annualized_vol / 0.8) * 0.3
                + min(1.0, abs(m.max_drawdown) / 0.6) * 0.3)
        mag = _clip(0.4 - 0.4 * mo + risk + (0.15 if m.rsi_14 > 75 else 0.0)
                    + (0.10 if not m.above_200d else 0.0), 0.05, 1.0)
        return -mag, clarity(m)

    def heuristic_narrative(self, m, lean, conf) -> str:
        return (
            f"{m.ticker} is {_strength_word(abs(lean))} avoid: {m.annualized_vol:.0%} vol, "
            f"a {m.max_drawdown:.0%} historical drawdown"
            f"{', and an overbought RSI ' + format(m.rsi_14, '.0f') if m.rsi_14 > 75 else ''}. "
            f"{'Below the 200-day, so trend support is thin. ' if not m.above_200d else ''}"
            f"The downside is realer than the crowd thinks."
        )

    def system_prompt(self) -> str:
        return ("You are the Bear goblin: skeptical, risk-focused. Make the strongest "
                "HONEST case to AVOID or be cautious, citing numbers. You NEVER argue "
                "to buy aggressively. 2-3 sentences, no doom-hype.")


class Momentum(Curator):
    """Pure trend-follower. Free-signed lean: long strength, short weakness."""
    name = "Momentum"
    stance = "momentum"

    def lean_confidence(self, m: PriceMetrics) -> Tuple[float, float]:
        mo = momentum_read(m)
        lean = _clip(mo * 1.1 + (0.15 if m.above_200d else -0.15), -1.0, 1.0)
        return lean, clarity(m)

    def heuristic_narrative(self, m, lean, conf) -> str:
        direction = "upside" if lean >= 0 else "downside"
        return (
            f"{m.ticker} has {_strength_word(abs(lean))} {direction} trend: "
            f"1m {m.return_1m:+.0%}, 3m {m.return_3m:+.0%}, 12m {m.return_12m:+.0%}, "
            f"{'above' if m.above_200d else 'below'} the 200-day. Trade the tape, not the story."
        )

    def system_prompt(self) -> str:
        return ("You are the Momentum goblin: you only care about price trend and "
                "follow it in either direction. Cite the return numbers and the "
                "200-day in 2 sentences. Ignore narrative and valuation entirely.")


# ── Macro: universe-level regime, not per-ticker ─────────────────────────────

MARKET_TICKER = "_MARKET_"


class Macro:
    """Top-down regime read from market breadth + the SPY benchmark trend.

    Different shape from the per-ticker lenses: one report per date, ticker
    sentinel '_MARKET_'. Traders use its lean to scale gross exposure (risk-off
    -> hold more cash), not to pick individual names."""
    name = "Macro"
    stance = "macro"

    @staticmethod
    def _regime(lean: float) -> str:
        return "risk-on" if lean > 0.2 else "risk-off" if lean < -0.2 else "neutral"

    def lean_confidence(self, facts_by_ticker: Dict[str, PriceMetrics],
                        spy: Optional[PriceMetrics]) -> Tuple[float, float, dict]:
        names = list(facts_by_ticker.values())
        n = max(1, len(names))
        breadth_200 = sum(1 for m in names if m.above_200d) / n
        breadth_3m = sum(1 for m in names if m.return_3m > 0) / n
        spy_3m = spy.return_3m if spy else 0.0
        spy_above = 1.0 if (spy and spy.above_200d) else 0.0

        lean = _clip((breadth_200 - 0.5) * 1.5 + (breadth_3m - 0.5) * 1.0
                     + _clip(spy_3m, -0.2, 0.2) / 0.2 * 0.5
                     + (spy_above - 0.5) * 0.4, -1.0, 1.0)
        conf = _clip(0.4 + 0.6 * abs(breadth_200 - 0.5) * 2, 0.1, 1.0)
        detail = {"breadth_above_200d": round(breadth_200, 3),
                  "breadth_pos_3m": round(breadth_3m, 3),
                  "spy_return_3m": round(spy_3m, 4),
                  "spy_above_200d": bool(spy_above),
                  "regime": self._regime(lean), "n_names": len(names)}
        return lean, conf, detail

    def system_prompt(self) -> str:
        return ("You are the Macro goblin: top-down only. Given market breadth and "
                "the index trend, call the regime (risk-on / neutral / risk-off) and "
                "say what gross exposure it implies, in 2 sentences. No single stocks.")

    def _heuristic_narrative(self, lean: float, d: dict) -> str:
        return (
            f"Regime: {d['regime']} (lean {lean:+.2f}). {d['breadth_above_200d']:.0%} of "
            f"names are above their 200-day and {d['breadth_pos_3m']:.0%} are positive "
            f"over 3m; the index is {'above' if d['spy_above_200d'] else 'below'} its "
            f"200-day ({d['spy_return_3m']:+.0%} 3m). "
            + ("Lean into risk. " if lean > 0.2 else
               "Pare gross exposure, raise cash. " if lean < -0.2 else
               "Stay balanced. ")
        )

    def run(self, conn, run_id: int, agent_id: int, as_of_date: str,
            facts_by_ticker: Dict[str, PriceMetrics], spy: Optional[PriceMetrics],
            llm, real_llm: bool, model: str) -> int:
        lean, conf, detail = self.lean_confidence(facts_by_ticker, spy)
        llm_call_id = None
        if real_llm:
            user = (f"Market breadth: {detail['breadth_above_200d']:.0%} above 200-day, "
                    f"{detail['breadth_pos_3m']:.0%} positive 3m. Index "
                    f"{'above' if detail['spy_above_200d'] else 'below'} 200-day, "
                    f"{detail['spy_return_3m']:+.0%} 3m. Computed lean {lean:+.2f}.\n\n"
                    "Write your 2-sentence regime call.")
            completion = llm.complete(self.system_prompt(), user,
                                      max_tokens=200, temperature=0.6)
            narrative = completion.strip() or self._heuristic_narrative(lean, detail)
            llm_call_id = report_store.insert_llm_call(
                conn, run_id, agent_id, as_of_date, model,
                {"max_tokens": 200, "temperature": 0.6}, user, completion)
        else:
            narrative = self._heuristic_narrative(lean, detail)
        return report_store.insert_report(
            conn, run_id, agent_id, MARKET_TICKER, as_of_date, self.stance,
            detail, narrative, conf, lean, llm_call_id)
