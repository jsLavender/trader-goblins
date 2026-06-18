"""Assemble a single-ticker 'deep dive' from the firm's existing lenses.

This is the interactive cousin of [trader_goblins/predict.py]: the same chain --
price metrics -> curator leans -> fundamental leans -> weighted verdict -- for
ONE ticker, plus the curator narratives and a leak-free EDGAR point-in-time
panel (the assembly proven in [trader_goblins/mcp_edgar.py]).

Two deliberate properties:
  * KEYLESS -- the curator narratives are the deterministic heuristics, so no
    ANTHROPIC_API_KEY and no per-click token cost.
  * GRACEFUL -- every panel is built independently and degrades to
    {"available": False, "reason": ...} on failure, so a thinly-covered or
    bogus ticker degrades panel-by-panel instead of taking the page down.

The cache + degradation patterns here are the shared foundation the later
research features (Bull/Bear, screener, ask-the-crew) build on.
"""
from __future__ import annotations

from dataclasses import asdict
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

from . import cache
from ..curators.fundamentals import analyst_signal, value_signal
from ..curators.lenses import Bear, Bull, Momentum, Quant
from ..data import edgar
from ..data.signals import fetch_signals
from ..metrics import PriceMetrics, compute_metrics
from ..predict import WEIGHTS, _verdict

_PX_TTL = 6 * 3600          # price/metrics: intraday refresh is pointless for daily math
_SIG_TTL = 6 * 3600         # yfinance analyst/fundamental signals
_EDGAR_TTL = 24 * 3600      # SEC filings change rarely
_CURATORS = [Quant(), Bull(), Bear(), Momentum()]
_MAX_POINTS = 260           # cap the chart series so the JSON stays small


def _today() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%d")


