"""Score saved forward predictions against current prices:  python -m trader_goblins.track

Marks every prediction in the DB to today's price: return since the call,
whether acting on it would have made money (long the BUYs, sidestep the AVOIDs),
and an aggregate hit-rate. Re-run any time -- it gets more meaningful as calendar
time passes. (Run `python -m trader_goblins.predict` first to create some.)
"""
from __future__ import annotations

import sys
from datetime import date, datetime, timezone

from .data.market_data import YFinanceProvider
from .db import predictions as pred_store
from .db import store

BULLISH = {"BUY", "ACCUMULATE"}
BEARISH = {"AVOID"}


def _direction(verdict: str) -> int:
    return 1 if verdict in BULLISH else -1 if verdict in BEARISH else 0


def _days(d1: str, d2: str) -> int:
    return (date.fromisoformat(d2) - date.fromisoformat(d1)).days


def _score(verdict: str, price_at_call: float, now: float):
    """Return (raw_return, signal_return, hit). signal_return = what acting on
    the call earned: +return if bullish, -return if AVOID, 0 if HOLD."""
    ret = now / price_at_call - 1.0
    d = _direction(verdict)
    sig = d * ret
    hit = None if d == 0 else sig > 0
    return ret, sig, hit


def _sanity_check() -> None:
    print("scoring sanity check (fabricated):")
    cases = [("BUY", 100, 110), ("AVOID", 100, 90), ("BUY", 100, 95), ("AVOID", 100, 108)]
    for v, p0, p1 in cases:
        ret, sig, hit = _score(v, p0, p1)
        print(f"  {v:<11} ${p0}->${p1}  ret {ret:+.0%}  acting {sig:+.0%}  hit={hit}")


def score_open_predictions(conn, dedupe_first: bool = False) -> dict:
    """Score every open prediction against the current price. Shared by the CLI
    and the dashboard so the two never disagree. Network best-effort: tickers
    that fail to price are dropped. dedupe_first keeps only the EARLIEST call per
    ticker -- 'performance since first flagged', the right track-record semantic:
    it ages properly and a daily re-call doesn't reset the clock. The CLI shows
    every call."""
    preds = pred_store.open_predictions(conn)
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    if dedupe_first:                       # keep earliest call per ticker
        first: dict = {}
        for p in preds:
            cur = first.get(p["ticker"])
            if cur is None or (p["as_of_date"], p["id"]) < (cur["as_of_date"], cur["id"]):
                first[p["ticker"]] = p
        preds = sorted(first.values(), key=lambda p: p["ticker"])

    provider = YFinanceProvider()
    price_now: dict = {}
    for p in preds:
        t = p["ticker"]
        if t not in price_now:
            try:
                price_now[t] = float(provider.history(t, 5)["close"].iloc[-1])
            except Exception:
                price_now[t] = None

    calls = []
    for p in preds:
        now = price_now.get(p["ticker"])
        if now is None:
            continue
        ret, sig, hit = _score(p["verdict"], p["price_at_call"], now)
        calls.append({
            "ticker": p["ticker"], "verdict": p["verdict"], "as_of_date": p["as_of_date"],
            "price_at_call": round(p["price_at_call"], 2), "now": round(now, 2),
            "ret": round(ret, 4), "acting": round(sig, 4), "hit": hit,
            "days": _days(p["as_of_date"], today),
        })

    directional = [c for c in calls if c["hit"] is not None]
    hits = sum(1 for c in directional if c["hit"])
    return {
        "as_of": today, "n": len(calls), "priced": len(calls) > 0,
        "hit_rate": round(hits / len(directional), 4) if directional else None,
        "n_directional": len(directional), "n_hits": hits,
        "mean_acting": round(sum(c["acting"] for c in directional) / len(directional), 4)
                       if directional else None,
        "mean_raw": round(sum(c["ret"] for c in calls) / len(calls), 4) if calls else None,
        "calls": calls,
    }


def main() -> None:
    db_path = sys.argv[1] if len(sys.argv) > 1 else "trader_goblins.db"
    conn = store.init_db(db_path)
    preds = pred_store.open_predictions(conn)

    _sanity_check()
    if not preds:
        print("\nno saved predictions yet -- run: python -m trader_goblins.predict")
        return

    provider = YFinanceProvider()
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    price_now: dict = {}
    for p in preds:
        t = p["ticker"]
        if t not in price_now:
            try:
                price_now[t] = float(provider.history(t, 5)["close"].iloc[-1])
            except Exception:
                price_now[t] = None

    print(f"\nPREDICTION SCORECARD (as of {today})")
    hdr = f"  {'called':<11}{'ticker':<7}{'verdict':<11}{'@call':>9}{'now':>9}{'return':>9}{'acting':>9}{'days':>6}{'hit':>5}"
    print(hdr)
    print("  " + "-" * (len(hdr) - 2))
    scored = []
    for p in preds:
        now = price_now.get(p["ticker"])
        if now is None:
            continue
        ret, sig, hit = _score(p["verdict"], p["price_at_call"], now)
        d = _days(p["as_of_date"], today)
        scored.append((p, ret, sig, hit))
        print(f"  {p['as_of_date']:<11}{p['ticker']:<7}{p['verdict']:<11}"
              f"{p['price_at_call']:>9,.0f}{now:>9,.0f}{ret:>+9.1%}{sig:>+9.1%}"
              f"{d:>6}{('Y' if hit else 'N' if hit is not None else '-'):>5}")

    directional = [s for s in scored if s[3] is not None]
    if directional:
        hits = sum(1 for s in directional if s[3])
        mean_sig = sum(s[2] for s in directional) / len(directional)
        mean_raw = sum(s[1] for s in scored) / len(scored)
        print(f"\n  {len(scored)} calls | {hits}/{len(directional)} directional hits "
              f"({hits / len(directional):.0%}) | mean acting return {mean_sig:+.1%} "
              f"| mean raw move {mean_raw:+.1%}")
        if max(_days(p["as_of_date"], today) for p in preds) == 0:
            print("  (all calls made today -- returns are ~0 until time passes; re-run later)")
    conn.close()


if __name__ == "__main__":
    main()
