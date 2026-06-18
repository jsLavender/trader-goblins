"""Replay driver + leaderboard.

Steps a run's trading calendar one day at a time. On each day, every account's
strategy may set a new target (or hold), the engine executes it, and every
account is marked to market. Walking the *stored* trading dates -- and reading
prices only as-of each date -- is what makes the whole loop point-in-time clean.
"""
from __future__ import annotations

import sqlite3
from typing import Dict, List, Optional, Tuple

from ..db import prices as price_store
from . import engine
from .strategies import Strategy


def run_replay(conn: sqlite3.Connection, run_id: int,
               accounts: List[Tuple[int, Strategy]],
               start=None, end=None, verbose: bool = False) -> List[str]:
    """Drive (account_id, strategy) pairs across the run's calendar. Returns the
    list of dates stepped."""
    dates = price_store.trading_dates(conn, run_id, start=start, end=end)
    for step, date in enumerate(dates):
        for account_id, strat in accounts:
            target = strat.decide(conn, run_id, account_id, date, step)
            if target is not None:
                engine.rebalance_to(conn, run_id, account_id, target, date)
            engine.mark(conn, run_id, account_id, date)
        if verbose and (step % 21 == 0 or step == len(dates) - 1):
            print(f"  [replay] {date} (day {step + 1}/{len(dates)})")
    return dates


def final_standings(conn: sqlite3.Connection, run_id: int) -> Tuple[Optional[str], List[Dict]]:
    """Leaderboard at the last marked date: rows sorted by equity desc, each with
    name, tier, equity, total return, and excess return vs the SPY yardstick."""
    last_row = conn.execute(
        "SELECT MAX(n.date) AS d FROM nav_history n "
        "JOIN accounts a ON a.id = n.account_id WHERE a.run_id = ?", (run_id,)).fetchone()
    last = last_row["d"]
    if last is None:
        return None, []

    rows = conn.execute(
        "SELECT ag.name, ag.tier, a.starting_cash, n.equity "
        "FROM nav_history n "
        "JOIN accounts a ON a.id = n.account_id "
        "JOIN agents ag ON ag.id = a.agent_id "
        "WHERE a.run_id = ? AND n.date = ? ORDER BY n.equity DESC",
        (run_id, last)).fetchall()

    standings = [{"name": r["name"], "tier": r["tier"], "equity": r["equity"],
                  "return": r["equity"] / r["starting_cash"] - 1.0} for r in rows]

    spy = next((s["return"] for s in standings if s["name"] == "SPY-Holder"), None)
    for s in standings:
        s["vs_spy"] = (s["return"] - spy) if spy is not None else None
    return last, standings
