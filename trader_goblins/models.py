"""Shared data structures.

PriceMetrics is the deterministic fact bundle computed by metrics.compute_metrics
and read by the curators, traders, and research tools. (The Phase 1 Research
Packet types that used to live here retired with the old run.py pipeline.)
"""
from __future__ import annotations

from dataclasses import dataclass


def human_dollars(x: float) -> str:
    """Compact dollar string: 1.2B / 340M / 5.0M / 12.3K."""
    for unit, scale in (("B", 1e9), ("M", 1e6), ("K", 1e3)):
        if abs(x) >= scale:
            return f"${x / scale:,.1f}{unit}"
    return f"${x:,.0f}"


@dataclass
class PriceMetrics:
    """Deterministic facts about a ticker. No opinions, just numbers."""

    ticker: str
    last_price: float
    return_1m: float
    return_3m: float
    return_12m: float
    annualized_vol: float
    sharpe_like: float          # excess-return / vol, rough proxy
    max_drawdown: float         # most negative peak-to-trough over lookback
    avg_dollar_volume: float    # liquidity proxy
    above_200d: bool            # price above its 200-day moving average
    rsi_14: float

    def as_bullets(self) -> str:
        return (
            f"- Last price: ${self.last_price:,.2f}\n"
            f"- Returns 1m/3m/12m: {self.return_1m:+.1%} / {self.return_3m:+.1%} / {self.return_12m:+.1%}\n"
            f"- Annualized volatility: {self.annualized_vol:.1%}\n"
            f"- Sharpe-like ratio: {self.sharpe_like:.2f}\n"
            f"- Max drawdown (lookback): {self.max_drawdown:.1%}\n"
            f"- RSI(14): {self.rsi_14:.0f}\n"
            f"- Above 200-day MA: {'yes' if self.above_200d else 'no'}\n"
            f"- Avg daily $ volume: {human_dollars(self.avg_dollar_volume)}"
        )
