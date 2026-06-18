"""Persistence for evolved champion genomes -- the 'hall of champions'.

Each row is one champion persona (genes + generation + fitness + lineage) that
survived a breeding run. Genomes outlive the backtests that bred them, so the
gene pool has a memory and any champion can be promoted to trade live.
"""
from __future__ import annotations

import json
import sqlite3
from datetime import datetime, timezone
from typing import List, Optional


def _row(r: sqlite3.Row) -> dict:
    d = dict(r)
    d["genome"] = json.loads(d.pop("genome_json"))
    return d


def max_generation(conn: sqlite3.Connection) -> int:
    return int(conn.execute(
        "SELECT COALESCE(MAX(generation), 0) g FROM genomes").fetchone()["g"])


def save_champion(conn: sqlite3.Connection, genome: dict, fitness: float,
                  generation: Optional[int] = None, name: Optional[str] = None,
                  parents: Optional[str] = None, note: Optional[str] = None) -> int:
    if generation is None:
        generation = max_generation(conn) + 1
    name = name or f"champ-g{generation}"
    cur = conn.execute(
        "INSERT INTO genomes (generation, name, genome_json, fitness, parents, note, created_at) "
        "VALUES (?, ?, ?, ?, ?, ?, ?)",
        (generation, name, json.dumps(genome), fitness, parents, note,
         datetime.now(timezone.utc).isoformat()))
    conn.commit()
    return int(cur.lastrowid)


def list_champions(conn: sqlite3.Connection) -> List[dict]:
    return [_row(r) for r in conn.execute(
        "SELECT * FROM genomes ORDER BY generation, id")]


def latest_champion(conn: sqlite3.Connection) -> Optional[dict]:
    r = conn.execute(
        "SELECT * FROM genomes ORDER BY generation DESC, id DESC LIMIT 1").fetchone()
    return _row(r) if r else None


def get_champion(conn: sqlite3.Connection, genome_id: int) -> Optional[dict]:
    r = conn.execute("SELECT * FROM genomes WHERE id = ?", (genome_id,)).fetchone()
    return _row(r) if r else None
