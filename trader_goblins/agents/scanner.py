"""Scanner -> finds interesting stocks.

Deterministic screen ranks the whole universe by a blended momentum / trend /
liquidity / not-overextended score. The top N are promoted as candidates, each
with a one-line rationale (LLM-phrased, heuristic offline).
"""
from __future__ import annotations

from typing import Dict, List

from ..metrics import PriceMetrics
from ..models import ScannerPick, human_dollars
from .base import Agent


def _raw_score(m: PriceMetrics) -> float:
    """Unbounded composite used for *ranking*. Rewards trend + momentum +
    liquidity, lightly penalizes being overbought or extremely volatile. Can
    run past 100 for exceptional names -- that's fine for sorting; the displayed
    score is clamped to 0-100 by `_display_score`."""
    score = 0.0
    score += 40 * _clip(m.return_3m, -0.3, 0.3) / 0.3        # 3m momentum
    score += 20 * _clip(m.return_12m, -0.5, 0.5) / 0.5       # 12m trend
    score += 15 if m.above_200d else -10                     # regime
    score += 10 * _clip(m.sharpe_like, -1, 2) / 2            # risk-adj
    # liquidity gate
    score += 10 if m.avg_dollar_volume > 5e6 else -5
    # avoid chasing overbought names
    if m.rsi_14 > 75:
        score -= 12
    elif m.rsi_14 < 30:
        score += 6                                           # potential bounce
    # punish silly volatility
    if m.annualized_vol > 0.8:
        score -= 10
    return round(score + 50, 1)


def _display_score(m: PriceMetrics) -> float:
    """Ranking score clamped to a sane 0-100 for reporting."""
    return round(max(0.0, min(100.0, _raw_score(m))), 1)


def _clip(x: float, lo: float, hi: float) -> float:
    if x != x:  # NaN
        return 0.0
    return max(lo, min(hi, x))


class ScannerAgent(Agent):
    def run(self, metrics: Dict[str, PriceMetrics], top_n: int) -> List[ScannerPick]:
        ranked = sorted(metrics.values(), key=_raw_score, reverse=True)
        picks: List[ScannerPick] = []
        for m in ranked[:top_n]:
            s = _display_score(m)
            reason = self._rationale(m, s)
            picks.append(ScannerPick(ticker=m.ticker, score=s, reason=reason))
        return picks

    def _rationale(self, m: PriceMetrics, score: float) -> str:
        heuristic = {
            "reason": (
                f"Promoted on a {score:.0f}/100 screen score: "
                f"3m momentum {m.return_3m:+.0%}, 12m {m.return_12m:+.0%}, "
                f"{'above' if m.above_200d else 'below'} the 200-day, "
                f"RSI {m.rsi_14:.0f}, liquid at {human_dollars(m.avg_dollar_volume)}/day."
            )
        }
        system = (
            "You are the Scanner at a research firm. In ONE sentence, explain why "
            "this stock is worth a deeper look, citing the numbers. Be specific, "
            "no hype."
        )
        user = f"Ticker {m.ticker}. Screen score {score:.0f}/100.\n{m.as_bullets()}"
        out = self._ask_json(system, user, heuristic, max_tokens=200, temperature=0.4)
        return out.get("reason", heuristic["reason"])
