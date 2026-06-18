"""SEC EDGAR point-in-time fundamentals -- leak-free, no API key.

yfinance returns only CURRENT fundamentals, so using them at a past backtest
date is lookahead leakage. EDGAR tags every reported figure with its FILING
date, so we can ask "what was publicly known as of date X" and build leak-free
fundamental signals usable at any historical date. We map ticker -> CIK, pull
per-concept XBRL facts, and take the latest annual value FILED on or before the
as-of date.

Honest limits:
  * XBRL concept tags vary across companies and years (Revenues especially), so
    extraction degrades gracefully -- a missing field comes back None.
  * Analyst price targets are NOT in EDGAR (they're estimates, not filings), so
    only the Value/fundamental tooth can be made leak-free this way.

The output dict uses the SAME keys as data/signals.fetch_signals (trailingPE,
priceToBook, profitMargins, revenueGrowth, ...), so curators/fundamentals.
value_signal consumes it unchanged -- just point-in-time instead of current.

SEC asks for a descriptive User-Agent with contact info; set TG_EDGAR_UA in .env
(e.g. "Trader Goblins your@email.com") to be polite and avoid throttling.
"""
from __future__ import annotations

import os
import time
from typing import Dict, List, Optional, Tuple

import requests

BASE = "https://data.sec.gov"
TICKERS_URL = "https://www.sec.gov/files/company_tickers.json"
UA = os.environ.get("TG_EDGAR_UA", "Trader Goblins research tool (contact in app)")
ANNUAL_FORMS = ("10-K", "10-K/A", "20-F", "20-F/A")
REVENUE_TAGS = ["Revenues", "RevenueFromContractWithCustomerExcludingAssessedTax",
                "SalesRevenueNet", "RevenueFromContractWithCustomerIncludingAssessedTax"]
SHARE_TAGS = [("dei", "EntityCommonStockSharesOutstanding"),
              ("us-gaap", "CommonStockSharesOutstanding"),
              ("us-gaap", "WeightedAverageNumberOfDilutedSharesOutstanding")]

_session: Optional[requests.Session] = None
_cik_cache: Dict[str, str] = {}
_concept_cache: Dict[str, Optional[dict]] = {}

# SEC fair-access: stay comfortably under their 10 req/sec ceiling.
_MIN_INTERVAL = 1.0 / 8
_last_call = [0.0]


def _sess() -> requests.Session:
    global _session
    if _session is None:
        _session = requests.Session()
        _session.headers.update({"User-Agent": UA, "Accept-Encoding": "gzip, deflate"})
    return _session


def _get(url: str) -> dict:
    wait = _MIN_INTERVAL - (time.monotonic() - _last_call[0])
    if wait > 0:
        time.sleep(wait)
    _last_call[0] = time.monotonic()
    r = _sess().get(url, timeout=25)
    if r.status_code >= 400:
        raise RuntimeError(f"{url} -> {r.status_code}")
    return r.json()


def cik_for_ticker(ticker: str) -> Optional[str]:
    """Zero-padded 10-digit CIK for a ticker, or None. Caches the full map."""
    global _cik_cache
    if not _cik_cache:
        for row in _get(TICKERS_URL).values():
            _cik_cache[row["ticker"].upper()] = str(row["cik_str"]).zfill(10)
    return _cik_cache.get(ticker.upper())


def _concept(cik: str, tag: str, taxonomy: str = "us-gaap") -> Optional[dict]:
    key = f"{cik}/{taxonomy}/{tag}"
    if key not in _concept_cache:
        try:
            _concept_cache[key] = _get(f"{BASE}/api/xbrl/companyconcept/CIK{cik}/{taxonomy}/{tag}.json")
        except Exception:
            _concept_cache[key] = None
    return _concept_cache[key]


