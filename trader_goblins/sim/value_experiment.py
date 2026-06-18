"""Does the LEAK-FREE value tooth actually predict returns?

    python -m trader_goblins.sim.value_experiment [FWD_DAYS]

The honest edge test, quant-style. Over a few years of real prices, on a set of
monthly as-of dates, we:
  1. compute each stock's VALUE lean from SEC EDGAR fundamentals known as of that
     date (leak-free) + the as-of price,
  2. compute its forward return over the next FWD trading days,
  3. rank-correlate lean vs forward return ACROSS stocks that date (the
     cross-sectional Information Coefficient), and average the IC over dates.

A positive mean IC (and mostly-positive dates) = the signal has predictive edge.
~0 = no edge. We run price MOMENTUM the same way as a baseline, so we can see if
value adds anything beyond just following the trend. No LLM, no API key.
"""
from __future__ import annotations

import sys
from statistics import mean, pstdev
from typing import List

import pandas as pd

from ..curators.base import momentum_read
from ..curators.fundamentals import value_signal
from ..data import build_run_prices, edgar
from ..data.market_data import YFinanceProvider
from ..db import prices as price_store
from ..db import store
from ..metrics import compute_metrics

UNIVERSE = [
    # tech / comm (~45)
    "AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "AVGO", "ORCL", "CRM", "ADBE",
    "AMD", "CSCO", "ACN", "INTC", "IBM", "QCOM", "TXN", "NOW", "INTU", "AMAT",
    "MU", "ADI", "LRCX", "KLAC", "SNPS", "CDNS", "PANW", "ANET", "FTNT", "NXPI",
    "MCHP", "ON", "CDW", "HPQ", "DELL", "HPE", "WDC", "STX", "GLW", "KEYS",
    "NFLX", "DIS", "CMCSA", "TMUS", "EA",
    # consumer discretionary (~25)
    "HD", "LOW", "NKE", "MCD", "SBUX", "TJX", "BKNG", "CMG", "ORLY", "AZO",
    "ROST", "YUM", "MAR", "HLT", "GM", "F", "APTV", "LULU", "DHI", "LEN",
    "EBAY", "DPZ", "DRI", "ULTA", "BBY",
    # consumer staples (~20)
    "WMT", "COST", "PG", "KO", "PEP", "MDLZ", "CL", "KMB", "GIS", "MO",
    "PM", "KHC", "HSY", "STZ", "KR", "SYY", "ADM", "K", "CHD", "CLX",
    # health care (~30)
    "UNH", "JNJ", "LLY", "ABBV", "MRK", "PFE", "TMO", "ABT", "DHR", "BMY",
    "AMGN", "GILD", "ISRG", "VRTX", "REGN", "CI", "CVS", "ELV", "HUM", "ZTS",
    "BSX", "SYK", "BDX", "MDT", "EW", "IDXX", "IQV", "RMD", "DXCM", "MTD",
    # financials (~30)
    "JPM", "BAC", "WFC", "GS", "MS", "C", "V", "MA", "AXP", "BLK",
    "SCHW", "SPGI", "PYPL", "COF", "USB", "PNC", "TFC", "BK", "CME", "ICE",
    "MCO", "AON", "MMC", "PGR", "TRV", "ALL", "MET", "PRU", "AFL", "CB",
    # industrials (~25)
    "BA", "CAT", "GE", "HON", "UPS", "RTX", "LMT", "DE", "UNP", "CSX",
    "NSC", "GD", "NOC", "EMR", "ETN", "ITW", "PH", "MMM", "FDX", "WM",
    "RSG", "GWW", "ROP", "PCAR", "CMI",
    # energy (~13)
    "XOM", "CVX", "COP", "SLB", "EOG", "MPC", "PSX", "VLO", "OXY", "WMB",
    "KMI", "OKE", "HES",
    # materials (~10)
    "LIN", "APD", "SHW", "FCX", "NEM", "ECL", "DD", "DOW", "NUE", "PPG",
    # utilities (~10)
    "NEE", "DUK", "SO", "D", "AEP", "EXC", "SRE", "XEL", "ED", "PEG",
    # real estate (~10)
    "PLD", "AMT", "EQIX", "CCI", "PSA", "O", "SPG", "WELL", "DLR", "VTR",
]
LOOKBACK = 750          # ~3 trading years of history
WARMUP = 250            # skip the first year (need a 200-day window for momentum)
SAMPLE_EVERY = 21       # evaluate ~monthly


