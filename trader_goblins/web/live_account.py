"""Live, read-only view of one or more Alpaca PAPER accounts, rendered server-side.

On the public deploy the locally-generated reports/dashboard.html doesn't exist,
so the Dashboard tab falls back to this: each account's current equity, day P&L,
and open positions, fetched live from Alpaca and shown behind the login.

HARD-LOCKED to the PAPER endpoint — this module can only READ a paper account.
It never places an order and never touches the live-money API.

Which accounts are shown is configured ENTIRELY via the TG_LIVE_ACCOUNTS env var,
so no account nicknames or key names live in this (public) repo. Format:

    TG_LIVE_ACCOUNTS="ALPACA:Main,ALPACA_ALT:Side"

i.e. a comma-separated list of `PREFIX:Label`, where PREFIX selects the env keys
`{PREFIX}_API_KEY_ID` / `{PREFIX}_API_SECRET_KEY`. Unset => just the default
ALPACA account labelled "Serious".
"""
from __future__ import annotations

import os
import threading
import time

_PAPER_BASE = "https://paper-api.alpaca.markets"
_TIMEOUT = 8
_CACHE_TTL = 15.0           # seconds — don't hammer Alpaca on phone refreshes

_lock = threading.Lock()
_cache: dict = {}           # prefix -> {"ts": monotonic, "data": dict}


def _account_specs():
    """Parse TG_LIVE_ACCOUNTS into [(prefix, label), ...]. Defaults to one
    serious account so the deploy works with zero extra config."""
    raw = os.environ.get("TG_LIVE_ACCOUNTS", "ALPACA:Serious")
    specs = []
    for part in raw.split(","):
        prefix, _, label = part.strip().partition(":")
        prefix = prefix.strip()
        if prefix:
            specs.append((prefix, label.strip() or prefix))
    return specs or [("ALPACA", "Serious")]


def fetch_account(prefix: str = "ALPACA") -> dict:
    """Return {available, account, positions, error} for one account. Never
    raises — degrades to a friendly message on missing keys or any API hiccup."""
    kid = os.environ.get(f"{prefix}_API_KEY_ID", "")
    sec = os.environ.get(f"{prefix}_API_SECRET_KEY", "")
    if not (kid and sec):
        return {"available": False, "error": "no_keys"}
    now = time.monotonic()
    with _lock:
        c = _cache.get(prefix)
        if c and now - c["ts"] < _CACHE_TTL:
            return c["data"]
    try:
        import requests
        h = {"APCA-API-KEY-ID": kid, "APCA-API-SECRET-KEY": sec}
        acct = requests.get(f"{_PAPER_BASE}/v2/account", headers=h, timeout=_TIMEOUT)
        acct.raise_for_status()
        pos = requests.get(f"{_PAPER_BASE}/v2/positions", headers=h, timeout=_TIMEOUT)
        pos.raise_for_status()
        data = {"available": True, "account": acct.json(), "positions": pos.json(), "error": None}
    except Exception as e:                       # network / auth / parse — all non-fatal
        data = {"available": False, "error": type(e).__name__}
    with _lock:
        _cache[prefix] = {"ts": now, "data": data}
    return data


# ── rendering ──────────────────────────────────────────────────────────────────
def _f(x, d=0.0):
    try:
        return float(x)
    except (TypeError, ValueError):
        return d


def _money(x):
    n = _f(x)
    return ("-$" if n < 0 else "$") + f"{abs(n):,.2f}"


def _pct(x):                 # x is a fraction (0.05 -> +5.00%)
    return f"{_f(x) * 100:+.2f}%"


def _cls(n):
    return "pos" if _f(n) > 0 else ("neg" if _f(n) < 0 else "")


def _esc(s):
    return (str(s).replace("&", "&amp;").replace("<", "&lt;")
            .replace(">", "&gt;").replace('"', "&quot;"))


