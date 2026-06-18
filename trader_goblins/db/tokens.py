"""Minimal arcade token economy: an append-only ledger.

Tokens are earned (stipend now; performance-linked later) and will be spent on
the commissioning desk (info-market) once that layer lands. For now the faucet
runs so balances exist and the economy is wired; there's no sink yet.
"""
from __future__ import annotations

import sqlite3
from datetime import datetime, timezone
from typing import Optional


def grant(conn: sqlite3.Connection, account_id: int, date: str, delta: float,
          reason: str) -> None:
    """Credit (+) or debit (-) tokens for an account."""
    conn.execute(
        "INSERT INTO token_ledger (account_id, date, delta, reason, created_at) "
        "VALUES (?, ?, ?, ?, ?)",
        (account_id, date, delta, reason, datetime.now(timezone.utc).isoformat()))
    conn.commit()


def balance(conn: sqlite3.Connection, account_id: int) -> float:
    row = conn.execute(
        "SELECT COALESCE(SUM(delta), 0) AS bal FROM token_ledger WHERE account_id = ?",
        (account_id,)).fetchone()
    return float(row["bal"])
