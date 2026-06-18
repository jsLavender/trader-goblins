"""Export DB data to JSON for the dashboard.

    python -m trader_goblins.viz_export [db_path] [run_id]   # -> reports/viz_data.json

export_run()  -> one run's accounts/curves/leaderboard/trust/reflections.
export_all()  -> every run (for the picker) + persona blurbs + the forward
                 predict/track record, all in one payload the dashboard embeds.
Equity curves are downsampled to ~weekly to keep the payload small.
"""
from __future__ import annotations

import json
import os
import sys
from datetime import datetime, timezone

from .db import store
from .db import learning, prices as price_store, tokens
from .sim.traders import default_roster

STAR = {"Grik", "Mossback", "Tally", "Snatch", "Hoarder"}


def export_run(conn, run_id: int) -> dict:
    """One run's full detail (the shape the old export() returned)."""
    dates_all = price_store.trading_dates(conn, run_id)
    sampled = dates_all[::5]
    if dates_all and sampled[-1] != dates_all[-1]:
        sampled.append(dates_all[-1])
    last = dates_all[-1] if dates_all else None

    trust_init = {g.name: g.persona.trust for g in default_roster()}

    spy_ret = None
    accts = conn.execute(
        "SELECT a.id, ag.name, ag.tier, a.starting_cash FROM accounts a "
        "JOIN agents ag ON ag.id = a.agent_id WHERE a.run_id = ? ORDER BY ag.tier, ag.name",
        (run_id,)).fetchall()

    accounts = []
    for a in accts:
        navs = {r["date"]: r["equity"] for r in conn.execute(
            "SELECT date, equity FROM nav_history WHERE account_id = ? ORDER BY date",
            (a["id"],))}
        curve = [round(navs[d], 2) for d in sampled if d in navs]
        equity = navs.get(last, a["starting_cash"])
        ret = equity / a["starting_cash"] - 1.0
        if a["name"] == "SPY-Holder":
            spy_ret = ret
        commission = conn.execute(
            "SELECT COALESCE(-SUM(delta),0) s FROM token_ledger "
            "WHERE account_id = ? AND reason LIKE 'commission:%'", (a["id"],)).fetchone()["s"]
        n_trades = conn.execute(
            "SELECT COUNT(*) n FROM fills WHERE account_id = ?", (a["id"],)).fetchone()["n"]
        refl = [r["note"] for r in conn.execute(
            "SELECT note FROM reflections WHERE account_id = ? ORDER BY as_of_date DESC LIMIT 2",
            (a["id"],))]
        accounts.append({
            "name": a["name"], "tier": a["tier"], "equity": round(equity, 2),
            "return": round(ret, 4), "curve": curve, "n_trades": n_trades,
            "tokens": round(tokens.balance(conn, a["id"]), 1),
            "commission": round(commission, 1),
            "trust": {k: round(v, 2) for k, v in learning.get_trust(conn, a["id"]).items()},
            "trust_init": trust_init.get(a["name"], {}),
            "reflections": refl,
        })

    for acc in accounts:
        acc["vs_spy"] = round(acc["return"] - spy_ret, 4) if spy_ret is not None else None

    counts = conn.execute(
        "SELECT (SELECT COUNT(*) FROM reports WHERE run_id=?) reports,"
        "(SELECT COUNT(*) FROM fills f JOIN accounts a ON a.id=f.account_id WHERE a.run_id=?) fills,"
        "(SELECT COUNT(*) FROM reflections rf JOIN accounts a ON a.id=rf.account_id WHERE a.run_id=?) refl",
        (run_id, run_id, run_id)).fetchone()
    return {
        "run_id": run_id, "start_cash": accts[0]["starting_cash"] if accts else 100000,
        "first": dates_all[0] if dates_all else None, "last": last,
        "labels": sampled, "accounts": accounts,
        "n_reports": counts["reports"], "n_fills": counts["fills"], "n_refl": counts["refl"],
    }


# Back-compat: the old single-run entry point.
def export(db_path: str = "trader_goblins.db", run_id: int = None) -> dict:
    conn = store.connect(db_path)
    if run_id is None:
        run_id = conn.execute("SELECT MAX(id) m FROM runs").fetchone()["m"]
    out = export_run(conn, run_id)
    conn.close()
    return out


def _persona_blurbs() -> dict:
    """One-line character + style per goblin, for the cards."""
    out = {}
    for g in default_roster():
        p = g.persona
        out[p.name] = {
            "style": "long / short" if p.long_short else "long-only",
            "contrarian": p.contrarian,
            "character": p.character,
        }
    return out


