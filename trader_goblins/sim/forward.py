"""Forward firm: the goblins open a paper book TODAY on live data, now WITH the
fundamental teeth (Analyst + Value) folded into their decisions. Leak-free by
construction -- everything is dated today and looks only backward for price
history, so there is no lookahead. This is the honest counterpart to the
historical backtest (sim/firm.py), which deliberately never sees fundamentals.

    python -m trader_goblins.sim.forward                      # default watchlist, FREE heuristic
    python -m trader_goblins.sim.forward AAPL NVDA KO XOM     # custom watchlist
    python -m trader_goblins.sim.forward llm                  # let Claude write narratives (costs money)
    python -m trader_goblins.sim.forward my.db AAPL NVDA      # custom db + watchlist

What it does, for today's date:
  1. pulls live price history -> price curators (Quant/Bull/Bear/Momentum/Macro),
  2. pulls live fundamentals -> Analyst + Value curators (the teeth),
  3. every goblin decides a target book from its trust-weighted blend of ALL of
     the above, opens the positions, and the run is marked + persisted.

Re-run it on later days to roll the book forward; track P&L with the dashboard
(`python -m trader_goblins.dashboard trader_goblins.db <run_id>`) or
performance report. NOT investment advice.
"""
from __future__ import annotations

import sys
from typing import List

from ..curators.fundamentals import run_fundamental_curators_for_date
from ..curators.lenses import MARKET_TICKER
from ..curators.pipeline import run_curators_for_date
from ..data import build_run_prices
from ..data.market_data import YFinanceProvider
from ..db import prices as price_store
from ..db import reports as report_store
from ..db import store
from . import engine
from .firm import _make_accounts
from .replay import final_standings
from .traders import TraderGoblin

DEFAULT_WATCHLIST = [
    "AAPL", "MSFT", "NVDA", "GOOGL", "AMZN", "META", "JPM", "V",
    "UNH", "LLY", "XOM", "KO", "WMT", "HD", "COST",
]


def _teeth_table(conn, run_id: int, date: str, tickers: List[str]) -> None:
    """Show the new fundamental signals so you can see the teeth before the book."""
    print(f"\nFUNDAMENTAL TEETH as of {date} (Analyst = targets/consensus, Value = valuation):")
    print(f"  {'ticker':<8}{'analyst':>9}{'value':>8}  note")
    for t in tickers:
        bundle = {r["name"]: r for r in report_store.reports_asof(conn, run_id, t, date)}
        a, v = bundle.get("Analyst"), bundle.get("Value")
        if not a and not v:
            continue
        acell = f"{a['lean']:+.2f}/{a['confidence']:.2f}" if a else "   --   "
        vcell = f"{v['lean']:+.2f}/{v['confidence']:.2f}" if v else "   --   "
        note = (a["narrative"] if a else v["narrative"] if v else "")[:60]
        print(f"  {t:<8}{acell:>9}{vcell:>8}  {note}")


def _print_books(conn, run_id: int, accounts, date: str) -> None:
    """Each goblin's opening book + the curators (incl. teeth) that drove each name."""
    print("\nOPENING BOOKS (what each goblin would hold today):")
    for aid, strat in accounts:
        if not isinstance(strat, TraderGoblin):
            continue
        pos = conn.execute(
            "SELECT ticker, qty FROM positions WHERE account_id=? AND qty != 0", (aid,)).fetchall()
        eq = engine.equity(conn, run_id, aid, date)
        px = price_store.prices_asof(conn, run_id, date, [p["ticker"] for p in pos]) if pos else {}
        ls = "L/S" if strat.persona.long_short else "long-only"
        print(f"\n  {strat.name} ({ls}) -- {len(pos)} positions:")
        if not pos:
            print("    (all cash -- nothing convincing)")
            continue
        rows = sorted(((p["ticker"], p["qty"] * px.get(p["ticker"], 0.0) / eq if eq else 0.0)
                       for p in pos), key=lambda r: -abs(r[1]))
        for t, w in rows:
            bundle = {r["name"]: r for r in report_store.reports_asof(conn, run_id, t, date)}
            drivers = ", ".join(
                f"{nm} {bundle[nm]['lean']:+.2f}"
                for nm in ("Analyst", "Value", "Bull", "Bear", "Momentum", "Quant")
                if nm in bundle and strat.persona.trust.get(nm, 0.0) > 0)
            side = "LONG " if w >= 0 else "SHORT"
            print(f"    {side} {t:<6} {abs(w):>5.1%}   [{drivers}]")


def main() -> None:
    argv = list(sys.argv[1:])
    use_llm = "llm" in argv
    argv = [a for a in argv if a != "llm"]
    db_path = "trader_goblins.db"
    if argv and (argv[0].endswith(".db") or argv[0].endswith(".sqlite")):
        db_path = argv.pop(0)
    tickers = [t.upper() for t in argv] if argv else list(DEFAULT_WATCHLIST)

    conn = store.init_db(db_path)
    run_id = store.create_run(conn, mode="live", seed=0,
                              settings={"watchlist": tickers, "use_llm": use_llm,
                                        "kind": "forward"},
                              note="forward firm (live data + fundamental teeth)")
    print(f"DB {db_path}  |  run_id {run_id}  |  FORWARD (live)  |  {len(tickers)} names"
          f"  |  brain: {'Claude (costs money)' if use_llm else 'heuristic (free)'}")

    print("\nfetching live prices...")
    build_run_prices(conn, run_id, YFinanceProvider(), tickers, lookback_days=252)
    dates = price_store.trading_dates(conn, run_id)
    if not dates:
        print("no price data returned -- check tickers / network.")
        conn.close()
        return
    today = dates[-1]

    # 1) price curators, 2) the fundamental teeth -- both dated today (leak-free).
    run_curators_for_date(conn, run_id, today, tickers, prefer_real_llm=use_llm, verbose=True)
    run_fundamental_curators_for_date(conn, run_id, today, tickers,
                                      prefer_real_llm=use_llm, verbose=True)

    macro = report_store.reports_asof(conn, run_id, MARKET_TICKER, today)
    if macro:
        print(f"\nMacro regime: {macro[0]['narrative']}")
    _teeth_table(conn, run_id, today, tickers)

    # 3) every account opens its book as of today, marked once.
    accounts = _make_accounts(conn, run_id, announce=True, use_llm=use_llm)
    for account_id, strat in accounts:
        target = strat.decide(conn, run_id, account_id, today, step=0)
        if target is not None:
            engine.rebalance_to(conn, run_id, account_id, target, today)
        engine.mark(conn, run_id, account_id, today)

    _print_books(conn, run_id, accounts, today)

    last, standings = final_standings(conn, run_id)
    print(f"\nAll books open at ${standings[0]['equity']:,.0f} today -- re-run on later "
          f"days to roll forward and measure P&L.")
    counts = conn.execute(
        "SELECT (SELECT COUNT(*) FROM reports WHERE run_id=?) reports, "
        "(SELECT COUNT(*) FROM fills f JOIN accounts a ON a.id=f.account_id "
        " WHERE a.run_id=?) fills", (run_id, run_id)).fetchone()
    print(f"persisted run {run_id}: {counts['reports']} reports, {counts['fills']} fills.")
    print(f"view it: python -m trader_goblins.dashboard {db_path} {run_id}")
    conn.close()


if __name__ == "__main__":
    main()
