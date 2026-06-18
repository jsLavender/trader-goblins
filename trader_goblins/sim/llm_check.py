"""Offline check of the LLM decision path:  python -m trader_goblins.sim.llm_check

No API key needed -- a stub model returns a deliberately messy completion (code
fences, an over-cap weight, an unknown ticker) so we can verify prompt assembly,
defensive parsing, risk-cap enforcement, and provenance writes (llm_calls +
decisions) all work before a real key is ever attached.
"""
from __future__ import annotations

import os
import tempfile

from ..curators.pipeline import run_curators_for_date
from ..data import build_run_prices
from ..data.market_data import SyntheticProvider
from ..db import prices as price_store
from ..db import store
from .traders import default_roster

UNIVERSE = ["AAPL", "MSFT", "NVDA", "KO"]

# Messy on purpose: fenced, AAPL over Grik's 40% cap, ZZZZ not in the universe.
STUB_COMPLETION = (
    "Here's my read:\n```json\n"
    '{"targets":[{"ticker":"AAPL","weight":0.9},{"ticker":"MSFT","weight":0.25},'
    '{"ticker":"ZZZZ","weight":0.3}],"rationale":"AAPL momentum strong; nibble MSFT."}\n'
    "```\n")


class StubLLM:
    name = "stub"

    def __init__(self, payload):
        self.payload = payload
        self.last_user = None

    def complete(self, system, user, max_tokens=700, temperature=0.7):
        self.last_user = user
        return self.payload


def main() -> None:
    path = os.path.join(tempfile.gettempdir(), "tg_llm_check.sqlite")
    for leftover in (path, path + "-wal", path + "-shm"):
        if os.path.exists(leftover):
            os.remove(leftover)

    conn = store.init_db(path)
    run_id = store.create_run(conn, mode="synthetic", seed=7, note="llm path check")
    build_run_prices(conn, run_id, SyntheticProvider(base_seed=7), UNIVERSE, lookback_days=120)
    dates = price_store.trading_dates(conn, run_id)
    as_of = dates[80]
    run_curators_for_date(conn, run_id, as_of, UNIVERSE, prefer_real_llm=False)

    grik = default_roster()[0]                          # Grik: max_weight 0.40, max_positions 4
    stub = StubLLM(STUB_COMPLETION)
    grik.attach_llm(stub, real_llm=True, model="stub")
    agent_id = store.get_or_create_agent(conn, grik.name, "trader")
    acct = store.create_account(conn, run_id, agent_id, 100_000.0)

    weights = grik.decide(conn, run_id, acct, as_of, step=0)

    prompt = stub.last_user or ""
    print(f"as_of {as_of}, account {acct}")
    print(f"prompt assembled: {len(prompt)} chars; lists candidates: {'- AAPL' in prompt}")
    print(f"target weights (after caps): {weights}")
    print("checks:")
    print(f"  AAPL clamped to <=0.40 : {weights.get('AAPL', 0) <= 0.4 + 1e-9}")
    print(f"  unknown ZZZZ dropped   : {'ZZZZ' not in weights}")
    print(f"  MSFT kept              : {'MSFT' in weights}")

    n_llm = conn.execute("SELECT COUNT(*) c FROM llm_calls WHERE run_id=? AND agent_id=?",
                         (run_id, agent_id)).fetchone()["c"]
    dec = conn.execute("SELECT rationale FROM decisions WHERE account_id=?",
                       (acct,)).fetchone()
    print(f"  llm_call logged        : {n_llm == 1}")
    print(f"  decision rationale     : {dec['rationale'] if dec else None!r}")

    conn.close()
    print(f"\ncheck db at {path}")


if __name__ == "__main__":
    main()
