"""Multi-regime evaluation harness:  python -m trader_goblins.sim.evaluate [seeds]

Runs the full firm across bull / bear / choppy regimes x many seeds x {spine on,
spine off}, in throwaway in-memory DBs, and aggregates: do the traders beat SPY,
and does the improvement spine help? Writes per-run rows to reports/eval_*.csv.

This is how we tell skill/behavior from luck -- a single seed (like the persisted
run) only ever shows one market. CAVEAT: synthetic data is ~random-walk, so
absolute 'beat SPY' mostly reflects regime/defensiveness; the ABLATION (spine on
vs off) and cross-regime consistency are the trustworthy signals here.
"""
from __future__ import annotations

import csv
import os
import sys
from collections import defaultdict
from datetime import datetime
from statistics import mean

from ..data import build_run_prices
from ..data.market_data import SyntheticProvider
from ..db import store
from . import firm
from .replay import final_standings

REGIMES = {
    "bull":   dict(drift_bias=0.0012,  jump_rate=0.020, jump_mean=-0.020, vol_scale=1.0),
    "bear":   dict(drift_bias=-0.0008, jump_rate=0.045, jump_mean=-0.035, vol_scale=1.0),
    "choppy": dict(drift_bias=0.0003,  jump_rate=0.030, jump_mean=-0.030, vol_scale=1.5),
}
UNIVERSE = ["AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "KO", "XOM"]
LOOKBACK = 180


def _run_arm(seed: int, regime_params: dict, spine: bool):
    conn = store.init_db(":memory:")
    run_id = store.create_run(conn, mode="synthetic", seed=seed)
    provider = SyntheticProvider(base_seed=seed, **regime_params)
    build_run_prices(conn, run_id, provider, UNIVERSE, lookback_days=LOOKBACK)
    accounts = firm._make_accounts(conn, run_id, spine=spine, announce=False)
    firm.run_firm(conn, run_id, accounts, UNIVERSE, verbose=False)
    _, standings = final_standings(conn, run_id)
    conn.close()
    return standings


def _pct(x: float) -> str:
    return f"{x:+.1%}"


def main() -> None:
    seeds = int(sys.argv[1]) if len(sys.argv) > 1 else 3
    rows = []
    total = len(REGIMES) * seeds * 2
    done = 0
    for regime, params in REGIMES.items():
        for seed in range(seeds):
            for spine in (True, False):
                for s in _run_arm(seed, params, spine):
                    rows.append({"regime": regime, "seed": seed, "spine": spine,
                                 "name": s["name"], "tier": s["tier"],
                                 "return": s["return"],
                                 "vs_spy": s["vs_spy"] if s["vs_spy"] is not None else 0.0})
                done += 1
                print(f"  [{done}/{total}] {regime} seed={seed} spine={'on' if spine else 'off'}")

    trader_rows = [r for r in rows if r["tier"] == "trader"]

    print(f"\n=== AGGREGATE  ({seeds} seeds/regime) ===")
    print(f"{'regime':<8}{'arm':<11}{'trader ret':>12}{'vs SPY':>10}{'win% vs SPY':>13}")
    for regime in REGIMES:
        for spine in (True, False):
            sub = [r for r in trader_rows if r["regime"] == regime and r["spine"] == spine]
            ret = mean(r["return"] for r in sub)
            vs = mean(r["vs_spy"] for r in sub)
            win = mean(1.0 if r["vs_spy"] > 0 else 0.0 for r in sub)
            print(f"{regime:<8}{'spine-on' if spine else 'spine-off':<11}"
                  f"{_pct(ret):>12}{_pct(vs):>10}{win:>12.0%}")

    print("\n=== SPINE EFFECT (mean trader return, on - off) ===")
    for regime in REGIMES:
        on = mean(r["return"] for r in trader_rows if r["regime"] == regime and r["spine"])
        off = mean(r["return"] for r in trader_rows if r["regime"] == regime and not r["spine"])
        verdict = "helps" if on > off else "hurts" if on < off else "neutral"
        print(f"  {regime:<8} {_pct(on - off)}  ({verdict})")

    print("\n=== PER-PERSONA  (spine-on: mean return / win% vs SPY) ===")
    names = sorted({r["name"] for r in trader_rows})
    print(f"{'goblin':<10}" + "".join(f"{rg:>16}" for rg in REGIMES))
    for nm in names:
        cells = []
        for regime in REGIMES:
            sub = [r for r in trader_rows if r["name"] == nm and r["regime"] == regime and r["spine"]]
            ret = mean(r["return"] for r in sub)
            win = mean(1.0 if r["vs_spy"] > 0 else 0.0 for r in sub)
            cells.append(f"{_pct(ret)}/{win:.0%}")
        print(f"{nm:<10}" + "".join(f"{c:>16}" for c in cells))

    os.makedirs("reports", exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    path = os.path.join("reports", f"eval_{stamp}.csv")
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=["regime", "seed", "spine", "name", "tier",
                                          "return", "vs_spy"])
        w.writeheader()
        w.writerows(rows)
    print(f"\n{len(rows)} rows -> {path}")


if __name__ == "__main__":
    main()
