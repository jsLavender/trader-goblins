"""Forward predictions:  python -m trader_goblins.predict [TICKER ...]

Fetches CURRENT real data (price history + analyst/fundamental signals) and has
the firm's lenses make a forward call per ticker -- momentum + quant (price) and
the new Analyst + Value goblins (fundamentals). Forward-looking by design, so no
lookahead leakage. Prints a ranked table and saves reports/predictions_*.md.

NOTE: predictions for going FORWARD from today, not investment advice. yfinance
fundamentals are scraped and can be missing/stale on thinly-covered names.
"""
from __future__ import annotations

import os
import sys
from datetime import datetime, timezone
from typing import List

from .curators.fundamentals import analyst_signal, value_signal
from .curators.lenses import Momentum, Quant
from .data.market_data import YFinanceProvider
from .data.signals import fetch_signals
from .metrics import compute_metrics

DEFAULT_WATCHLIST = ["AAPL", "MSFT", "NVDA", "GOOGL", "KO", "XOM", "JPM", "WMT"]
# How much each directional lens counts toward the combined forward view.
WEIGHTS = {"momentum": 0.25, "quant": 0.15, "analyst": 0.35, "value": 0.25}


def _verdict(x: float) -> str:
    return ("BUY" if x >= 0.30 else "ACCUMULATE" if x >= 0.10
            else "HOLD" if x > -0.10 else "AVOID")


def predict(tickers: List[str], lookback: int = 252) -> List[dict]:
    provider = YFinanceProvider()
    mom, quant = Momentum(), Quant()
    rows = []
    for t in tickers:
        try:
            df = provider.history(t, lookback)
        except Exception as e:
            print(f"  skipping {t}: {e}")
            continue
        m = compute_metrics(t, df)
        sig = fetch_signals(t)

        leans = {"momentum": mom.lean_confidence(m)[0],
                 "quant": quant.lean_confidence(m)[0]}
        an = analyst_signal(sig)
        val = value_signal(sig)
        notes = {}
        if an:
            leans["analyst"], _, notes["analyst"] = an[0], an[1], an[2]
        if val:
            leans["value"], _, notes["value"] = val[0], val[1], val[2]

        num = sum(leans[k] * WEIGHTS[k] for k in leans)
        den = sum(WEIGHTS[k] for k in leans)
        combined = num / den if den else 0.0
        rows.append({"ticker": t, "price": m.last_price,
                     "target": sig.get("targetMeanPrice"),
                     "upside": sig.get("implied_upside"),
                     "consensus": sig.get("recommendationKey"),
                     "pe": sig.get("trailingPE"),
                     "leans": leans, "notes": notes,
                     "combined": combined, "verdict": _verdict(combined)})
    rows.sort(key=lambda r: -r["combined"])
    return rows


def _fmt_pct(x):
    return f"{x:+.0%}" if x is not None else "  --"


def main() -> None:
    tickers = [a.upper() for a in sys.argv[1:]] or DEFAULT_WATCHLIST
    print(f"Fetching live signals for {len(tickers)} tickers...\n")
    rows = predict(tickers)
    if not rows:
        print("no data returned.")
        return

    hdr = f"{'ticker':<7}{'price':>9}{'target':>9}{'upside':>8}{'consensus':>11}" \
          f"{'P/E':>7}{'mom':>7}{'analyst':>8}{'value':>7}{'  combined':>11}{'  call':>12}"
    print(hdr)
    print("-" * len(hdr))
    for r in rows:
        L = r["leans"]
        print(f"{r['ticker']:<7}{r['price']:>9,.0f}"
              f"{(r['target'] or 0):>9,.0f}{_fmt_pct(r['upside']):>8}"
              f"{(r['consensus'] or 'n/a'):>11}"
              f"{(r['pe'] or 0):>7.0f}"
              f"{L.get('momentum', 0):>+7.2f}"
              f"{L['analyst'] if 'analyst' in L else float('nan'):>+8.2f}"
              f"{L['value'] if 'value' in L else float('nan'):>+7.2f}"
              f"{r['combined']:>+11.2f}{r['verdict']:>12}")

    # Persist the calls so `track` can mark them to future prices.
    from .db import predictions as pred_store, store
    conn = store.init_db("trader_goblins.db")
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    for r in rows:
        pred_store.insert_prediction(conn, today, r["ticker"], r["verdict"],
                                     r["combined"], r["price"], r["target"], r["upside"])
    conn.close()
    print(f"\nsaved {len(rows)} predictions to trader_goblins.db "
          f"(track them later with: python -m trader_goblins.track)")

    os.makedirs("reports", exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
    path = os.path.join("reports", f"predictions_{stamp}.md")
    with open(path, "w", encoding="utf-8") as f:
        f.write(f"# Trader Goblins — forward predictions\n\n*Generated "
                f"{datetime.now(timezone.utc):%Y-%m-%d %H:%M} UTC · live data · "
                f"not investment advice*\n\n")
        f.write("| Ticker | Call | Combined | Price | Mean target | Upside | Consensus | P/E |\n")
        f.write("|--------|------|---------:|------:|------------:|-------:|-----------|----:|\n")
        for r in rows:
            f.write(f"| {r['ticker']} | {r['verdict']} | {r['combined']:+.2f} | "
                    f"${r['price']:,.0f} | "
                    f"{('$'+format(r['target'],',.0f')) if r['target'] else '—'} | "
                    f"{_fmt_pct(r['upside'])} | {r['consensus'] or '—'} | "
                    f"{(format(r['pe'],'.0f')) if r['pe'] else '—'} |\n")
        f.write("\n## Why\n")
        for r in rows:
            bits = " ".join(f"_{k}:_ {v}" for k, v in r["notes"].items())
            f.write(f"\n**{r['ticker']} — {r['verdict']}** ({r['combined']:+.2f}). {bits}\n")
    print(f"\nsaved -> {path}")


if __name__ == "__main__":
    main()
