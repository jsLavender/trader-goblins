"""Curator scaffolding + shared deterministic fact reads.

Design choice that makes biased curators *informative* and *auditable*:

  * lean (-1..+1) and confidence (0..1) are computed DETERMINISTICALLY from the
    shared Quant facts. The bias lives in how each lens weights those facts and
    in fixed-sign clamps (Bull never goes negative, Bear never positive). So the
    trading SIGNAL is reproducible and identical online/offline.
  * The LLM (when a key is present) only writes the prose NARRATIVE -- the spin
    in the goblin's voice. Offline, a templated narrative stands in. Either way
    the number a trader acts on is the same.

This mirrors Phase 1's rule (numbers deterministic, opinions LLM) and means we
can debug behavior keyless before spending a token.
"""
from __future__ import annotations

from dataclasses import asdict
from typing import Tuple

from ..db import reports as report_store
from ..metrics import PriceMetrics


# ── shared deterministic reads ────────────────────────────────────────────────

def _clip(x: float, lo: float, hi: float) -> float:
    if x != x:                       # NaN
        return 0.0
    return lo if x < lo else hi if x > hi else x


def momentum_read(m: PriceMetrics) -> float:
    """Blended price momentum normalized to ~[-1, +1]."""
    r1 = _clip(m.return_1m, -0.15, 0.15) / 0.15
    r3 = _clip(m.return_3m, -0.30, 0.30) / 0.30
    r12 = _clip(m.return_12m, -0.50, 0.50) / 0.50
    return _clip(0.5 * r3 + 0.3 * r12 + 0.2 * r1, -1.0, 1.0)


def clarity(m: PriceMetrics) -> float:
    """How clear-cut the evidence is (0..1): do the horizons agree, is the
    risk-adjusted return decisive, is volatility not drowning the signal."""
    signs = [(1 if x > 0 else -1 if x < 0 else 0)
             for x in (m.return_1m, m.return_3m, m.return_12m)]
    agree = abs(sum(signs)) / 3.0
    sharpe_term = min(1.0, abs(m.sharpe_like) / 1.5)
    vol_penalty = max(0.0, (m.annualized_vol - 0.5) / 0.5) * 0.2
    return _clip(0.3 + 0.4 * agree + 0.3 * sharpe_term - vol_penalty, 0.05, 1.0)


# ── base curator ──────────────────────────────────────────────────────────────

class Curator:
    """A per-ticker biased lens. Subclasses implement lean_confidence() and the
    two narrative builders."""

    name = "curator"
    stance = "neutral"

    def lean_confidence(self, m: PriceMetrics) -> Tuple[float, float]:
        raise NotImplementedError

    def heuristic_narrative(self, m: PriceMetrics, lean: float, conf: float) -> str:
        raise NotImplementedError

    def system_prompt(self) -> str:
        raise NotImplementedError

    def _user_prompt(self, m: PriceMetrics, lean: float, conf: float) -> str:
        return (
            f"Ticker {m.ticker}. Your computed lean is {lean:+.2f} "
            f"(confidence {conf:.2f}).\n{m.as_bullets()}\n\n"
            "Write your 2-3 sentence narrative in character, citing the numbers. "
            "No hype. Prose only."
        )

    def run(self, conn, run_id: int, agent_id: int, as_of_date: str,
            ticker: str, m: PriceMetrics, llm, real_llm: bool, model: str) -> int:
        lean, conf = self.lean_confidence(m)
        llm_call_id = None
        if real_llm:
            user = self._user_prompt(m, lean, conf)
            completion = llm.complete(self.system_prompt(), user,
                                      max_tokens=300, temperature=0.7)
            narrative = completion.strip() or self.heuristic_narrative(m, lean, conf)
            llm_call_id = report_store.insert_llm_call(
                conn, run_id, agent_id, as_of_date, model,
                {"max_tokens": 300, "temperature": 0.7}, user, completion)
        else:
            narrative = self.heuristic_narrative(m, lean, conf)
        return report_store.insert_report(
            conn, run_id, agent_id, ticker, as_of_date, self.stance,
            asdict(m), narrative, conf, lean, llm_call_id)
