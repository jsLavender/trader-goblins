"""Day-1 trading plan:  python -m trader_goblins.plan [TICKER ...]

The forward view: fetch today's real data, have the curators write their reports,
then show -- per trader goblin -- exactly what positions it intends to open
tomorrow (long or short, and how big) and WHY (which analysts it leaned on). No
trading happens; this is each goblin's stated plan before day one.
"""
from __future__ import annotations

import sys
from typing import List

from .curators.lenses import MARKET_TICKER
from .curators.pipeline import run_curators_for_date
from .data import build_run_prices
from .data.market_data import YFinanceProvider
from .db import prices as price_store
from .db import reports as report_store
from .db import store
from .sim.traders import default_roster

WATCHLIST = ["AAPL", "MSFT", "NVDA", "GOOGL", "META", "AMZN", "TSLA",
             "JPM", "XOM", "KO", "WMT", "JNJ"]


def _why(bundle, trust) -> str:
    """The two analysts that most drove this trader's view of the name."""
    c = [(r["name"], r["lean"], abs(trust.get(r["name"], 0) * r["lean"] * r["confidence"]))
         for r in bundle if trust.get(r["name"], 0)]
    c.sort(key=lambda x: -x[2])
    return ", ".join(f"{n} {l:+.2f}" for n, l, _ in c[:2]) or "no trusted signal"


def main() -> None:
    tickers = [a.upper() for a in sys.argv[1:]] or WATCHLIST
    print(f"Fetching live data for {len(tickers)} tickers and writing reports...\n")

    conn = store.init_db(":memory:")
    run_id = store.create_run(conn, mode="live", note="day-1 plan")
    build_run_prices(conn, run_id, YFinanceProvider(), tickers, lookback_days=252)
    dates = price_store.trading_dates(conn, run_id)
    if not dates:
        print("no price data returned.")
        return
    today = dates[-1]
    run_curators_for_date(conn, run_id, today, tickers, prefer_real_llm=False)

    macro = report_store.reports_asof(conn, run_id, MARKET_TICKER, today)
    print(f"PLAN for the session after {today}")
    if macro:
        print(f"Macro goblin: {macro[0]['narrative']}\n")

    for goblin in default_roster():
        agent_id = store.get_or_create_agent(conn, goblin.name, "trader")
        acct = store.create_account(conn, run_id, agent_id, 100_000.0)
        trust = goblin._trust(conn, acct, today)
        target = goblin.decide(conn, run_id, acct, today, step=0) or {}

        kind = "long/short" if goblin.persona.long_short else "long-only"
        tag = ", contrarian (fades the consensus)" if goblin.persona.contrarian else ""
        print(f"=== {goblin.name} ({kind}{tag}) ===")
        if not target:
            print("  sits in cash -- nothing convincing enough.\n")
            continue
        for t, w in sorted(target.items(), key=lambda kv: -abs(kv[1])):
            side = "LONG " if w > 0 else "SHORT"
            bundle = report_store.reports_asof(conn, run_id, t, today)
            lead = "fading" if goblin.persona.contrarian else "reading"
            print(f"  {side} {t:<6} {abs(w):>5.0%}   {lead}: {_why(bundle, trust)}")
        print()

    conn.close()
    print("This is the forward plan -- no trades placed yet. Re-run any day; the\n"
          "goblins re-read fresh reports and re-plan.")


if __name__ == "__main__":
    main()