_STYLE = """
 :root{--bg:#faf9f5;--surface:#ffffff;--line:#e9e7df;--ink:#1f1e1b;--muted:#6b6a64;
  --faint:#9a988f;--accent:#534AB7;--chip:#f1efe8;--pos:#1a7f4b;--neg:#c0392b;}
 @media (prefers-color-scheme:dark){:root{--bg:#1a1916;--surface:#242320;--line:#34322d;
  --ink:#ecebe6;--muted:#a3a199;--faint:#6f6d65;--accent:#AFA9EC;--chip:#2c2b27;--pos:#5dca8f;--neg:#e88;}}
 *{box-sizing:border-box}
 body{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:var(--bg);
  color:var(--ink);max-width:1040px;margin:0 auto;padding:1.5rem 1.25rem 3rem;line-height:1.55}
 a{color:var(--accent)}
 .topnav{position:sticky;top:0;z-index:30;background:var(--bg);margin:-1.5rem -1.25rem 1.1rem;
  padding:.55rem 1.25rem;border-bottom:1px solid var(--line)}
 .navrow{display:flex;align-items:center;gap:.5rem 1rem;flex-wrap:wrap}
 .brand{font-size:16px;font-weight:600;color:var(--ink);text-decoration:none;letter-spacing:-.01em;white-space:nowrap}
 .tabs{display:flex;gap:.3rem}
 .tab{font-size:13.5px;color:var(--muted);text-decoration:none;padding:.32rem .8rem;border-radius:8px;line-height:1}
 .tab:hover{background:var(--chip);color:var(--ink)}
 .tab.on{background:var(--accent);color:#fff}
 h1{font-size:21px;font-weight:600;margin:0 0 .15rem;letter-spacing:-.01em}
 .sub{color:var(--muted);font-size:13px;margin:0 0 1.3rem}
 .acct{margin:1.6rem 0 0}
 .acctlabel{display:flex;align-items:baseline;gap:.5rem;margin:0 0 .5rem}
 .acctlabel .nm{font-size:15px;font-weight:600}
 .acctlabel .eq{font-size:15px;font-weight:600;font-variant-numeric:tabular-nums;margin-left:auto}
 .acctlabel .d{font-size:12.5px;font-variant-numeric:tabular-nums}
 .hero{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:1.1rem 1.3rem}
 .eqlabel{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
 .eqbig{font-size:30px;font-weight:700;letter-spacing:-.01em;font-variant-numeric:tabular-nums}
 .day{font-size:14.5px;font-weight:600;margin-top:.15rem;font-variant-numeric:tabular-nums}
 .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:.6rem;margin:.7rem 0}
 .mc{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:.6rem .8rem}
 .mc .l{font-size:11.5px;color:var(--muted)}
 .mc .v{font-size:17px;font-weight:600;margin-top:2px;font-variant-numeric:tabular-nums}
 table{width:100%;border-collapse:collapse;font-size:13px}
 th,td{text-align:right;padding:.42rem .5rem;border-bottom:1px solid var(--line);font-variant-numeric:tabular-nums;white-space:nowrap}
 th{color:var(--muted);font-weight:500;font-size:11.5px;text-transform:uppercase;letter-spacing:.03em}
 th:first-child,td:first-child{text-align:left}
 td.sym{font-weight:600}
 .pos{color:var(--pos)}.neg{color:var(--neg)}
 .panel{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:1rem 1.1rem;color:var(--muted);font-size:13.5px}
 .tablewrap{overflow-x:auto}
 .foot{color:var(--faint);font-size:12px;margin-top:1.8rem;border-top:1px solid var(--line);padding-top:1rem}
"""

_NAV = (
    "<nav class='topnav'><div class='navrow'>"
    "<a class='brand' href='/'>&#128122; Trader Goblins</a>"
    "<div class='tabs'>"
    "<a class='tab on' href='/'>Dashboard</a>"
    "<a class='tab' href='/research'>Research</a>"
    "<a class='tab' href='/games'>Games</a>"
    "<a class='tab' href='/scan'>Scanner</a>"
    "</div></div></nav>"
)


def _page(inner: str) -> str:
    return (
        "<!doctype html><html lang='en'><head><meta charset='utf-8'>"
        "<meta name='viewport' content='width=device-width, initial-scale=1'>"
        "<title>Trader Goblins &middot; Live accounts</title>"
        f"<style>{_STYLE}</style></head><body>{_NAV}{inner}</body></html>"
    )


