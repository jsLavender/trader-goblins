"""Persistence for the improvement spine: trust_weights + reflections.

trust_weights is per (trader account, curator) -- each peer learns its OWN trust,
so personalities don't collapse into one consensus. reflections is the memory
log (also the audit trail of how risk appetite shifted over time).
"""
from __future__ import annotations

import sqlite3
from datetime import datetime, timezone
from typing import Dict, Optional


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


def get_trust(conn: sqlite3.Connection, account_id: int) -> Dict[str, float]:
    rows = conn.execute(
        "SELECT ag.name AS n, t.weight AS w FROM trust_weights t "
        "JOIN agents ag ON ag.id = t.curator_agent_id WHERE t.account_id = ?",
        (account_id,)).fetchall()
    return {r["n"]: r["w"] for r in rows}


def set_trust(conn: sqlite3.Connection, account_id: int, curator_name: str,
              weight: float, date: str) -> None:
    row = conn.execute("SELECT id FROM agents WHERE name = ?", (curator_name,)).fetchone()
    if not row:
        return
    conn.execute(
        "INSERT OR REPLACE INTO trust_weights (account_id, curator_agent_id, weight, "
        "updated_date) VALUES (?, ?, ?, ?)", (account_id, row["id"], weight, date))
    conn.commit()


def seed_trust(conn: sqlite3.Connection, account_id: int,
               trust_by_name: Dict[str, float], date: str) -> None:
    for name, w in trust_by_name.items():
        set_trust(conn, account_id, name, w, date)


def insert_reflection(conn: sqlite3.Connection, account_id: int, as_of_date: str,
                      note: str, trades_reviewed: Optional[str] = None) -> int:
    cur = conn.execute(
        "INSERT INTO reflections (account_id, as_of_date, note, trades_reviewed_json, "
        "created_at) VALUES (?, ?, ?, ?, ?)",
        (account_id, as_of_date, note, trades_reviewed, _now()))
    conn.commit()
    return int(cur.lastrowid)
