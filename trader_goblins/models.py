"""Data structures that flow through the pipeline.

The whole point of Phase 1 is a *coherent, explainable* research artifact, so
the Research Packet is the star of the show. Every agent contributes a typed
piece to it, and the report is just a rendering of this object.
"""
from __future__ import annotations

import json
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from typing import Dict, List, Optional


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


@dataclass
class ScannerPick:
    ticker: str
    score: float
    reason: str


@dataclass
class QuantView:
    ticker: str
    fair_value_note: str
    momentum_score: float       # 0-100
    quality_flags: List[str]
    summary: str


@dataclass
class RiskView:
    ticker: str
    risk_score: float           # 0-100, higher = riskier
    var_95_1d: float            # 1-day 95% historical VaR (negative number)
    downside_notes: List[str]
    position_sizing_hint: str


@dataclass
class Argument:
    """A Bull or Bear case."""

    stance: str                 # "bull" or "bear"
    thesis: str
    key_points: List[str]
    biggest_risk_to_view: str


@dataclass
class TickerResearch:
    """Everything the firm thinks about a single ticker."""

    ticker: str
    metrics: PriceMetrics
    scanner: ScannerPick
    quant: QuantView
    risk: RiskView
    bull: Argument
    bear: Argument
    pm_verdict: str = ""        # synthesized recommendation
    conviction: float = 0.0     # 0-1


@dataclass
class ResearchPacket:
    """The deliverable of Phase 1."""

    created_at: str = field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat())
    universe: List[str] = field(default_factory=list)
    data_source: str = "unknown"
    llm_source: str = "unknown"
    candidates: List[TickerResearch] = field(default_factory=list)

    def to_json(self, indent: int = 2) -> str:
        return json.dumps(asdict(self), indent=indent, default=str)
