"""Quant -> does the math.

Fully deterministic. Translates the PriceMetrics into a momentum score, a few
quality flags, and a plain-English valuation/positioning note. No LLM, so this
view is identical online or offline -- the firm's numerical backbone.
"""
from __future__ import annotations

from ..metrics import PriceMetrics
from ..models import QuantView
from .base import Agent


class QuantAgent(Agent):
    def run(self, m: PriceMetrics) -> QuantView:
        momentum = self._momentum_score(m)
        flags = self._quality_flags(m)
        note = self._fair_value_note(m)
        summary = (
            f"Momentum {momentum:.0f}/100, annualized vol {m.annualized_vol:.0%}, "
            f"Sharpe-like {m.sharpe_like:.2f}. "
            + ("Trend-positive. " if m.above_200d else "Below long-term trend. ")
            + (f"Flags: {', '.join(flags)}." if flags else "No quality flags.")
        )
        return QuantView(
            ticker=m.ticker,
            fair_value_note=note,
            momentum_score=momentum,
            quality_flags=flags,
            summary=summary,
        )

    @staticmethod
    def _momentum_score(m: PriceMetrics) -> float:
        r1, r3, r12 = (x if x == x else 0.0 for x in
                       (m.return_1m, m.return_3m, m.return_12m))
        raw = 0.5 * r3 + 0.3 * r12 + 0.2 * r1
        # squash to 0-100 around a +/-30% band
        return round(max(0.0, min(100.0, 50 + raw / 0.30 * 50)), 1)

    @staticmethod
    def _quality_flags(m: PriceMetrics) -> list[str]:
        flags = []
        if m.rsi_14 > 75:
            flags.append("overbought (RSI>75)")
        if m.rsi_14 < 30:
            flags.append("oversold (RSI<30)")
        if m.annualized_vol > 0.6:
            flags.append("high volatility")
        if m.sharpe_like > 1.0:
            flags.append("strong risk-adjusted return")
        if m.max_drawdown < -0.4:
            flags.append("deep historical drawdown")
        return flags

    @staticmethod
    def _fair_value_note(m: PriceMetrics) -> str:
        # Phase 1 has no fundamentals feed, so this is an honest placeholder that
        # frames price action rather than pretending to know intrinsic value.
        trend = "an uptrend" if m.above_200d else "a downtrend"
        return (
            f"No fundamentals feed yet (Phase 1). On price action alone, {m.ticker} "
            f"is in {trend}; 12m return {m.return_12m:+.0%} with "
            f"{m.annualized_vol:.0%} annualized vol. Treat valuation as unknown "
            f"until a fundamentals source is wired in."
        )