def _series(close) -> Dict[str, List]:
    """Downsample a close-price Series to <= _MAX_POINTS (dates, closes) for the chart."""
    idx, vals = list(close.index), [float(v) for v in close.tolist()]
    step = max(1, len(vals) // _MAX_POINTS)
    dates = [(d.date().isoformat() if hasattr(d, "date") else str(d)) for d in idx]
    return {"dates": dates[::step], "closes": [round(v, 4) for v in vals[::step]]}


def _ohlc(df) -> List[Dict[str, Any]]:
    """Downsample an OHLC frame to <= _MAX_POINTS [{t,o,h,l,c}] for candlesticks."""
    step = max(1, len(df) // _MAX_POINTS)
    out = []
    for d, row in list(df.iterrows())[::step]:
        t = d.date().isoformat() if hasattr(d, "date") else str(d)
        out.append({"t": t, "o": round(float(row["open"]), 4), "h": round(float(row["high"]), 4),
                    "l": round(float(row["low"]), 4), "c": round(float(row["close"]), 4)})
    return out


# ── panels ───────────────────────────────────────────────────────────────────

def _price_panel(ticker: str, provider) -> Dict[str, Any]:
    if provider is None:
        return {"available": False, "reason": "yfinance not installed"}

    def fetch() -> Dict[str, Any]:
        ohlc = None
        if hasattr(provider, "ohlc_history"):           # real provider -> candlesticks
            try:
                odf = provider.ohlc_history(ticker, 252)
                df, ohlc = odf[["close", "volume"]], _ohlc(odf)
            except Exception:
                df = provider.history(ticker, 252)      # fall back to close-only
        else:
            df = provider.history(ticker, 252)          # raises ValueError if empty
        m = compute_metrics(ticker, df)
        return {"metrics": asdict(m), "series": _series(df["close"].astype(float)),
                "ohlc": ohlc}

    try:
        data = cache.get_or_compute("px", ticker, _PX_TTL, fetch)
        data["available"] = True
        return data
    except Exception as e:
        return {"available": False, "reason": f"no price data ({type(e).__name__})"}


def _curators_panel(metrics: Optional[Dict[str, Any]]) -> Dict[str, Any]:
    if not metrics:
        return {"available": False, "reason": "needs price data"}
    try:
        m = PriceMetrics(**metrics)
        reads = []
        for c in _CURATORS:
            lean, conf = c.lean_confidence(m)
            reads.append({"name": c.name, "stance": c.stance,
                          "lean": round(lean, 3), "confidence": round(conf, 3),
                          "narrative": c.heuristic_narrative(m, lean, conf)})
        return {"available": True, "reads": reads}
    except Exception:
        return {"available": False, "reason": "could not compute curator reads"}


def _fundamentals_panel(ticker: str) -> Dict[str, Any]:
    try:
        sig = cache.get_or_compute("sig", ticker, _SIG_TTL, lambda: fetch_signals(ticker))
    except Exception as e:
        return {"available": False, "reason": f"{type(e).__name__}"}
    an, val = analyst_signal(sig), value_signal(sig)
    if an is None and val is None:
        return {"available": False, "reason": "no analyst or fundamental coverage"}
    out: Dict[str, Any] = {
        "available": True, "price": sig.get("currentPrice"),
        "target": sig.get("targetMeanPrice"), "upside": sig.get("implied_upside"),
        "consensus": sig.get("recommendationKey"), "pe": sig.get("trailingPE")}
    if an:
        out["analyst"] = {"lean": round(an[0], 3), "confidence": round(an[1], 3), "note": an[2]}
    if val:
        out["value"] = {"lean": round(val[0], 3), "confidence": round(val[1], 3), "note": val[2]}
    return out


def _edgar_panel(ticker: str, last_price: Optional[float]) -> Dict[str, Any]:
    def fetch() -> Optional[Dict[str, Any]]:
        sig = edgar.point_in_time_signals(ticker, _today(), last_price)
        if not sig:
            return None
        raw, vs = sig.get("_raw", {}), value_signal(sig)
        return {
            "price_used": last_price, "revenue": raw.get("revenue"),
            "net_income": raw.get("net_income"), "equity": raw.get("equity"),
            "eps_diluted": raw.get("eps"), "profit_margin": sig.get("profitMargins"),
            "revenue_growth_yoy": sig.get("revenueGrowth"), "pe": sig.get("trailingPE"),
            "pb": sig.get("priceToBook"), "roe": sig.get("returnOnEquity"),
            "market_cap": sig.get("marketCap"),
            "filing": {"period_end": raw.get("revenue_period_end"),
                       "filed": raw.get("revenue_filed")},
            "value_read": None if not vs else {"lean": round(vs[0], 3), "note": vs[2]},
        }

    try:
        data = cache.get_or_compute("edgar", ticker, _EDGAR_TTL, fetch)
    except Exception as e:
        return {"available": False, "reason": f"EDGAR error ({type(e).__name__})"}
    if not data:
        return {"available": False, "reason": "no SEC filings for this ticker"}
    data["available"] = True
    return data


def _verdict_panel(curators: Dict[str, Any], fundamentals: Dict[str, Any]) -> Dict[str, Any]:
    """Mirror predict.py's blend: weighted average of the leans we actually have."""
    leans: Dict[str, float] = {}
    if curators.get("available"):
        for r in curators["reads"]:
            if r["stance"] in ("momentum", "quant"):
                leans[r["stance"]] = r["lean"]
    if fundamentals.get("available"):
        if "analyst" in fundamentals:
            leans["analyst"] = fundamentals["analyst"]["lean"]
        if "value" in fundamentals:
            leans["value"] = fundamentals["value"]["lean"]
    if not leans:
        return {"available": False, "reason": "not enough signals for a verdict"}
    den = sum(WEIGHTS[k] for k in leans)
    combined = sum(leans[k] * WEIGHTS[k] for k in leans) / den if den else 0.0
    return {"available": True, "combined": round(combined, 3),
            "verdict": _verdict(combined), "components": leans}


# ── public entry point ────────────────────────────────────────────────────────

def build_deepdive(ticker: str, provider=None) -> Dict[str, Any]:
    """Assemble the full deep-dive dict for one ticker. Never raises -- every
    panel carries its own `available` flag so callers render partial results."""
    ticker = ticker.upper().strip()
    if provider is None:
        try:
            from ..data.market_data import YFinanceProvider
            provider = YFinanceProvider()
        except Exception:
            provider = None

    price = _price_panel(ticker, provider)
    metrics = price.get("metrics") if price.get("available") else None
    last_price = metrics.get("last_price") if metrics else None

    curators = _curators_panel(metrics)
    fundamentals = _fundamentals_panel(ticker)
    edgar_panel = _edgar_panel(ticker, last_price)
    verdict = _verdict_panel(curators, fundamentals)

    return {"ticker": ticker, "as_of": _today(), "price": price,
            "curators": curators, "fundamentals": fundamentals,
            "edgar": edgar_panel, "verdict": verdict}


# Tickers the public demo showcases (and warms on startup). Kept liquid + well
# covered so every panel populates for a first-time visitor.
FEATURED = ["AAPL", "MSFT", "NVDA", "GOOGL", "AMZN", "KO", "JPM", "XOM"]


def prewarm(tickers=FEATURED) -> None:
    """Best-effort: fill the cache for the featured tickers so a fresh (cloud)
    instance serves them instantly instead of doing a cold live fetch on the
    first click. Swallows everything -- warming is an optimization, not a gate."""
    for t in tickers:
        try:
            build_deepdive(t)
        except Exception:
            pass
