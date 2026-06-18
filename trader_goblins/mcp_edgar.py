"""MCP server exposing Trader Goblins' leak-free SEC EDGAR fundamentals.

Lets Claude (Desktop, or any MCP client) ask for point-in-time fundamentals --
"what was publicly known about AAPL as of 2024-06-01" -- with no lookahead bias,
via the same engine the firm uses. Runs over stdio:

    python -m trader_goblins.mcp_edgar

To register in Claude Desktop, add this to claude_desktop_config.json
(%APPDATA%\\Claude\\ on Windows):

    "mcpServers": {
      "trader-goblins-edgar": {
        "command": "<project>\\.venv\\Scripts\\python.exe",
        "args": ["-m", "trader_goblins.mcp_edgar"],
        "env": { "PYTHONPATH": "<project>" }
      }
    }
"""
from __future__ import annotations

from datetime import datetime, timezone
from typing import Optional

from mcp.server.fastmcp import FastMCP

from .curators.fundamentals import value_signal
from .data import edgar

mcp = FastMCP("trader-goblins-edgar")


def _r(x, n: int = 4):
    return round(x, n) if isinstance(x, (int, float)) else None


def _price_on(ticker: str, as_of_date: str) -> Optional[float]:
    """Closing price on or just before as_of_date (so P/E and P/B reflect the
    date, not today). For a current date this is just the latest close."""
    try:
        from datetime import date, timedelta

        import yfinance as yf
        d = date.fromisoformat(as_of_date)
        df = yf.Ticker(ticker).history(
            start=(d - timedelta(days=7)).isoformat(),
            end=(d + timedelta(days=1)).isoformat())
        return float(df["Close"].iloc[-1]) if not df.empty else None
    except Exception:
        return None


@mcp.tool()
def point_in_time_fundamentals(ticker: str, as_of_date: Optional[str] = None,
                               price: Optional[float] = None) -> dict:
    """Leak-free SEC EDGAR fundamentals for a US-listed company, as PUBLICLY
    KNOWN on a given date -- only filings filed on or before that date are used,
    so there is no lookahead bias.

    Args:
        ticker: stock symbol, e.g. "AAPL".
        as_of_date: ISO "YYYY-MM-DD". Defaults to today. For a HISTORICAL date,
            also pass the historical `price`, or P/E and P/B will reflect the
            current price rather than the date's.
        price: share price as of `as_of_date` (needed for P/E and P/B). If
            omitted, the latest close is fetched and used.

    Returns revenue, net income, equity, diluted EPS, shares, profit margin,
    YoY revenue growth, P/E, P/B, ROE, market cap, the SEC filing the figures
    came from (period end + filing date), and a computed value read (a cheap vs
    expensive lean from -1 to +1).
    """
    as_of = as_of_date or datetime.now(timezone.utc).strftime("%Y-%m-%d")
    px, px_src = price, "provided"
    if px is None:
        px = _price_on(ticker, as_of)
        px_src = "close as of date (fetched)" if px else "unavailable"

    sig = edgar.point_in_time_signals(ticker, as_of, px)
    if not sig:
        return {"ticker": ticker, "as_of": as_of,
                "error": "no SEC CIK / no data found for this ticker"}
    raw = sig.get("_raw", {})
    vs = value_signal(sig)
    return {
        "ticker": ticker.upper(), "as_of": as_of, "source": "SEC EDGAR (leak-free)",
        "price_used": _r(px, 2), "price_source": px_src,
        "revenue": raw.get("revenue"), "net_income": raw.get("net_income"),
        "equity": raw.get("equity"), "eps_diluted": raw.get("eps"),
        "shares": raw.get("shares"),
        "profit_margin": _r(sig.get("profitMargins")),
        "revenue_growth_yoy": _r(sig.get("revenueGrowth")),
        "pe": _r(sig.get("trailingPE"), 1), "pb": _r(sig.get("priceToBook"), 1),
        "roe": _r(sig.get("returnOnEquity")), "market_cap": sig.get("marketCap"),
        "revenue_filing": {"period_end": raw.get("revenue_period_end"),
                           "filed": raw.get("revenue_filed"),
                           "xbrl_tag": raw.get("revenue_tag")},
        "value_read": None if not vs else {
            "lean": _r(vs[0], 2), "confidence": _r(vs[1], 2), "note": vs[2]},
    }


@mcp.tool()
def ticker_to_cik(ticker: str) -> dict:
    """Look up a company's SEC CIK (Central Index Key) from its stock ticker."""
    cik = edgar.cik_for_ticker(ticker)
    return {"ticker": ticker.upper(), "cik": cik} if cik else \
        {"ticker": ticker.upper(), "error": "ticker not found in SEC mapping"}


def main() -> None:
    mcp.run()


if __name__ == "__main__":
    main()
