"""Run the curator tier for a single as-of date.

Computes the shared facts per ticker once (windowed, leak-free), runs the four
per-ticker lenses, then the universe-level Macro goblin. Heuristic offline,
Claude when ANTHROPIC_API_KEY is set.
"""
from __future__ import annotations

import sqlite3
from typing import Dict, List, Tuple

from ..config import Settings
from ..db import prices as price_store
from ..db import store
from ..llm import get_llm
from ..metrics import PriceMetrics, compute_metrics
from .lenses import Bull, Bear, Macro, Momentum, Quant

PER_TICKER_CURATORS = [Quant(), Bull(), Bear(), Momentum()]
MIN_HISTORY = 30          # warmup: skip names without enough history to mean anything


def run_curators_for_date(conn: sqlite3.Connection, run_id: int, as_of_date: str,
                          tickers: List[str], prefer_real_llm: bool = True,
                          model: str = Settings.llm_model,
                          verbose: bool = False) -> Tuple[int, bool]:
    """Write reports for all curators as of `as_of_date`. Returns (n_reports, real_llm).
    `tickers` should be the stock universe (excluding the SPY benchmark)."""
    llm, real_llm = get_llm(model, prefer_real_llm)

    agent_ids = {c.name: store.get_or_create_agent(conn, c.name, "curator",
                                                    {"stance": c.stance})
                 for c in PER_TICKER_CURATORS}
    macro = Macro()
    macro_id = store.get_or_create_agent(conn, macro.name, "curator",
                                         {"stance": macro.stance})

    facts_by_ticker: Dict[str, PriceMetrics] = {}
    n_reports = 0
    for t in tickers:
        df = price_store.history_asof(conn, run_id, t, as_of_date)
        if len(df) < MIN_HISTORY:
            continue
        facts = compute_metrics(t, df)
        facts_by_ticker[t] = facts
        for c in PER_TICKER_CURATORS:
            c.run(conn, run_id, agent_ids[c.name], as_of_date, t, facts,
                  llm, real_llm, model)
            n_reports += 1

    spy_df = price_store.history_asof(conn, run_id, "SPY", as_of_date)
    spy_facts = compute_metrics("SPY", spy_df) if len(spy_df) >= MIN_HISTORY else None
    macro.run(conn, run_id, macro_id, as_of_date, facts_by_ticker, spy_facts,
              llm, real_llm, model)
    n_reports += 1

    if verbose:
        src = "Claude" if real_llm else "heuristic"
        print(f"[curators] {as_of_date}: {n_reports} reports over "
              f"{len(facts_by_ticker)} names ({src})")
    return n_reports, real_llm
