"""Risk -> measures downside.

Deterministic. Turns volatility, drawdown, and historical VaR into a 0-100 risk
score, concrete downside notes, and a position-sizing hint. No LLM.
"""
from __future__ import annotations

import pandas as pd

from ..metrics import PriceMetrics, historical_var
from ..models import RiskView
from .base import Agent


class RiskAgent(Agent):
    def run(self, m: PriceMetrics, df: pd.DataFrame) -> RiskView:
        var95 = historical_var(df, 0.95)
        risk_score = self._risk_score(m, var95)
        notes = self._downside_notes(m, var95)
        sizing = self._sizing_hint(risk_score)
        return RiskView(
            ticker=m.ticker,
            risk_score=risk_score,
            var_95_1d=var95,
            downside_notes=notes,
            position_sizing_hint=sizing,
        )

    @staticmethod
    def _risk_score(m: PriceMetrics, var95: float) -> float:
        score = 0.0
        score += min(50.0, m.annualized_vol / 0.8 * 50)        # vol component
        score += min(30.0, abs(m.max_drawdown) / 0.6 * 30)     # drawdown component
        score += min(20.0, abs(var95) / 0.06 * 20)             # tail component
        return round(min(100.0, score), 1)

    @staticmethod
    def _downside_notes(m: PriceMetrics, var95: float) -> list[str]:
        notes = [
            f"1-day 95% VaR of {var95:.1%}: a typical bad day loses about that much.",
            f"Worst peak-to-trough over the lookback: {m.max_drawdown:.0%}.",
            f"Annualized volatility {m.annualized_vol:.0%}.",
        ]
        if not m.above_200d:
            notes.append("Trading below its 200-day MA -> weaker trend support.")
        if m.rsi_14 > 75:
            notes.append("Overbought (RSI>75) -> elevated pullback risk.")
        return notes

    @staticmethod
    def _sizing_hint(risk_score: float) -> str:
        if risk_score >= 70:
            return "High risk: size small (e.g. <=2% of book), use a hard stop."
        if risk_score >= 45:
            return "Moderate risk: standard size (~3-5%), define a stop."
        return "Lower risk: can carry a fuller position (~5-7%) with normal stop."