def _ic(df: pd.DataFrame, col: str) -> float:
    sub = df[[col, "fwd"]].dropna()
    if len(sub) < 5 or sub[col].nunique() < 2:
        return float("nan")
    # Spearman = Pearson on the ranks (avoids a scipy dependency).
    return sub[col].rank().corr(sub["fwd"].rank())


def main() -> None:
    fwd = int(sys.argv[1]) if len(sys.argv) > 1 else 21
    lookback = int(sys.argv[2]) if len(sys.argv) > 2 else LOOKBACK
    print(f"Leak-free VALUE edge test -- {len(UNIVERSE)} names, {fwd}-day forward "
          f"return, monthly as-of dates, ~{lookback // 252}y history.\nFetching real "
          "prices + EDGAR fundamentals (each company fetched once)...\n")

    conn = store.init_db(":memory:")
    run_id = store.create_run(conn, mode="live", seed=0, note="value experiment")
    build_run_prices(conn, run_id, YFinanceProvider(), UNIVERSE, lookback_days=lookback)
    dates = price_store.trading_dates(conn, run_id)
    if len(dates) < WARMUP + fwd + SAMPLE_EVERY:
        print("not enough price history returned — try again or widen LOOKBACK.")
        return

    val_ics: List[float] = []
    mom_ics: List[float] = []
    n_obs = 0
    covered = set()
    sampled = range(WARMUP, len(dates) - fwd, SAMPLE_EVERY)
    for i in sampled:
        d, d_fwd = dates[i], dates[i + fwd]
        px0 = price_store.prices_asof(conn, run_id, d, UNIVERSE)
        px1 = price_store.prices_asof(conn, run_id, d_fwd, UNIVERSE)
        rows = []
        for t in UNIVERSE:
            p0, p1 = px0.get(t), px1.get(t)
            if not p0 or not p1:
                continue
            sig = edgar.point_in_time_signals(t, d, p0)
            vs = value_signal(sig) if sig else None
            if vs:
                covered.add(t)
            dfh = price_store.history_asof(conn, run_id, t, d)
            mom = momentum_read(compute_metrics(t, dfh)) if len(dfh) > 30 else None
            rows.append({"val": vs[0] if vs else None, "mom": mom, "fwd": p1 / p0 - 1.0})
        if len(rows) < 6:
            continue
        df = pd.DataFrame(rows)
        vic, mic = _ic(df, "val"), _ic(df, "mom")
        if vic == vic:                      # not NaN
            val_ics.append(vic)
        if mic == mic:
            mom_ics.append(mic)
        n_obs += len(df)

    def _report(name: str, ics: List[float]) -> None:
        if not ics:
            print(f"  {name}: no valid dates")
            return
        m = mean(ics)
        sd = pstdev(ics) if len(ics) > 1 else 0.0
        tstat = (m / (sd / len(ics) ** 0.5)) if sd else float("inf")
        pos = sum(1 for x in ics if x > 0) / len(ics)
        print(f"  {name:<10} mean IC {m:+.3f} | {pos:.0%} of dates positive | "
              f"t~{tstat:+.2f} | {len(ics)} dates")

    print(f"\nRESULT ({n_obs} stock-date observations, {len(covered)}/{len(UNIVERSE)} "
          f"names with EDGAR coverage):")
    _report("VALUE", val_ics)
    _report("momentum", mom_ics)
    print("\nRule of thumb: |mean IC| < 0.02 ~ noise; 0.03-0.05 is a real (small) "
          "edge; t~2 ~ significant. Honest read below.")


if __name__ == "__main__":
    main()
