"""One-time repair for live runs whose "SPY" benchmark was synthesized.

Before 2026-08-01, `build_run_prices` synthesized the benchmark (equal-weight
index of the universe, rebased to 100 at the start of the fetched window) even
for live runs. That series isn't SPY, and on a rolling run the rebase anchor
moved every ingest night, so the same date got different values on different
days. This tool replaces the fake series with real SPY and mechanically
rebuilds the SPY-Holder baseline account from it. SPY-Holder is pure
buy-day-one-and-hold, so the rebuild is exact -- one fill plus the nav marks,
all derivable from the price series; nothing else in the run ever touches SPY
(verified before writing).

Idempotent: safe to re-run, including after an old-code nightly roll clobbers
the repaired rows with a fresh synthetic series.

    python -m trader_goblins.repair_benchmark [db] [run_id]        # dry run
    python -m trader_goblins.repair_benchmark [db] [run_id] apply  # backup + fix
"""
from __future__ import annotations

import os
import sys
from datetime import datetime

from .data.market_data import YFinanceProvider
from .db import prices as price_store
from .db import store
from .sim import engine
from .sim.replay import final_standings
from .sim.strategies import BuyAndHoldSPY

BENCH = "SPY"


def _spy_holder_account(conn, run_id: int):
    return conn.execute(
        "SELECT a.id, a.starting_cash FROM accounts a "
        "JOIN agents ag ON ag.id = a.agent_id "
        "WHERE a.run_id = ? AND ag.name = 'SPY-Holder'", (run_id,)).fetchone()


def repair(db_path: str, run_id: int, apply: bool) -> None:
    conn = store.init_db(db_path)
    run = conn.execute("SELECT mode, note FROM runs WHERE id = ?", (run_id,)).fetchone()
    if run is None:
        sys.exit(f"run {run_id} not found in {db_path}")
    if run["mode"] != "live":
        sys.exit(f"run {run_id} is mode={run['mode']!r}; this repair is for live runs only")

    old = conn.execute(
        "SELECT COUNT(*) n, MIN(date) lo, MAX(date) hi FROM prices "
        "WHERE run_id = ? AND ticker = ?", (run_id, BENCH)).fetchone()
    fake_rows = conn.execute(
        "SELECT COUNT(*) n FROM prices WHERE run_id = ? AND ticker = ? "
        "AND source LIKE '%/benchmark'", (run_id, BENCH)).fetchone()["n"]
    print(f"run {run_id} ({run['note']}): {old['n']} {BENCH} rows "
          f"{old['lo']} -> {old['hi']}, {fake_rows} synthesized")

    # The benchmark must belong to SPY-Holder alone -- stock strategies exclude
    # it via tradable(), but verify before rewriting anything.
    acct = _spy_holder_account(conn, run_id)
    if acct is None:
        sys.exit("no SPY-Holder account in this run; nothing to rebuild")
    others = conn.execute(
        "SELECT COUNT(*) n FROM ("
        "  SELECT account_id FROM fills WHERE ticker = ? UNION "
        "  SELECT account_id FROM positions WHERE ticker = ?) x "
        "JOIN accounts a ON a.id = x.account_id "
        "WHERE a.run_id = ? AND a.id != ?", (BENCH, BENCH, run_id, acct["id"])).fetchone()["n"]
    if others:
        sys.exit(f"{others} other account(s) in run {run_id} traded {BENCH}; "
                 "refusing to repair automatically")

    nav_dates = [r["date"] for r in conn.execute(
        "SELECT date FROM nav_history WHERE account_id = ? ORDER BY date", (acct["id"],))]
    if not nav_dates:
        sys.exit("SPY-Holder has no nav history; nothing to rebuild")

    # Fetch real SPY covering the run's whole ingested window.
    n_days = len(price_store.trading_dates(conn, run_id))
    real = YFinanceProvider().history(BENCH, n_days + 10)
    real_lo = real.index[0].strftime("%Y-%m-%d")
    if real_lo > nav_dates[0]:
        sys.exit(f"real {BENCH} series starts {real_lo}, after the account's "
                 f"first mark {nav_dates[0]}; widen the fetch")

    def px(date):        # latest real close on or before `date`
        return float(real.loc[:date, "close"].iloc[-1])

    old_nav = conn.execute(
        "SELECT equity FROM nav_history WHERE account_id = ? AND date = ?",
        (acct["id"], nav_dates[-1])).fetchone()["equity"]
    spy_ret = px(nav_dates[-1]) / px(nav_dates[0]) - 1.0
    print(f"SPY-Holder (acct {acct['id']}): marked {len(nav_dates)} days "
          f"{nav_dates[0]} -> {nav_dates[-1]}")
    label = "fake index" if fake_rows else "already real"
    print(f"  stored return  {old_nav / acct['starting_cash'] - 1.0:+.2%}  ({label})")
    print(f"  real SPY move  {spy_ret:+.2%}  over the same window")

    if not apply:
        print("\ndry run -- pass 'apply' to back up the db and repair.")
        conn.close()
        return

    # Consistent point-in-time backup (works even mid-WAL), kept next to the db.
    bdir = os.path.join(os.path.dirname(os.path.abspath(db_path)), "backups")
    os.makedirs(bdir, exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup = os.path.join(bdir, f"pre_benchmark_repair_{stamp}.db")
    conn.execute("VACUUM INTO ?", (backup,))
    print(f"\nbacked up {db_path} -> {backup}")

    # 1) Replace the benchmark series wholesale.
    conn.execute("DELETE FROM prices WHERE run_id = ? AND ticker = ?", (run_id, BENCH))
    n = price_store.insert_prices(conn, run_id, BENCH, real, "yfinance")
    print(f"ingested {n} real {BENCH} rows")

    # 2) Rebuild the account: reset, then replay buy-and-hold over the original
    #    mark dates through the ordinary engine (same fills/costs as live).
    conn.execute("UPDATE accounts SET cash = starting_cash WHERE id = ?", (acct["id"],))
    for table in ("fills", "positions", "nav_history"):
        conn.execute(f"DELETE FROM {table} WHERE account_id = ?", (acct["id"],))
    conn.commit()
    strat = BuyAndHoldSPY()
    for step, date in enumerate(nav_dates):
        target = strat.decide(conn, run_id, acct["id"], date, step)
        if target is not None:
            engine.rebalance_to(conn, run_id, acct["id"], target, date)
        engine.mark(conn, run_id, acct["id"], date)

    last, standings = final_standings(conn, run_id)
    row = next(s for s in standings if s["name"] == "SPY-Holder")
    print(f"rebuilt SPY-Holder: equity ${row['equity']:,.0f} "
          f"({row['return']:+.2%}) as of {last}")
    conn.close()
    print("done.")


def main() -> None:
    argv = list(sys.argv[1:])
    apply = "apply" in argv
    argv = [a for a in argv if a != "apply"]
    db_path = argv[0] if argv else "trader_goblins.db"
    run_id = int(argv[1]) if len(argv) > 1 else None
    if run_id is None:
        conn = store.connect(db_path)
        run_id = conn.execute("SELECT MAX(id) m FROM runs WHERE mode='live'").fetchone()["m"]
        conn.close()
    repair(db_path, run_id, apply)


if __name__ == "__main__":
    main()
