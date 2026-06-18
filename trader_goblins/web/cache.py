"""Read-through TTL cache for the research server.

The deep-dive leans on yfinance (an unofficial Yahoo scraper that rate-limits
and breaks without warning) and SEC EDGAR. Hitting them once per ticker per day
instead of once per click is the difference between a snappy page and a flaky
one. Backed by its own SQLite file so the cache survives restarts; a fresh
connection per call keeps it safe under the threaded HTTP server.

Resilience touch: if the compute fn() raises but we hold a stale cached value,
we serve the stale value rather than failing -- exactly the yfinance-flakes-out
case the cache exists to soften.
"""
from __future__ import annotations

import json
import sqlite3
import time
from pathlib import Path
from typing import Any, Callable

# Project root (…/trader_goblins/web/cache.py -> parents[2]).
CACHE_PATH = str(Path(__file__).resolve().parents[2] / "research_cache.db")

_SCHEMA = """
CREATE TABLE IF NOT EXISTS research_cache (
  key        TEXT PRIMARY KEY,
  value      TEXT NOT NULL,
  fetched_at REAL NOT NULL
);
"""


def _conn() -> sqlite3.Connection:
    conn = sqlite3.connect(CACHE_PATH, timeout=10)
    conn.execute("PRAGMA journal_mode = WAL")
    conn.executescript(_SCHEMA)
    return conn


def get_or_compute(kind: str, ticker: str, ttl_seconds: float,
                   fn: Callable[[], Any]) -> Any:
    """Return cached JSON for (kind, ticker) if younger than ttl_seconds, else
    call fn(), cache its result, and return it.

    fn()'s return value must be JSON-serializable. If fn() raises and a (stale)
    cached value exists, that stale value is returned; otherwise the exception
    propagates so the caller can mark the panel unavailable.
    """
    key = f"{kind}:{ticker.upper()}"
    now = time.time()
    conn = _conn()
    try:
        row = conn.execute(
            "SELECT value, fetched_at FROM research_cache WHERE key = ?", (key,)
        ).fetchone()
        if row and (now - row[1]) < ttl_seconds:
            return json.loads(row[0])
        try:
            value = fn()
        except Exception:
            if row:                       # serve stale rather than fail outright
                return json.loads(row[0])
            raise
        conn.execute(
            "INSERT OR REPLACE INTO research_cache (key, value, fetched_at) "
            "VALUES (?, ?, ?)", (key, json.dumps(value, default=str), now))
        conn.commit()
        return value
    finally:
        conn.close()