def _positions_table(positions) -> str:
    if not positions:
        return "<div class='panel'>No open positions.</div>"
    rows = ""
    for p in sorted(positions, key=lambda x: -abs(_f(x.get("market_value")))):
        upl = _f(p.get("unrealized_pl"))
        tdy = _f(p.get("unrealized_intraday_pl"))
        rows += (
            "<tr>"
            f"<td class='sym'>{_esc(p.get('symbol',''))}</td>"
            f"<td>{_f(p.get('qty')):g}</td>"
            f"<td>{_money(p.get('avg_entry_price'))}</td>"
            f"<td>{_money(p.get('current_price'))}</td>"
            f"<td>{_money(p.get('market_value'))}</td>"
            f"<td class='{_cls(upl)}'>{_money(upl)}</td>"
            f"<td class='{_cls(p.get('unrealized_plpc'))}'>{_pct(p.get('unrealized_plpc'))}</td>"
            f"<td class='{_cls(tdy)}'>{_money(tdy)}</td>"
            "</tr>"
        )
    return (
        "<div class='tablewrap'><table><thead><tr><th>Symbol</th><th>Qty</th><th>Avg entry</th>"
        "<th>Current</th><th>Mkt value</th><th>Unreal P/L</th><th>%</th><th>Today</th></tr></thead>"
        f"<tbody>{rows}</tbody></table></div>"
    )


def _account_block(label: str, d: dict, solo: bool) -> str:
    """Render one account. `solo` => single big hero; otherwise a compact header
    row so multiple accounts stack cleanly."""
    if not d.get("available"):
        why = ("keys not set in the environment" if d.get("error") == "no_keys"
               else f"unavailable right now ({_esc(d.get('error'))})")
        return (f"<div class='acct'><div class='acctlabel'><span class='nm'>{_esc(label)}</span></div>"
                f"<div class='panel'>Live account {why}.</div></div>")

    a = d["account"]
    positions = d["positions"] or []
    equity = _f(a.get("equity"))
    last_equity = _f(a.get("last_equity"))
    day_chg = equity - last_equity
    day_pct = (day_chg / last_equity) if last_equity else 0.0
    cash = _f(a.get("cash"))
    long_mv = _f(a.get("long_market_value"))
    short_mv = _f(a.get("short_market_value"))

    cards = [("Cash", _money(cash)), ("Long value", _money(long_mv))]
    if short_mv:
        cards.append(("Short value", _money(short_mv)))
    cards.append(("Positions", str(len(positions))))
    cards_html = "".join(
        f"<div class='mc'><div class='l'>{l}</div><div class='v'>{v}</div></div>" for l, v in cards
    )

    if solo:
        head = (
            "<div class='hero'>"
            f"<div class='eqlabel'>{_esc(label)} &middot; equity</div>"
            f"<div class='eqbig'>{_money(equity)}</div>"
            f"<div class='day {_cls(day_chg)}'>{_money(day_chg)} ({_pct(day_pct)}) today</div>"
            "</div>"
        )
    else:
        head = (
            "<div class='acctlabel'>"
            f"<span class='nm'>{_esc(label)}</span>"
            f"<span class='eq'>{_money(equity)}</span>"
            f"<span class='d {_cls(day_chg)}'>{_money(day_chg)} ({_pct(day_pct)}) today</span>"
            "</div>"
        )
    return f"<div class='acct'>{head}<div class='cards'>{cards_html}</div>{_positions_table(positions)}</div>"


def render_live_account() -> str:
    specs = _account_specs()
    solo = len(specs) == 1
    blocks = "".join(_account_block(label, fetch_account(prefix), solo) for prefix, label in specs)
    heading = "Live paper account" if solo else "Live paper accounts"
    return _page(
        f"<h1>&#128202; {heading}</h1>"
        "<p class='sub'>Live from Alpaca &mdash; reload to refresh.</p>"
        f"{blocks}"
        "<p class='foot'>Paper trading &mdash; simulated money, real prices. Read-only; "
        "this view never places trades. Your full backtest dashboard lives on the home machine.</p>"
    )
