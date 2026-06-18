"""SQLite persistence layer for Trader Goblins.

One file = one experiment database holding many *runs*. This module owns the
connection (with the right PRAGMAs), schema init, and a thin set of insert
helpers. It is deliberately NOT an ORM -- queries live where they're used.

    from trader_goblins.db import store
    conn = store.init_db("trader_goblins.db")
    run_id = store.create_run(conn, mode="synthetic", seed=7)
"""
from __future__ import annotations

import json
import sqlite3
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Optional

SCHEMA_PATH = Path(__file__).with_name("schema.sql")
SCHEMA_VERSION = 4                     # bump + add a migration when schema.sql changes
DEFAULT_DB_PATH = "trader_goblins.db"  # v2: reports.lean; v3: predictions; v4: genomes


def _utcnow() -> str:
    return datetime.now(timezone.utc).isoformat()


def _json(value: Any) -> Optional[str]:
    """Serialize dict/list columns to TEXT; pass through None and existing str."""
    if value is None or isinstance(value, str):
        return value
    return json.dumps(value, default=str)


def connect(path: str = DEFAULT_DB_PATH) -> sqlite3.Connection:
    """Open a connection with foreign keys enforced and WAL journaling.

    SQLite ships with foreign_keys OFF *per connection*, so every connection
    must opt in or the schema's REFERENCES are silently decorative. WAL lets the
    replay driver read while a write is in flight.
    """
    conn = sqlite3.connect(path)
    conn.row_factory = sqlite3.Row           # rows behave like dicts
    conn.execute("PRAGMA foreign_keys = ON")
    conn.execute("PRAGMA journal_mode = WAL")
    return conn


def init_db(path: str = DEFAULT_DB_PATH) -> sqlite3.Connection:
    """Create (idempotently) the schema and return an open connection."""
    conn = connect(path)
    conn.executescript(SCHEMA_PATH.read_text(encoding="utf-8"))
    conn.execute(f"PRAGMA user_version = {SCHEMA_VERSION}")
    conn.commit()
    return conn


# ── insert helpers (return the new row id) ───────────────────────────────────

def create_run(conn: sqlite3.Connection, mode: str = "synthetic",
               seed: Optional[int] = None, settings: Any = None,
               note: Optional[str] = None) -> int:
    cur = conn.execute(
        "INSERT INTO runs (started_at, mode, seed, settings_json, note) "
        "VALUES (?, ?, ?, ?, ?)",
        (_utcnow(), mode, seed, _json(settings), note),
    )
    conn.commit()
    return int(cur.lastrowid)


def create_agent(conn: sqlite3.Connection, name: str, tier: str,
                 persona: Any = None) -> int:
    cur = conn.execute(
        "INSERT INTO agents (name, tier, persona_json, created_at) "
        "VALUES (?, ?, ?, ?)",
        (name, tier, _json(persona), _utcnow()),
    )
    conn.commit()
    return int(cur.lastrowid)


def get_or_create_agent(conn: sqlite3.Connection, name: str, tier: str,
                        persona: Any = None) -> int:
    """Agents are stable across runs (names are UNIQUE), so look up by name first."""
    row = conn.execute("SELECT id FROM agents WHERE name = ?", (name,)).fetchone()
    return int(row["id"]) if row else create_agent(conn, name, tier, persona)


def create_account(conn: sqlite3.Connection, run_id: int, agent_id: int,
                   starting_cash: float) -> int:
    cur = conn.execute(
        "INSERT INTO accounts (run_id, agent_id, starting_cash, cash) "
        "VALUES (?, ?, ?, ?)",
        (run_id, agent_id, starting_cash, starting_cash),
    )
    conn.commit()
    return int(cur.lastrowid)
