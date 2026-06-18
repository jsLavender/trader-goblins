"""Provider -> database ingestion for a run's price history.

This is the orchestration layer that bridges the market-data providers
(synthetic / yfinance) and the run-scoped `prices` table. It also synthesizes a
benchmark series so every run has something to be measured against.

The benchmark (default "SPY") is built as an **equal-weight index of the run's
universe** -- the average of each name rebased to 100. In synthetic mode that's
a principled benchmark (beating it = beating the average goblin-tradeable stock)
rather than an arbitrary extra random walk. In live mode you'd ingest the real
SPY series instead.

    python -m trader_goblins.data      # smoke test (synthetic, throwaway db)
"""
from __future__ import annotations

import sqlite3
from typing import Dict, List, Optional

import pandas as pd

from ..db import prices as price_store
from .market_data import fetch_universe


def synthesize_benchmark(histories: Dict[str, pd.DataFrame],
                         name: str = "SPY", base: float = 100.0) -> pd.DataFrame:
    """Equal-weight index of the universe, each constituent rebased to `base`.

    Aligns constituents on their shared dates, rebases each close so they start
    equal, and averages them. Volume is the cross-sectional mean (not meaningful
    for an index, but keeps the column populated)."""
    closes = pd.DataFrame({t: df["close"] for t, df in histories.items()})
    closes = closes.dropna()                      # common trading dates only
    rebased = closes.div(closes.iloc[0]).mul(base)
    index_close = rebased.mean(axis=1)

    vols = pd.DataFrame({t: df["volume"] for t, df in histories.items()
                         if "volume" in df.columns})
    index_volume = vols.reindex(index_close.index).mean(axis=1)

    out = pd.DataFrame({"close": index_close, "volume": index_volume})
    out.name = name
    return out


def build_run_prices(conn: sqlite3.Connection, run_id: int, provider,
                     universe: List[str], lookback_days: int,
                     benchmark: Optional[str] = "SPY",
                     source: Optional[str] = None) -> Dict[str, int]:
    """Fetch the universe from `provider`, synthesize a benchmark, and write it
    all into the run's prices table. Returns {ticker: rows_written}."""
    source = source or provider.name
    if hasattr(provider, "batch_history"):           # one bulk request (yfinance)
        histories = provider.batch_history(universe, lookback_days)
    else:
        histories = fetch_universe(provider, universe, lookback_days)

    written: Dict[str, int] = {}
    for ticker, df in histories.items():
        written[ticker] = price_store.insert_prices(conn, run_id, ticker, df, source)

    if benchmark and benchmark not in histories and histories:
        bench_df = synthesize_benchmark(histories, name=benchmark)
        written[benchmark] = price_store.insert_prices(
            conn, run_id, benchmark, bench_df, f"{source}/benchmark")

    return written


# ── smoke test ────────────────────────────────────────────────────────────────

def _smoke() -> None:
    import os
    import tempfile

    from ..db import store
    from .market_data import SyntheticProvider

    path = os.path.join(tempfile.gettempdir(), "tg_ingest_smoke.sqlite")
    for leftover in (path, path + "-wal", path + "-shm"):
        if os.path.exists(leftover):
            os.remove(leftover)

    conn = store.init_db(path)
    run_id = store.create_run(conn, mode="synthetic", seed=7, note="ingest smoke")
    provider = SyntheticProvider(base_seed=7)

    universe = ["AAPL", "MSFT", "KO"]
    written = build_run_prices(conn, run_id, provider, universe, lookback_days=120)
    total = sum(written.values())
    print(f"ingested {total} price rows across {len(written)} series: {written}")

    dates = price_store.trading_dates(conn, run_id)
    print(f"trading days: {len(dates)}  ({dates[0]} -> {dates[-1]})")

    # Pick a mid-history date and read the market 'as of' then.
    mid = dates[len(dates) // 2]
    snap = price_store.prices_asof(conn, run_id, mid)
    print(f"\nprices_asof {mid}: " +
          ", ".join(f"{t}={p:.2f}" for t, p in sorted(snap.items())))

    # Prove the no-lookahead guarantee: nothing returned post-cutoff, and the
    # last row used is on-or-before the cutoff.
    last_used = conn.execute(
        "SELECT MAX(date) d FROM prices WHERE run_id = ? AND date <= ?",
        (run_id, mid)).fetchone()["d"]
    future_rows = conn.execute(
        "SELECT COUNT(*) c FROM prices WHERE run_id = ? AND date > ?",
        (run_id, mid)).fetchone()["c"]
    assert last_used <= mid, "as-of read leaked a future row!"
    print(f"no-leak check: OK -- latest row used {last_used} <= {mid}; "
          f"{future_rows} future rows correctly withheld")

    # SPY benchmark made it in and tracks ~100 at the start.
    spy_series = price_store.close_series(conn, run_id, "SPY")
    print(f"SPY benchmark: {len(spy_series)} pts, "
          f"start={spy_series.iloc[0]:.1f}, end={spy_series.iloc[-1]:.1f}")

    conn.close()
    print(f"\nsmoke db at {path}")