def _annual_facts(concept: Optional[dict], as_of: str, unit: str) -> List[dict]:
    """Annual facts in `unit`, filed on or before as_of, one per fiscal-year end
    (keeping the most-recently-filed value for each end), oldest -> newest."""
    if not concept:
        return []
    rows = concept.get("units", {}).get(unit, [])
    cand = [f for f in rows if f.get("filed", "") <= as_of
            and f.get("form") in ANNUAL_FORMS and f.get("end")]
    by_end: Dict[str, dict] = {}
    for f in sorted(cand, key=lambda f: (f["end"], f["filed"])):
        by_end[f["end"]] = f                      # later filing for same end wins (restatements)
    return [by_end[e] for e in sorted(by_end)]


def _latest_shares(cik: str, as_of: str) -> Optional[float]:
    for tax, tag in SHARE_TAGS:
        c = _concept(cik, tag, tax)
        if not c:
            continue
        for unit in c.get("units", {}):
            rows = [f for f in c["units"][unit] if f.get("filed", "") <= as_of and f.get("end")]
            if rows:
                rows.sort(key=lambda f: (f["end"], f["filed"]))
                return float(rows[-1]["val"])
    return None


def point_in_time_signals(ticker: str, as_of_date: str,
                          price: Optional[float] = None) -> Optional[dict]:
    """Leak-free fundamentals known as of `as_of_date`. Same keys as
    data/signals.fetch_signals so value_signal() consumes it directly. `price` is
    the as-of close (from the run's price store) -- needed for P/E and P/B."""
    cik = cik_for_ticker(ticker)
    if not cik:
        return None

    ni = _annual_facts(_concept(cik, "NetIncomeLoss"), as_of_date, "USD")
    eq = _annual_facts(_concept(cik, "StockholdersEquity"), as_of_date, "USD")
    eps = _annual_facts(_concept(cik, "EarningsPerShareDiluted"), as_of_date, "USD/shares")
    # Revenue tags drift across years (companies abandon old tags), so pick the
    # candidate whose newest annual fact has the LATEST period end -- not just the
    # first tag that returns anything (which can be a stale deprecated series).
    rev: List[dict] = []
    rev_tag = None
    best_end = ""
    for tag in REVENUE_TAGS:
        facts = _annual_facts(_concept(cik, tag), as_of_date, "USD")
        if facts and facts[-1]["end"] > best_end:
            rev, rev_tag, best_end = facts, tag, facts[-1]["end"]
    shares = _latest_shares(cik, as_of_date)

    net_income = ni[-1]["val"] if ni else None
    equity = eq[-1]["val"] if eq else None
    revenue = rev[-1]["val"] if rev else None
    prev_rev = rev[-2]["val"] if len(rev) >= 2 else None
    eps_val = eps[-1]["val"] if eps else None

    out: Dict[str, Optional[float]] = {"ticker": ticker, "as_of": as_of_date,
                                       "source": "edgar"}
    out["profitMargins"] = (net_income / revenue) if (net_income and revenue) else None
    out["revenueGrowth"] = ((revenue - prev_rev) / prev_rev) if (revenue and prev_rev and prev_rev > 0) else None

    pe = None
    if price and net_income and shares and net_income > 0:
        pe = (price * shares) / net_income
    elif price and eps_val and eps_val > 0:
        pe = price / eps_val
    out["trailingPE"] = pe
    out["priceToBook"] = ((price * shares) / equity) if (price and shares and equity and equity > 0) else None
    # fields value_signal doesn't use but worth carrying for the report detail
    out["returnOnEquity"] = (net_income / equity) if (net_income and equity and equity > 0) else None
    out["marketCap"] = (price * shares) if (price and shares) else None
    out["_raw"] = {"net_income": net_income, "revenue": revenue, "prev_revenue": prev_rev,
                   "equity": equity, "eps": eps_val, "shares": shares, "revenue_tag": rev_tag,
                   "revenue_period_end": rev[-1]["end"] if rev else None,
                   "revenue_filed": rev[-1]["filed"] if rev else None}
    return out
