"""Full-firm replay: curators + trader peers + reference baselines, persisted.

On each rebalance day the curators publish reports for the date, every account
decides (peers read the fresh report bundles; baselines follow their rule), the
engine executes, and all accounts are marked daily. Writes to a real on-disk DB
so the paper trades persist.

    python -m trader_goblins.sim.firm                 # fresh run into trader_goblins.db
    python -m trader_goblins.sim.firm my_run.db 42    # custom path + seed
"""
from __future__ import annotations

import os
import sqlite3
import sys
from typing import List, Tuple

from ..curators.pipeline import run_curators_for_date
from ..data import build_run_prices
from ..data.market_data import SyntheticProvider, YFinanceProvider
from ..db import learning, store, tokens
from ..db import prices as price_store
from ..llm import get_llm
from . import engine
from .engine import CostModel
from .performance import performance_report
from .replay import final_standings
from .strategies import BuyAndHoldSPY, EqualWeightHold, RandomTrader, Strategy
from .traders import TraderGoblin, default_roster

UNIVERSE = [
    # tech / comm (~30)
    "AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "TSLA", "AMD", "AVGO", "ORCL",
    "CRM", "ADBE", "CSCO", "INTC", "QCOM", "TXN", "NFLX", "AMAT", "MU", "INTU",
    "NOW", "PANW", "PLTR", "UBER", "ABNB", "SHOP", "T", "VZ", "TMUS", "CMCSA",
    # finance (~13)
    "JPM", "BAC", "WFC", "GS", "MS", "C", "V", "MA", "AXP", "BLK", "SCHW", "SPGI", "PYPL",
    # healthcare (~13)
    "UNH", "JNJ", "LLY", "ABBV", "MRK", "PFE", "TMO", "ABT", "DHR", "BMY", "AMGN", "GILD", "ISRG",
    # consumer (~14)
    "WMT", "COST", "PG", "KO", "PEP", "MCD", "NKE", "SBUX", "HD", "LOW", "TGT", "DIS", "BKNG", "CVS",
    # industrials / energy / materials / utilities (~20)
    "XOM", "CVX", "COP", "SLB", "BA", "CAT", "GE", "HON", "UPS", "RTX",
    "LMT", "DE", "LIN", "FCX", "NEE", "DUK", "SO", "PLD", "AMT", "MMM",
]  # ~90 liquid names, sector-balanced, neutral (not screened on past performance)
START_CASH = 100_000.0
INITIAL_TOKENS = 100.0
WEEKLY_STIPEND = 20.0          # research budget; deep-dives cost ~10-15 each (scarce)
# Best model available on this account (Fable 5 / Opus 4.8 are gated). Override
# via env -- e.g. TG_TRADER_MODEL=claude-haiku-4-5-20251001 for cheap high-volume runs.
TRADER_MODEL = os.environ.get("TG_TRADER_MODEL", "claude-sonnet-4-6")


def run_firm(conn: sqlite3.Connection, run_id: int,
             accounts: List[Tuple[int, Strategy]], stock_tickers: List[str],
             rebalance_every: int = 5, prefer_real_llm: bool = False,
             costs: CostModel = None, verbose: bool = True) -> List[str]:
    dates = price_store.trading_dates(conn, run_id)
    prev_rebalance: str = None
    for step, date in enumerate(dates):
        rebalancing = (step % rebalance_every == 0)
        if rebalancing:
            run_curators_for_date(conn, run_id, date, stock_tickers,
                                  prefer_real_llm=prefer_real_llm)
            for account_id, strat in accounts:        # earn, then learn, then decide
                if isinstance(strat, TraderGoblin):
                    tokens.grant(conn, account_id, date, WEEKLY_STIPEND, "weekly stipend")
                    strat.learn(conn, run_id, account_id, date, prev_rebalance, step)
        for account_id, strat in accounts:
            if rebalancing:
                target = strat.decide(conn, run_id, account_id, date, step)
                if target is not None:
                    engine.rebalance_to(conn, run_id, account_id, target, date, costs=costs)
            engine.mark(conn, run_id, account_id, date, costs=costs)
        if rebalancing:
            prev_rebalance = date
        if verbose and step % 42 == 0:
            print(f"  [firm] {date}  (day {step + 1}/{len(dates)})")
    return dates


