"""Persistence for forward predictions (the live calls the tracker marks later)."""
from __future__ import annotations

import sqlite3
from datetime import datetime, timezone
from typing import List, Optional


def insert_prediction(conn: sqlite3.Connection, as_of_date: str, ticker: str,
                      verdict: str, combined: float, price_at_call: float,
                      target: Optional[float], upside: Optional[float],
                      source: str = "live") -> int:
    cur = conn.execute(
        "INSERT INTO predictions (created_at, as_of_date, ticker, verdict, combined, "
        "price_at_call, target, upside, source) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        (datetime.now(timezone.utc).isoformat(), as_of_date, ticker, verdict,
         combined, price_at_call, target, upside, source))
    conn.commit()
    return int(cur.lastrowid)


def open_predictions(conn: sqlite3.Connection) -> List[dict]:
    return [dict(r) for r in conn.execute(
        "SELECT * FROM predictions ORDER BY as_of_date, ticker")]
