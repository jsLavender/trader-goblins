"""Factor lab -- the leak-free edge hunt aimed at outcome #4.

    python -m trader_goblins.sim.factor_lab [LOOKBACK_DAYS]

Single signals are weak (we proved value alone is ~noise). #4 -- a small, real,
capacity-constrained edge -- most plausibly lives in (a) LONGER horizons, (b)
factor COMBINATIONS, and (c) smaller caps. This lab tests a small factor zoo,
each computed leak-free (EDGAR fundamentals known as of the date + point-in-time
prices), and reports each factor's cross-sectional Information Coefficient at
1/3/12-month horizons -- plus an equal-weight COMBINED score. The combined row
is the one that matters for #4.

Factors (higher score = more attractive):
  value     earnings yield (net income / market cap) -- cheap is good
  quality   return on equity -- profitable is good
  momentum  12-1 month price momentum (skip last month) -- trending is good
  size      -log(market cap) -- smaller is good (weak in a large-cap universe)
  lowvol    -annualized vol -- calmer is good

Honest reads: IC ~0.02 is noise; 0.03-0.05 is a small real edge; t~2 is
significant. The universe here is large-cap (clean EDGAR), so SIZE will look
dead -- that itself shows why #4 needs smaller names. No LLM, no API key.
"""
from __future__ import annotations

import math
import sys
from statistics import mean, pstdev
from typing import Dict, List, Optional

import pandas as pd

from ..data import build_run_prices, edgar
from ..data.market_data import YFinanceProvider
from ..db import prices as price_store
from ..db import store
from ..metrics import compute_metrics
from .value_experiment import UNIVERSE

HORIZONS = [21, 63, 252]          # ~1mo, 3mo, 12mo
WARMUP = 260                      # need a 252-day window for 12-1 momentum
SAMPLE_EVERY = 21                 # ~monthly
FACTORS = ["value", "quality", "momentum", "size", "lowvol"]


def _factors(sig: Optional[dict], dfh) -> Optional[Dict[str, Optional[float]]]:
    if not sig:
        return None
    raw = sig.get("_raw", {})
    mcap, ni, roe = sig.get("marketCap"), raw.get("net_income"), sig.get("returnOnEquity")
    closes = dfh["close"]
    mom = (float(closes.iloc[-21]) / float(closes.iloc[-252]) - 1.0) if len(closes) >= 252 else None
    vol = compute_metrics(sig["ticker"], dfh).annualized_vol if len(dfh) > 30 else None
    return {
        "value": (ni / mcap) if (ni is not None and mcap) else None,
        "quality": roe,
        "momentum": mom,
        "size": (-math.log(mcap)) if (mcap and mcap > 0) else None,
        "lowvol": (-vol) if vol is not None else None,
    }


def _ic(df: pd.DataFrame, col: str) -> float:
    sub = df[[col, "fwd"]].dropna()
    if len(sub) < 6 or sub[col].nunique() < 2:
        return float("nan")
    return sub[col].rank().corr(sub["fwd"].rank())     # Spearman via ranks (no scipy)


def main() -> None:
    lookback = int(sys.argv[1]) if len(sys.argv) > 1 else 1260   # ~5y default
    print(f"Factor lab -- {len(UNIVERSE)} names, ~{lookback // 252}y history, "
          f"horizons {[h // 21 for h in HORIZONS]} months.\nFetching real prices + "
          "EDGAR fundamentals (each company fetched once)...\n")

    conn = store.init_db(":memory:")
    run_id = store.create_run(conn, mode="live", seed=0, note="factor lab")
    build_run_prices(conn, run_id, YFinanceProvider(), UNIVERSE, lookback_days=lookback)
    dates = price_store.trading_dates(conn, run_id)
    if len(dates) < WARMUP + min(HORIZONS) + SAMPLE_EVERY:
        print("not enough history -- widen LOOKBACK.")
        return

    # ics[factor][horizon] = list of per-date cross-sectional ICs
    ics: Dict[str, Dict[int, List[float]]] = {f: {h: [] for h in HORIZONS}
                                              for f in FACTORS + ["COMBINED"]}
    covered = set()
    for i in range(WARMUP, len(dates) - min(HORIZONS), SAMPLE_EVERY):
        d = dates[i]
        px0 = price_store.prices_asof(conn, run_id, d, UNIVERSE)
        rows = []
        for t in UNIVERSE:
            p0 = px0.get(t)
            if not p0:
                continue
            dfh = price_store.history_asof(conn, run_id, t, d)
            f = _factors(edgar.point_in_time_signals(t, d, p0), dfh)
            if not f:
                continue
            covered.add(t)
            rows.append({"ticker": t, **f, "p0": p0})
        if len(rows) < 8:
            continue
        df = pd.DataFrame(rows).set_index("ticker")
        # equal-weight combined = mean of available factor ranks
        df["COMBINED"] = df[FACTORS].rank().mean(axis=1, skipna=True)
        for h in HORIZONS:
            if i + h >= len(dates):
                continue
            pxh = price_store.prices_asof(conn, run_id, dates[i + h], list(df.index))
            df["fwd"] = [pxh.get(t, float("nan")) / df.loc[t, "p0"] - 1.0
                         if pxh.get(t) else float("nan") for t in df.index]
            for f in FACTORS + ["COMBINED"]:
                v = _ic(df, f)
                if v == v:
                    ics[f][h].append(v)

    print(f"RESULT ({len(covered)}/{len(UNIVERSE)} names covered). "
          "Each cell: mean IC (t-stat) over the monthly dates.\n")
    head = "  " + f"{'factor':<10}" + "".join(f"{h // 21:>2}mo".rjust(16) for h in HORIZONS)
    print(head)
    print("  " + "-" * (len(head) - 2))
    for f in FACTORS + ["COMBINED"]:
        cells = ""
        for h in HORIZONS:
            xs = ics[f][h]
            if not xs:
                cells += f"{'--':>16}"
                continue
            m = mean(xs)
            sd = pstdev(xs) if len(xs) > 1 else 0.0
            t = (m / (sd / len(xs) ** 0.5)) if sd else 0.0
            cells += f"{m:+.3f} (t{t:+.1f})".rjust(16)
        mark = "  <- the #4 row" if f == "COMBINED" else ""
        print(f"  {f:<10}{cells}{mark}")
    print("\nRead: |IC|<0.02 noise; 0.03-0.05 small real edge; |t|>2 significant.")


if __name__ == "__main__":
    main()