def export_all(db_path: str = "trader_goblins.db") -> dict:
    """Everything the dashboard needs in one payload: all runs (newest first),
    each run's detail, persona blurbs, and the forward predict/track record."""
    conn = store.connect(db_path)
    run_rows = conn.execute(
        "SELECT id, mode, note, settings_json, started_at FROM runs ORDER BY id DESC").fetchall()

    runs, data = [], {}
    for r in run_rows:
        detail = export_run(conn, r["id"])
        if not detail["accounts"]:
            continue
        data[str(r["id"])] = detail
        top = max(detail["accounts"], key=lambda a: a["return"])
        try:
            kind = (json.loads(r["settings_json"] or "{}") or {}).get("kind", "")
        except Exception:
            kind = ""
        runs.append({
            "id": r["id"], "mode": r["mode"], "kind": kind, "note": r["note"],
            "first": detail["first"], "last": detail["last"],
            "n_accounts": len(detail["accounts"]),
            "top_name": top["name"], "top_return": top["return"],
        })

    # forward record is global (not per run); network best-effort.
    try:
        from .track import score_open_predictions
        forward = score_open_predictions(conn, dedupe_first=True)
    except Exception as e:
        forward = {"priced": False, "n": 0, "calls": [], "error": str(e)}

    # hall of champions (evolved genomes) for the lineage view
    champions = []
    try:
        from .db import genomes as genome_store
        for c in genome_store.list_champions(conn):
            g = c["genome"]
            top = sorted(g.get("trust", {}).items(), key=lambda kv: -kv[1])[:2]
            champions.append({
                "generation": c["generation"], "name": c["name"],
                "fitness": round(c["fitness"], 2) if c["fitness"] is not None else None,
                "parents": c["parents"], "temperament": g.get("temperament"),
                "style": ("L/S" if g.get("long_short") else "long-only")
                         + ("/contra" if g.get("contrarian") else ""),
                "trusts": ", ".join(f"{k} {v:.1f}" for k, v in top),
            })
    except Exception:
        champions = []

    # which goblin is the live flagship (from the latest live_paper run's settings)
    flagship = None
    for r in run_rows:
        try:
            s = json.loads(r["settings_json"] or "{}") or {}
            if s.get("kind") == "live_paper" and s.get("goblin"):
                flagship = s["goblin"]
                break
        except Exception:
            pass
    conn.close()

    # Both paper accounts: the serious flagship and the degen casino.
    live_accounts = [
        _live_paper("ALPACA", "Serious", flagship=flagship),
        _live_paper("ALPACA_DEGEN", "Casino"),
    ]

    return {
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
        "runs": runs, "data": data, "personas": _persona_blurbs(),
        "forward": forward, "live_accounts": live_accounts, "champions": champions,
    }


def _live_paper(env_prefix: str = "ALPACA", label: str = "Live",
                flagship: str = None) -> dict:
    """Pull one live Alpaca paper account (equity curve + positions). env_prefix
    selects which account (ALPACA = serious, ALPACA_DEGEN = casino). Best-effort:
    returns {connected: False} when there are no keys or the call fails."""
    try:
        from .broker import AlpacaPaper
        cl = AlpacaPaper(env_prefix=env_prefix)
        acct = cl.account()
        ph = cl.portfolio_history(period="3M", timeframe="1D")
        pos = cl.positions()
        ts = ph.get("timestamp") or []
        eq = ph.get("equity") or []
        from datetime import datetime as _dt, timezone as _tz
        labels = [_dt.fromtimestamp(t, _tz.utc).strftime("%Y-%m-%d") for t in ts]
        curve = [round(float(e), 2) for e in eq]
        equity, last = float(acct["equity"]), float(acct.get("last_equity") or 0)
        return {
            "connected": True, "label": label, "flagship": flagship,
            "equity": round(equity, 2), "cash": round(float(acct["cash"]), 2),
            "last_equity": round(last, 2),
            "day_pl": round(equity - last, 2),
            "day_pl_pct": round((equity / last - 1.0) if last else 0.0, 4),
            "start": curve[0] if curve else equity,
            "total_pl_pct": round((equity / curve[0] - 1.0) if curve and curve[0] else 0.0, 4),
            "labels": labels, "curve": curve,
            "positions": sorted(
                [{"symbol": p["symbol"], "qty": round(float(p["qty"]), 3),
                  "market_value": round(float(p["market_value"]), 2),
                  "unrealized_pl": round(float(p["unrealized_pl"]), 2),
                  "unrealized_plpc": round(float(p["unrealized_plpc"]), 4)}
                 for p in pos], key=lambda x: -x["market_value"]),
        }
    except Exception as e:
        return {"connected": False, "label": label, "error": str(e)}


def main() -> None:
    db_path = sys.argv[1] if len(sys.argv) > 1 else "trader_goblins.db"
    run_id = int(sys.argv[2]) if len(sys.argv) > 2 else None
    data = export(db_path, run_id)
    os.makedirs("reports", exist_ok=True)
    out = os.path.join("reports", "viz_data.json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump(data, f)
    print(f"run {data['run_id']}: {len(data['accounts'])} accounts, "
          f"{len(data['labels'])} curve points -> {out}")


if __name__ == "__main__":
    main()
