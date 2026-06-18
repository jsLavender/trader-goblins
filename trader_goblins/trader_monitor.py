"""Export active-trader monitor data: each goblin's TRACK RECORD (from a backtest
run) + its UPCOMING PLAN (forward, today).  -> reports/monitor_data.json

    python -m trader_goblins.trader_monitor [run_id]

Track record comes from a stored backtest run (default: latest live run). The
upcoming plan fetches today's data and runs each goblin's decide() forward. No
LLM (free).
"""
from __future__ import annotations

import json
import os
import sys

from .curators.lenses import MARKET_TICKER
from .curators.pipeline import run_curators_for_date
from .data import build_run_prices
from .data.market_data import YFinanceProvider
from .db import learning, store
from .db import prices as price_store
from .db import reports as report_store
from .sim.performance import metrics
from .sim.traders import default_roster

WATCH = ["AAPL", "MSFT", "NVDA", "GOOGL", "META", "AMZN", "TSLA", "JPM", "XOM",
         "KO", "WMT", "JNJ"]
ORDER = ["Grik", "Mossback", "Tally", "Snatch", "Hoarder"]


def _style(p) -> str:
    return (("long/short" if p.long_short else "long-only")
            + (" · contrarian" if p.contrarian else ""))


def track_records(conn, run_id) -> dict:
    out = {}
    for r in conn.execute(
            "SELECT a.id, ag.name FROM accounts a JOIN agents ag ON ag.id=a.agent_id "
            "WHERE a.run_id=? AND ag.tier='trader'", (run_id,)):
        eq = [x["equity"] for x in conn.execute(
            "SELECT equity FROM nav_history WHERE account_id=? ORDER BY date", (r["id"],))]
        if not eq:
            continue
        m = metrics(eq)
        step = max(1, len(eq) // 40)
        out[r["name"]] = {
            "return": round(eq[-1] / eq[0] - 1, 4),
            "sharpe": round(m["sharpe"], 2), "sortino": round(m["sortino"], 2),
            "calmar": round(m["calmar"], 2), "mdd": round(m["mdd"], 4),
            "curve": [round(x) for x in eq[::step]],
            "trust": {k: round(v, 2) for k, v in learning.get_trust(conn, r["id"]).items()},
        }
    return out


def upcoming_plan() -> dict:
    conn = store.init_db(":memory:")
    run_id = store.create_run(conn, mode="live", note="monitor plan")
    build_run_prices(conn, run_id, YFinanceProvider(), WATCH, lookback_days=252)
    dates = price_store.trading_dates(conn, run_id)
    today = dates[-1]
    run_curators_for_date(conn, run_id, today, WATCH, prefer_real_llm=False)
    macro = report_store.reports_asof(conn, run_id, MARKET_TICKER, today)
    plans = {}
    for g in default_roster():
        aid = store.get_or_create_agent(conn, g.name, "trader")
        acct = store.create_account(conn, run_id, aid, 100_000.0)
        tgt = g.decide(conn, run_id, acct, today, step=0) or {}
        plans[g.name] = [{"ticker": t, "weight": round(w, 3)}
                         for t, w in sorted(tgt.items(), key=lambda kv: -abs(kv[1]))]
    conn.close()
    return {"date": today, "macro": macro[0]["narrative"] if macro else "", "plans": plans}


def main() -> None:
    conn = store.connect("trader_goblins.db")
    run_id = int(sys.argv[1]) if len(sys.argv) > 1 else None
    if run_id is None:
        row = conn.execute("SELECT MAX(id) m FROM runs WHERE mode='live'").fetchone()
        run_id = row["m"] or conn.execute("SELECT MAX(id) m FROM runs").fetchone()["m"]
    tr = track_records(conn, run_id)
    conn.close()

    print("fetching today's data for the upcoming plan...")
    up = upcoming_plan()

    roster = {g.name: g for g in default_roster()}
    goblins = []
    for name in ORDER:
        g = roster[name]
        goblins.append({
            "name": name, "style": _style(g.persona), "temperament": g.persona.temperament,
            "track": tr.get(name), "plan": up["plans"].get(name, [])})

    data = {"track_run": run_id, "asof": up["date"], "macro": up["macro"], "goblins": goblins}
    os.makedirs("reports", exist_ok=True)
    out = os.path.join("reports", "monitor_data.json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump(data, f)
    print(f"track record from run {run_id}; plan as of {up['date']} -> {out}")


if __name__ == "__main__":
    main()
