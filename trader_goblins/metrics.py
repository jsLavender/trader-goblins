"""Pure, deterministic price math. No LLM, no opinions.

This is the firm's single source of numerical truth. The Quant and Risk agents
phrase these numbers; they never invent them.
"""
from __future__ import annotations

import numpy as np
import pandas as pd

from .models import PriceMetrics

TRADING_DAYS = 252
RISK_FREE_ANNUAL = 0.04  # rough; only used for the Sharpe-like proxy


def _pct_return(series: pd.Series, lookback: int) -> float:
    if len(series) < 2:
        return float("nan")
    # Clamp so a ~1y window still works when we hold exactly `lookback` rows.
    lookback = min(lookback, len(series) - 1)
    return float(series.iloc[-1] / series.iloc[-1 - lookback] - 1.0)


def _rsi(close: pd.Series, period: int = 14) -> float:
    delta = close.diff().dropna()
    if len(delta) < period:
        return 50.0
    gain = delta.clip(lower=0).rolling(period).mean()
    loss = (-delta.clip(upper=0)).rolling(period).mean()
    rs = gain / loss.replace(0, np.nan)
    rsi = 100 - 100 / (1 + rs)
    val = rsi.iloc[-1]
    return float(val) if not np.isnan(val) else 50.0


def _max_drawdown(close: pd.Series) -> float:
    running_max = close.cummax()
    drawdown = close / running_max - 1.0
    return float(drawdown.min())


def compute_metrics(ticker: str, df: pd.DataFrame) -> PriceMetrics:
    close = df["close"].astype(float)
    volume = df["volume"].astype(float)
    daily_ret = close.pct_change().dropna()

    ann_vol = float(daily_ret.std() * np.sqrt(TRADING_DAYS)) if len(daily_ret) else 0.0
    ann_ret = float(daily_ret.mean() * TRADING_DAYS) if len(daily_ret) else 0.0
    sharpe_like = (ann_ret - RISK_FREE_ANNUAL) / ann_vol if ann_vol > 1e-9 else 0.0

    ma200 = close.rolling(min(200, len(close))).mean().iloc[-1]
    avg_dollar_vol = float((close * volume).tail(20).mean())

    return PriceMetrics(
        ticker=ticker,
        last_price=float(close.iloc[-1]),
        return_1m=_pct_return(close, 21),
        return_3m=_pct_return(close, 63),
        return_12m=_pct_return(close, 252),
        annualized_vol=ann_vol,
        sharpe_like=float(sharpe_like),
        max_drawdown=_max_drawdown(close),
        avg_dollar_volume=avg_dollar_vol,
        above_200d=bool(close.iloc[-1] > ma200),
        rsi_14=_rsi(close),
    )


def historical_var(df: pd.DataFrame, confidence: float = 0.95) -> float:
    """1-day historical Value at Risk as a (negative) return number."""
    daily_ret = df["close"].astype(float).pct_change().dropna()
    if daily_ret.empty:
        return 0.0
    return float(np.percentile(daily_ret, (1 - confidence) * 100))
