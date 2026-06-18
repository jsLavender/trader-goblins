"""Smoke test for the persistence layer:  python -m trader_goblins.db

Builds a throwaway database, creates the schema, writes one run/agent/account,
reads it back via a join, and proves foreign keys are actually enforced. Prints
a short report and deletes the temp file. No network, no API key.
"""
from __future__ import annotations

import os
import sqlite3
import tempfile

from . import store


def main() -> None:
    path = os.path.join(tempfile.gettempdir(), "tg_db_smoke.sqlite")
    for leftover in (path, path + "-wal", path + "-shm"):
        if os.path.exists(leftover):
            os.remove(leftover)

    conn = store.init_db(path)

    version = conn.execute("PRAGMA user_version").fetchone()[0]
    tables = [r["name"] for r in conn.execute(
        "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name")]
    print(f"schema_version = {version}")
    print(f"{len(tables)} tables: {', '.join(tables)}")

    run_id = store.create_run(conn, mode="synthetic", seed=7, note="smoke")
    agent_id = store.create_agent(conn, "Bull", "curator", {"bias": "bull"})
    acct_id = store.create_account(conn, run_id, agent_id, starting_cash=100_000)

    row = conn.execute(
        "SELECT a.id AS account, ag.name, ag.tier, a.cash "
        "FROM accounts a JOIN agents ag ON ag.id = a.agent_id WHERE a.id = ?",
        (acct_id,)).fetchone()
    print(f"wrote run={run_id} agent={agent_id} account={acct_id} -> {dict(row)}")

    # Prove foreign keys bite: an account pointing at a non-existent run/agent
    # must be rejected, otherwise REFERENCES are decorative.
    try:
        conn.execute("INSERT INTO accounts (run_id, agent_id, starting_cash, cash) "
                     "VALUES (999, 999, 1, 1)")
        conn.commit()
        print("FK check: FAILED -- orphan row was allowed")
    except sqlite3.IntegrityError:
        print("FK check: OK -- orphan row rejected")

    conn.close()
    print(f"smoke db at {path}")


if __name__ == "__main__":
    main()
