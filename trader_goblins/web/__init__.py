"""Interactive research server: the dashboard's live cousin.

The dashboard ([trader_goblins/dashboard.py]) is a static HTML export. This
package adds a tiny stdlib web server that makes research interactive -- type a
ticker, get a deep-dive assembled from the firm's existing lenses, behind a
read-through cache so the flaky/slow data sources (yfinance, SEC EDGAR) get hit
once per ticker per day instead of once per click.

    python -m trader_goblins.web        # -> http://127.0.0.1:8000/research
"""
