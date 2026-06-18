"""Market data layer.

Two providers behind one interface:

  * YFinanceProvider  -> real, free daily OHLCV from Yahoo (needs `yfinance`)
  * SyntheticProvider -> deterministic fake data so the whole pipeline runs
                         with zero network access (used for tests / demos)

`get_provider()` picks the real one if it can import yfinance, otherwise it
falls back to synthetic and tells you. All downstream code only sees a
DataFrame of daily closes + volumes, so swapping in Polygon/Alpaca later is a
single new class.
"""
from __future__ import annotations

from typing import Dict, Protocol

import numpy as np
import pandas as pd


class MarketDataProvider(Protocol):
    name: str

    def history(self, ticker: str, lookback_days: int) -> pd.DataFrame:
        """Return a DataFrame indexed by date with 'close' and 'volume' columns."""
        ...


class YFinanceProvider:
    """Real daily data from Yahoo Finance (free)."""

    name = "yfinance"

    def __init__(self) -> None:
        import yfinance as yf  # imported lazily so synthetic mode needs nothing
        self._yf = yf

    def history(self, ticker: str, lookback_days: int) -> pd.DataFrame:
        # pad the calendar window since lookback_days is in *trading* days
        period_days = int(lookback_days * 1.6) + 10
        raw = self._yf.Ticker(ticker).history(period=f"{period_days}d", auto_adjust=True)
        if raw.empty:
            raise ValueError(f"No data returned for {ticker}")
        df = pd.DataFrame(
            {"close": raw["Close"], "volume": raw["Volume"]}
        ).dropna()
        return df.tail(lookback_days)

    def ohlc_history(self, ticker: str, lookback_days: int) -> pd.DataFrame:
        """Like history() but keeps open/high/low too -- for candlestick charts."""
        period_days = int(lookback_days * 1.6) + 10
        raw = self._yf.Ticker(ticker).history(period=f"{period_days}d", auto_adjust=True)
        if raw.empty:
            raise ValueError(f"No data returned for {ticker}")
        df = pd.DataFrame({"open": raw["Open"], "high": raw["High"], "low": raw["Low"],
                           "close": raw["Close"], "volume": raw["Volume"]}).dropna()
        return df.tail(lookback_days)

    def batch_history(self, tickers, lookback_days: int):
        """Download many tickers in one request -> {ticker: DataFrame}. Much
        faster than per-ticker calls; bad/empty tickers are skipped."""
        period_days = int(lookback_days * 1.6) + 10
        raw = self._yf.download(list(tickers), period=f"{period_days}d",
                                auto_adjust=True, progress=False, group_by="ticker",
                                threads=True)
        out = {}
        for t in tickers:
            try:
                sub = raw[t] if t in raw.columns.get_level_values(0) else None
                if sub is None or sub.empty:
                    continue
                df = pd.DataFrame({"close": sub["Close"], "volume": sub["Volume"]}).dropna()
                if len(df) >= 30:
                    out[t] = df.tail(lookback_days)
            except Exception:
                continue
        return out


class SyntheticProvider:
    """Deterministic geometric-Brownian-motion style series per ticker.

    Same ticker -> same series every run (seeded by ticker name), so tests and
    demos are reproducible and each ticker has its own personality.
    """

    name = "synthetic"

    def __init__(self, base_seed: int = 7, drift_bias: float = 0.0,
                 jump_rate: float = 0.03, jump_mean: float = -0.03,
                 vol_scale: float = 1.0) -> None:
        # Regime knobs (defaults reproduce the original world): drift_bias shifts
        # every ticker's daily drift, jump_rate/jump_mean control the rare shocks,
        # vol_scale stretches volatility. The eval harness dials these for
        # bull / bear / choppy regimes.
        self.base_seed = base_seed
        self.drift_bias = drift_bias
        self.jump_rate = jump_rate
        self.jump_mean = jump_mean
        self.vol_scale = vol_scale

    def _seed_for(self, ticker: str) -> int:
        return self.base_seed + sum(ord(c) for c in ticker)

    def history(self, ticker: str, lookback_days: int) -> pd.DataFrame:
        rng = np.random.default_rng(self._seed_for(ticker))
        n = lookback_days
        # Give each ticker a distinct drift/vol so the agents have variety.
        drift = rng.uniform(-0.0006, 0.0018) + self.drift_bias   # daily
        vol = rng.uniform(0.010, 0.030) * self.vol_scale         # daily
        start_price = rng.uniform(20, 400)
        shocks = rng.normal(drift, vol, size=n)
        # rare shocks to create occasional drawdowns worth analyzing
        jump_hits = (rng.random(n) < self.jump_rate).astype(float)
        jumps = jump_hits * rng.normal(self.jump_mean, 0.02, size=n)
        log_returns = shocks + jumps
        prices = start_price * np.exp(np.cumsum(log_returns))
        base_vol = rng.uniform(1e6, 5e7)
        volumes = (base_vol * (1 + 0.3 * np.abs(rng.normal(size=n)))).astype(float)
        dates = pd.bdate_range(end=pd.Timestamp.today().normalize(), periods=n)
        return pd.DataFrame({"close": prices, "volume": volumes}, index=dates)


def get_provider(prefer_real: bool = True, base_seed: int = 7):
    """Return (provider, is_real). Falls back to synthetic if yfinance missing."""
    if prefer_real:
        try:
            return YFinanceProvider(), True
        except Exception:
            pass
    return SyntheticProvider(base_seed=base_seed), False


def fetch_universe(provider, tickers, lookback_days: int) -> Dict[str, pd.DataFrame]:
    """Fetch all tickers, skipping any that error out."""
    out: Dict[str, pd.DataFrame] = {}
    for t in tickers:
        try:
            df = provider.history(t, lookback_days)
            if len(df) >= 30:
                out[t] = df
        except Exception as e:  # noqa: BLE001 - one bad ticker shouldn't kill the run
            print(f"  [data] skipping {t}: {e}")
    return out
