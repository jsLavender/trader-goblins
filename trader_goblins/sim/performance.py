"""Risk-adjusted performance metrics:  python -m trader_goblins.sim.performance [run_id] [db]

Total return flatters leverage and luck. What decides whether a strategy survives
real money is risk-adjusted return (Sharpe) and the worst peak-to-trough loss you
had to stomach (max drawdown). This reports both, per account, from nav_history.
"""
from __future__ import annotations

import statistics
import sys
from typing import Dict, List

from ..db import store

RISK_FREE = 0.04          # annual; a no-risk T-bill alternative to beat
TRADING_DAYS = 252


def metrics(equities: List[float]) -> Dict[str, float]:
    if len(equities) < 3 or equities[0] <= 0:
        return {"total": 0.0, "cagr": 0.0, "vol": 0.0, "sharpe": 0.0, "mdd": 0.0}
    rets = [equities[i] / equities[i - 1] - 1.0 for i in range(1, len(equities))]
    n = len(equities) - 1
    total = equities[-1] / equities[0] - 1.0
    cagr = (equities[-1] / equities[0]) ** (TRADING_DAYS / n) - 1.0
    vol = statistics.pstdev(rets) * (TRADING_DAYS ** 0.5) if len(rets) > 1 else 0.0
    ann_ret = statistics.mean(rets) * TRADING_DAYS
    sharpe = (ann_ret - RISK_FREE) / vol if vol > 1e-9 else 0.0
    # Sortino: only downside wobble counts. Calmar: return per worst drawdown.
    downside = (statistics.mean([min(r, 0.0) ** 2 for r in rets]) ** 0.5) * (TRADING_DAYS ** 0.5)
    sortino = (ann_ret - RISK_FREE) / downside if downside > 1e-9 else 0.0
    peak, mdd = equities[0], 0.0
    for e in equities:
        peak = max(peak, e)
        mdd = min(mdd, e / peak - 1.0)
    calmar = cagr / abs(mdd) if mdd < 0 else 0.0
    return {"total": total, "cagr": cagr, "vol": vol, "sharpe": sharpe,
            "sortino": sortino, "calmar": calmar, "mdd": mdd}


def performance_report(conn, run_id: int) -> None:
    rows = conn.execute(
        "SELECT a.id, ag.name, ag.tier FROM accounts a JOIN agents ag ON ag.id=a.agent_id "
        "WHERE a.run_id=? ORDER BY ag.tier, ag.name", (run_id,)).fetchall()
    scored = []
    for r in rows:
        eq = [x["equity"] for x in conn.execute(
            "SELECT equity FROM nav_history WHERE account_id=? ORDER BY date", (r["id"],))]
        scored.append((r["name"], r["tier"], metrics(eq)))
    scored.sort(key=lambda s: -s[2]["sharpe"])

    print(f"RISK-ADJUSTED PERFORMANCE  (run {run_id}, rf {RISK_FREE:.0%})")
    print(f"  {'account':<13}{'tier':<10}{'CAGR':>8}{'Sharpe':>8}{'Sortino':>9}"
          f"{'Calmar':>8}{'max DD':>9}")
    print("  " + "-" * 62)
    for name, tier, m in scored:
        print(f"  {name:<13}{tier:<10}{m['cagr']:>+8.1%}{m['sharpe']:>8.2f}"
              f"{m['sortino']:>9.2f}{m['calmar']:>8.2f}{m['mdd']:>9.1%}")
    print("  (Sharpe/Sortino > 1 good, > 2 excellent. Calmar = return per worst drop. "
          "Sort key = Sharpe.)")


def main() -> None:
    run_id = int(sys.argv[1]) if len(sys.argv) > 1 else None
    db_path = sys.argv[2] if len(sys.argv) > 2 else "trader_goblins.db"
    conn = store.connect(db_path)
    if run_id is None:
        run_id = conn.execute("SELECT MAX(id) m FROM runs").fetchone()["m"]
    performance_report(conn, run_id)
    conn.close()


if __name__ == "__main__":
    main()
