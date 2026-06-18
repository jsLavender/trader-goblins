"""Fundamental + analyst signals from yfinance (no API key).

These are CURRENT (latest) figures, so they're valid only for FORWARD prediction
-- using them at a past backtest date would be lookahead leakage. fetch_signals
is defensive: any missing field comes back None so the firm degrades gracefully
on thinly-covered tickers.
"""
from __future__ import annotations

from typing import Dict, Optional

_FIELDS = ["currentPrice", "targetMeanPrice", "targetHighPrice", "targetLowPrice",
           "recommendationMean", "recommendationKey", "numberOfAnalystOpinions",
           "trailingPE", "priceToBook", "profitMargins", "revenueGrowth",
           "returnOnEquity", "marketCap"]


def fetch_signals(ticker: str) -> Dict[str, Optional[float]]:
    """Return a dict of fundamental/analyst fields (+ implied analyst upside).
    Never raises -- on failure every field is None."""
    out: Dict[str, Optional[float]] = {k: None for k in _FIELDS}
    out["ticker"] = ticker
    out["implied_upside"] = None
    try:
        import yfinance as yf
        info = yf.Ticker(ticker).info or {}
        for k in _FIELDS:
            v = info.get(k)
            out[k] = v if v not in ("", None) else None
        price, target = out["currentPrice"], out["targetMeanPrice"]
        if price and target and price > 0:
            out["implied_upside"] = target / price - 1.0
    except Exception:
        pass
    return out
