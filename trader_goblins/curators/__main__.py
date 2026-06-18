"""Curator-tier smoke test:  python -m trader_goblins.curators

Ingests a synthetic universe, runs all five curators as of a mid-history date,
and prints the report bundle for one ticker + the Macro regime call. Verifies
the bias invariants (Bull lean >= 0, Bear lean <= 0). Heuristic offline.
"""
from __future__ import annotations

import os
import tempfile

from ..data import build_run_prices
from ..data.market_data import SyntheticProvider
from ..db import reports as report_store
from ..db import prices as price_store
from ..db import store
from .lenses import MARKET_TICKER
from .pipeline import run_curators_for_date

UNIVERSE = ["AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "KO", "XOM"]


def main() -> None:
    path = os.path.join(tempfile.gettempdir(), "tg_curators_smoke.sqlite")
    for leftover in (path, path + "-wal", path + "-shm"):
        if os.path.exists(leftover):
            os.remove(leftover)

    conn = store.init_db(path)
    run_id = store.create_run(conn, mode="synthetic", seed=7, note="curator smoke")
    provider = SyntheticProvider(base_seed=7)
    build_run_prices(conn, run_id, provider, UNIVERSE, lookback_days=252)

    dates = price_store.trading_dates(conn, run_id)
    as_of = dates[200]                          # plenty of warmup
    n, real = run_curators_for_date(conn, run_id, as_of, UNIVERSE,
                                    prefer_real_llm=False, verbose=True)
    print(f"wrote {n} reports ({'Claude' if real else 'heuristic'})\n")

    sample = "NVDA"
    print(f"REPORT BUNDLE for {sample} as of {as_of}:")
    for r in report_store.reports_asof(conn, run_id, sample, as_of):
        print(f"  {r['name']:<9} lean {r['lean']:+.2f}  conf {r['confidence']:.2f}  "
              f"| {r['narrative']}")

    print(f"\nMACRO (market-level):")
    for r in report_store.reports_asof(conn, run_id, MARKET_TICKER, as_of):
        print(f"  {r['name']:<9} lean {r['lean']:+.2f}  conf {r['confidence']:.2f}  "
              f"| {r['narrative']}")

    # Bias invariants across every per-ticker report.
    rows = conn.execute(
        "SELECT ag.name, MIN(r.lean) lo, MAX(r.lean) hi FROM reports r "
        "JOIN agents ag ON ag.id = r.agent_id "
        "WHERE r.run_id = ? AND r.ticker != ? GROUP BY ag.name",
        (run_id, MARKET_TICKER)).fetchall()
    print("\nbias invariants (lean range per curator):")
    ok = True
    for r in rows:
        flag = ""
        if r["name"] == "Bull" and r["lo"] < 0:
            flag, ok = "  !! Bull went negative", False
        if r["name"] == "Bear" and r["hi"] > 0:
            flag, ok = "  !! Bear went positive", False
        print(f"  {r['name']:<9} [{r['lo']:+.2f}, {r['hi']:+.2f}]{flag}")
    print("invariants:", "OK" if ok else "FAILED")

    conn.close()
    print(f"\nsmoke db at {path}")


if __name__ == "__main__":
    main()
