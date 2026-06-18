"""Persist trader decisions (the 'why' behind a rebalance).

One row per trader per rebalance, carrying the rationale + a link to the
llm_call that produced it. Trades (fills) and the llm_call join to this by
(account, date), giving trades -> reasoning -> exact prompt provenance.
"""
from __future__ import annotations

import sqlite3
from datetime import datetime, timezone
from typing import Optional


def insert_decision(conn: sqlite3.Connection, run_id: int, account_id: int,
                    as_of_date: str, rationale: str,
                    llm_call_id: Optional[int] = None,
                    ticker: str = "_PORTFOLIO_", action: str = "REBALANCE",
                    target_weight: Optional[float] = None,
                    report_refs: Optional[str] = None) -> int:
    cur = conn.execute(
        "INSERT INTO decisions (run_id, account_id, as_of_date, ticker, action, "
        "target_weight, rationale, report_refs_json, llm_call_id, created_at) "
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        (run_id, account_id, as_of_date, ticker, action, target_weight, rationale,
         report_refs, llm_call_id, datetime.now(timezone.utc).isoformat()))
    conn.commit()
    return int(cur.lastrowid)
