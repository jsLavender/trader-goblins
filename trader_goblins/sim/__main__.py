"""Skeleton smoke test:  python -m trader_goblins.sim

Stands up a synthetic run, three reference accounts (SPY holder, equal-weight,
random), replays the full calendar, and prints the leaderboard. The whole
end-to-end loop -- data -> strategy -> fills -> NAV -> ranking -- with no LLM.
"""
from __future__ import annotations

import os
import tempfile

from ..data import build_run_prices
from ..data.market_data import SyntheticProvider
from ..db import store
from .replay import final_standings, run_replay
from .strategies import BuyAndHoldSPY, EqualWeightHold, RandomTrader

START_CASH = 100_000.0
UNIVERSE = ["AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "KO", "XOM"]


def main() -> None:
    path = os.path.join(tempfile.gettempdir(), "tg_sim_smoke.sqlite")
    for leftover in (path, path + "-wal", path + "-shm"):
        if os.path.exists(leftover):
            os.remove(leftover)

    conn = store.init_db(path)
    run_id = store.create_run(conn, mode="synthetic", seed=7, note="sim skeleton smoke")

    provider = SyntheticProvider(base_seed=7)
    written = build_run_prices(conn, run_id, provider, UNIVERSE, lookback_days=252)
    print(f"ingested {sum(written.values())} rows across {len(written)} series "
          f"({len(UNIVERSE)} stocks + SPY)")

    strategies = [BuyAndHoldSPY(), EqualWeightHold(), RandomTrader(seed=7)]
    accounts = []
    for strat in strategies:
        agent_id = store.create_agent(conn, strat.name, "baseline", {"strategy": strat.name})
        acct_id = store.create_account(conn, run_id, agent_id, START_CASH)
        accounts.append((acct_id, strat))

    dates = run_replay(conn, run_id, accounts, verbose=True)
    print(f"replayed {len(dates)} trading days\n")

    last, standings = final_standings(conn, run_id)
    print(f"LEADERBOARD  (as of {last}, start ${START_CASH:,.0f})")
    print(f"  {'rank':<5}{'account':<14}{'equity':>14}{'return':>10}{'vs SPY':>10}")
    for i, s in enumerate(standings, 1):
        vs = f"{s['vs_spy']:+.1%}" if s["vs_spy"] is not None else "   --"
        print(f"  {i:<5}{s['name']:<14}${s['equity']:>12,.0f}"
              f"{s['return']:>+10.1%}{vs:>10}")

    conn.close()
    print(f"\nsmoke db at {path}")


if __name__ == "__main__":
    main()
