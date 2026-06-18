"""Read/write helpers for the run-scoped `prices` table.

This module is the *only* place that talks to the prices table, and it is where
the no-lookahead rule lives: `prices_asof` and friends never return a row dated
after the as-of date. The replay driver reads market state exclusively through
here, so a goblin literally cannot see a price that hasn't happened yet.

Pure DB logic -- it knows nothing about providers (see data/ingest.py for the
provider -> table direction).
"""
from __future__ import annotations

import sqlite3
from typing import Dict, List, Optional

import pandas as pd


def _to_date_str(value) -> str:
    """Normalize a Timestamp / datetime / 'YYYY-MM-DD...' to a bare date string."""
    return pd.Timestamp(value).strftime("%Y-%m-%d")


# ── write ────────────────────────────────────────────────────────────────────

def insert_prices(conn: sqlite3.Connection, run_id: int, ticker: str,
                  df: pd.DataFrame, source: str = "synthetic") -> int:
    """Write a DataFrame (index=dates, columns close[/volume]) into prices.

    INSERT OR REPLACE keyed on (run_id, ticker, date), so re-ingesting a run is
    idempotent. Returns the number of rows written.
    """
    has_volume = "volume" in df.columns
    rows = [
        (run_id, ticker, _to_date_str(idx), float(row["close"]),
         float(row["volume"]) if has_volume and pd.notna(row["volume"]) else None,
         source)
        for idx, row in df.iterrows()
    ]
    conn.executemany(
        "INSERT OR REPLACE INTO prices (run_id, ticker, date, close, volume, source) "
        "VALUES (?, ?, ?, ?, ?, ?)",
        rows,
    )
    conn.commit()
    return len(rows)


# ── read (point-in-time) ──────────────────────────────────────────────────────

def prices_asof(conn: sqlite3.Connection, run_id: int, as_of_date,
                tickers: Optional[List[str]] = None) -> Dict[str, float]:
    """Latest close on or before `as_of_date` for each ticker -> {ticker: close}.

    The window-function pick of the most recent <= date row is what enforces the
    no-lookahead guarantee for execution and marking.
    """
    as_of = _to_date_str(as_of_date)
    sql = (
        "SELECT ticker, close FROM ("
        "  SELECT ticker, date, close,"
        "         ROW_NUMBER() OVER (PARTITION BY ticker ORDER BY date DESC) AS rn"
        "  FROM prices WHERE run_id = ? AND date <= ?"
        ") WHERE rn = 1"
    )
    params: list = [run_id, as_of]
    if tickers:
        placeholders = ",".join("?" * len(tickers))
        sql = sql.replace("date <= ?", f"date <= ? AND ticker IN ({placeholders})")
        params.extend(tickers)
    return {r["ticker"]: r["close"] for r in conn.execute(sql, params)}


def price_on_or_before(conn: sqlite3.Connection, run_id: int, ticker: str,
                       as_of_date) -> Optional[float]:
    """Single ticker's most recent close on or before `as_of_date` (or None)."""
    row = conn.execute(
        "SELECT close FROM prices WHERE run_id = ? AND ticker = ? AND date <= ? "
        "ORDER BY date DESC LIMIT 1",
        (run_id, ticker, _to_date_str(as_of_date)),
    ).fetchone()
    return float(row["close"]) if row else None


def close_series(conn: sqlite3.Connection, run_id: int, ticker: str,
                 end_date=None) -> pd.Series:
    """Close history for a ticker up to `end_date` (inclusive) as a pandas Series
    indexed by date. This is what the curators will compute metrics on, windowed
    so the math never sees the future."""
    sql = "SELECT date, close FROM prices WHERE run_id = ? AND ticker = ?"
    params: list = [run_id, ticker]
    if end_date is not None:
        sql += " AND date <= ?"
        params.append(_to_date_str(end_date))
    sql += " ORDER BY date ASC"
    rows = conn.execute(sql, params).fetchall()
    s = pd.Series({pd.Timestamp(r["date"]): r["close"] for r in rows}, dtype="float64")
    s.name = ticker
    return s


def history_asof(conn: sqlite3.Connection, run_id: int, ticker: str,
                 end_date=None) -> pd.DataFrame:
    """close+volume history for a ticker up to `end_date` (inclusive) as a
    DataFrame indexed by date -- the windowed frame curators compute metrics on,
    so even the analysis never sees the future."""
    sql = "SELECT date, close, volume FROM prices WHERE run_id = ? AND ticker = ?"
    params: list = [run_id, ticker]
    if end_date is not None:
        sql += " AND date <= ?"
        params.append(_to_date_str(end_date))
    sql += " ORDER BY date ASC"
    rows = conn.execute(sql, params).fetchall()
    if not rows:
        return pd.DataFrame(columns=["close", "volume"])
    idx = [pd.Timestamp(r["date"]) for r in rows]
    return pd.DataFrame(
        {"close": [r["close"] for r in rows],
         "volume": [r["volume"] for r in rows]},
        index=idx)


def trading_dates(conn: sqlite3.Connection, run_id: int,
                  start=None, end=None) -> List[str]:
    """Sorted distinct dates present for a run -- the clock the replay driver steps."""
    sql = "SELECT DISTINCT date FROM prices WHERE run_id = ?"
    params: list = [run_id]
    if start is not None:
        sql += " AND date >= ?"
        params.append(_to_date_str(start))
    if end is not None:
        sql += " AND date <= ?"
        params.append(_to_date_str(end))
    sql += " ORDER BY date ASC"
    return [r["date"] for r in conn.execute(sql, params)]


def avg_dollar_volume(conn: sqlite3.Connection, run_id: int, ticker: str,
                      as_of_date=None, window: int = 20) -> Optional[float]:
    """Mean close*volume over the last `window` sessions on or before the date --
    the liquidity figure the cost model's market-impact term divides by."""
    sql = "SELECT close, volume FROM prices WHERE run_id = ? AND ticker = ?"
    params: list = [run_id, ticker]
    if as_of_date is not None:
        sql += " AND date <= ?"
        params.append(_to_date_str(as_of_date))
    sql += " ORDER BY date DESC LIMIT ?"
    params.append(window)
    vals = [r["close"] * r["volume"] for r in conn.execute(sql, params)
            if r["volume"] is not None]
    return sum(vals) / len(vals) if vals else None


def tickers_in_run(conn: sqlite3.Connection, run_id: int) -> List[str]:
    return [r["ticker"] for r in conn.execute(
        "SELECT DISTINCT ticker FROM prices WHERE run_id = ? ORDER BY ticker",
        (run_id,))]