def _make_accounts(conn, run_id, spine: bool = True, announce: bool = True,
                   nolev: bool = False, use_llm: bool = True) -> List[Tuple[int, Strategy]]:
    accounts: List[Tuple[int, Strategy]] = []
    for strat in (BuyAndHoldSPY(), EqualWeightHold(), RandomTrader(seed=7)):
        agent_id = store.get_or_create_agent(conn, strat.name, "baseline",
                                             {"strategy": strat.name})
        accounts.append((store.create_account(conn, run_id, agent_id, START_CASH), strat))
    trader_llm, trader_real = get_llm(TRADER_MODEL, prefer_real=use_llm)
    roster = default_roster(spine=spine)
    if nolev:                                    # cash account: long-only, gross <= 100%
        for g in roster:
            g.persona.long_short = False
            g.persona.base_gross = min(g.persona.base_gross, 1.0)
    for goblin in roster:
        goblin.attach_llm(trader_llm, trader_real, TRADER_MODEL)
        agent_id = store.get_or_create_agent(conn, goblin.name, "trader",
                                             {"trust": goblin.persona.trust})
        acct_id = store.create_account(conn, run_id, agent_id, START_CASH)
        tokens.grant(conn, acct_id, "init", INITIAL_TOKENS, "initial grant")
        accounts.append((acct_id, goblin))
    if announce:
        live = trader_real and use_llm
        print(f"trader brain: {TRADER_MODEL if live else 'heuristic'} "
              f"({'LIVE — costs money' if live else 'free'})")
    return accounts


