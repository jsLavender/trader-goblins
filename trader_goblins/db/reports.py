"""Read/write helpers for curator output: `reports` and `llm_calls`.

Reports carry both a structured signal (lean + confidence, deterministic and
auditable) and the prose narrative (LLM or heuristic). llm_calls stores the full
prompt/completion for any real model call -- the quirk-tracing audit trail.
"""
from __future__ import annotations

import json
import sqlite3
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional


def _utcnow() -> str:
    return datetime.now(timezone.utc).isoformat()


def _json(value: Any) -> Optional[str]:
    if value is None or isinstance(value, str):
        return value
    return json.dumps(value, default=str)


def insert_llm_call(conn: sqlite3.Connection, run_id: int, agent_id: int,
                    as_of_date: str, model: str, params: Any,
                    prompt: str, completion: str,
                    seed: Optional[int] = None) -> int:
    cur = conn.execute(
        "INSERT INTO llm_calls (run_id, agent_id, as_of_date, model, params_json, "
        "prompt, completion, seed, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        (run_id, agent_id, as_of_date, model, _json(params), prompt, completion,
         seed, _utcnow()),
    )
    conn.commit()
    return int(cur.lastrowid)


def insert_report(conn: sqlite3.Connection, run_id: int, agent_id: int,
                  ticker: str, as_of_date: str, stance: str, facts: Any,
                  narrative: str, confidence: float, lean: float,
                  llm_call_id: Optional[int] = None) -> int:
    cur = conn.execute(
        "INSERT INTO reports (run_id, agent_id, ticker, as_of_date, stance, "
        "facts_json, narrative, confidence, lean, llm_call_id, created_at) "
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        (run_id, agent_id, ticker, as_of_date, stance, _json(facts), narrative,
         confidence, lean, llm_call_id, _utcnow()),
    )
    conn.commit()
    return int(cur.lastrowid)


def reports_asof(conn: sqlite3.Connection, run_id: int, ticker: str,
                 as_of_date: str) -> List[Dict]:
    """Latest report per curator for a ticker on or before `as_of_date`. This is
    the bundle a trader peer consumes for a name."""
    sql = (
        "SELECT name, stance, lean, confidence, narrative, as_of_date FROM ("
        "  SELECT ag.name, r.stance, r.lean, r.confidence, r.narrative, r.as_of_date,"
        "         ROW_NUMBER() OVER (PARTITION BY r.agent_id ORDER BY r.as_of_date DESC) AS rn"
        "  FROM reports r JOIN agents ag ON ag.id = r.agent_id"
        "  WHERE r.run_id = ? AND r.ticker = ? AND r.as_of_date <= ?"
        ") WHERE rn = 1 ORDER BY name"
    )
    return [dict(r) for r in conn.execute(sql, (run_id, ticker, as_of_date))]