def main() -> None:
    argv = [a for a in sys.argv[1:]]
    real = "real" in argv
    nolev = "nolev" in argv
    nollm = "nollm" in argv                       # force free heuristic even with a key
    argv = [a for a in argv if a not in ("real", "nolev", "nollm")]
    db_path = argv[0] if argv else "trader_goblins.db"
    seed = int(argv[1]) if len(argv) > 1 else 7

    mode = "live" if real else "synthetic"
    provider = YFinanceProvider() if real else SyntheticProvider(base_seed=seed)

    conn = store.init_db(db_path)
    run_id = store.create_run(conn, mode=mode, seed=seed,
                              settings={"universe": UNIVERSE, "start_cash": START_CASH,
                                        "nolev": nolev},
                              note=f"{mode} firm run{' (no leverage)' if nolev else ''}")
    print(f"DB {db_path}  |  run_id {run_id}  |  {mode} ({provider.name})"
          + ("  |  NO LEVERAGE (long-only)" if nolev else "")
          + ("" if real else f"  |  seed {seed}"))

    build_run_prices(conn, run_id, provider, UNIVERSE, lookback_days=252)
    accounts = _make_accounts(conn, run_id, nolev=nolev, use_llm=not nollm)
    print(f"{len(accounts)} accounts ({len(default_roster())} goblins + 3 baselines), "
          f"{len(UNIVERSE)} stocks + SPY\n")

    dates = run_firm(conn, run_id, accounts, UNIVERSE, verbose=True)
    print(f"\nreplayed {len(dates)} trading days ({dates[0]} -> {dates[-1]})\n")

    last, standings = final_standings(conn, run_id)
    bal = {aid: tokens.balance(conn, aid) for aid, _ in accounts}
    name_to_acct = {s.name: aid for aid, s in accounts}
    print(f"LEADERBOARD  (run {run_id}, as of {last}, start ${START_CASH:,.0f})")
    print(f"  {'#':<3}{'account':<12}{'tier':<10}{'equity':>13}{'return':>9}"
          f"{'vs SPY':>9}{'tokens':>8}")
    for i, s in enumerate(standings, 1):
        vs = f"{s['vs_spy']:+.1%}" if s["vs_spy"] is not None else "  --"
        tok = bal.get(name_to_acct.get(s["name"]), 0.0)
        print(f"  {i:<3}{s['name']:<12}{s['tier']:<10}${s['equity']:>11,.0f}"
              f"{s['return']:>+9.1%}{vs:>9}{tok:>8.0f}")

    print("\nLEARNING -- final trust weights (initial in parens):")
    roster = {g.name: g for g in default_roster()}
    for aid, strat in accounts:
        if not isinstance(strat, TraderGoblin):
            continue
        learned = learning.get_trust(conn, aid)
        init = roster[strat.name].persona.trust
        cells = ", ".join(f"{k} {learned[k]:.2f}({init.get(k, 0):.2f})"
                          for k in sorted(learned))
        print(f"  {strat.name:<10} {cells}")

    print("\nCOMMISSIONING DESK (tokens spent on deep-dives; Tally abstains):")
    for aid, strat in accounts:
        if not isinstance(strat, TraderGoblin):
            continue
        row = conn.execute(
            "SELECT COALESCE(-SUM(delta),0) spent, COUNT(*) dives FROM token_ledger "
            "WHERE account_id=? AND reason LIKE 'commission:%'", (aid,)).fetchone()
        print(f"  {strat.name:<10} spent {row['spent']:>5.0f} on {row['dives']:>3} deep-dives, "
              f"balance {tokens.balance(conn, aid):>5.0f}")

    print()
    performance_report(conn, run_id)

    print("\nEXPOSURE at close (long / short positions, net %):")
    last = price_store.trading_dates(conn, run_id)[-1]
    for aid, strat in accounts:
        if not isinstance(strat, TraderGoblin):
            continue
        pos = conn.execute("SELECT ticker, qty FROM positions WHERE account_id=?",
                           (aid,)).fetchall()
        eq = engine.equity(conn, run_id, aid, last)
        px = price_store.prices_asof(conn, run_id, last, [p["ticker"] for p in pos]) if pos else {}
        longs = sum(1 for p in pos if p["qty"] > 0)
        shorts = sum(1 for p in pos if p["qty"] < 0)
        net = sum(p["qty"] * px[p["ticker"]] for p in pos if p["ticker"] in px) / eq if eq else 0
        ls = "L/S" if strat.persona.long_short else "long-only"
        print(f"  {strat.name:<10} {longs:>2} long / {shorts:>2} short   net {net:>+5.0%}  ({ls})")

    tc = conn.execute(
        "SELECT COALESCE(SUM(commission),0) c, COALESCE(SUM(slippage),0) s "
        "FROM fills f JOIN accounts a ON a.id=f.account_id WHERE a.run_id=?",
        (run_id,)).fetchone()
    print(f"\ntransaction costs paid (all accounts): "
          f"${tc['c']:,.0f} commission + ${tc['s']:,.0f} spread/impact "
          f"= ${tc['c'] + tc['s']:,.0f}")

    counts = conn.execute(
        "SELECT (SELECT COUNT(*) FROM reports WHERE run_id=?) reports, "
        "(SELECT COUNT(*) FROM fills f JOIN accounts a ON a.id=f.account_id "
        " WHERE a.run_id=?) fills, "
        "(SELECT COUNT(*) FROM nav_history n JOIN accounts a ON a.id=n.account_id "
        " WHERE a.run_id=?) navs, "
        "(SELECT COUNT(*) FROM reflections rf JOIN accounts a ON a.id=rf.account_id "
        " WHERE a.run_id=?) refl", (run_id, run_id, run_id, run_id)).fetchone()
    print(f"\npersisted: {counts['reports']} reports, {counts['fills']} fills, "
          f"{counts['navs']} nav marks, {counts['refl']} reflections")
    conn.close()
    print(f"saved to {db_path} (run_id {run_id})")


if __name__ == "__main__":
    main()
