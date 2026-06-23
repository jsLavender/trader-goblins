"""Tiny stdlib HTTP server for the research dashboard.

Three routes, zero new dependencies (http.server is stdlib), matching the
project's minimal-deps ethos:

    GET /                 -> the static dashboard export (reports/dashboard.html)
    GET /research         -> the interactive deep-dive page
    GET /api/deepdive?ticker=NVDA -> JSON, always 200 with per-panel `available`
                                     flags so the frontend renders partial results

ThreadingHTTPServer is used so a slow yfinance/EDGAR fetch on one request doesn't
block the page from loading on another -- fine for single-user local.

PUBLIC MODE (Handler.public = True): for exposing /research to the internet via a
tunnel. It hides the dashboard (which shows the real paper-trading account) and
leans on the per-IP rate limit below so a public visitor can't hammer yfinance/
EDGAR through the host's IP and get it throttled.
"""
from __future__ import annotations

import json
import threading
import time
from http.server import BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import parse_qs, urlparse

from .deepdive import build_deepdive

# Per-IP fixed-window limit on the only expensive route (/api/deepdive). The
# cache already collapses repeat tickers; this caps a single abuser's fan-out.
_RATE_LIMIT = 30          # requests per window per IP
_RATE_WINDOW = 60.0       # seconds
_rate_lock = threading.Lock()
_rate_hits: dict = {}     # ip -> (window_start_monotonic, count)


def _rate_ok(ip: str) -> bool:
    now = time.monotonic()
    with _rate_lock:
        start, count = _rate_hits.get(ip, (now, 0))
        if now - start > _RATE_WINDOW:
            start, count = now, 0
        count += 1
        _rate_hits[ip] = (start, count)
        return count <= _RATE_LIMIT

_ROOT = Path(__file__).resolve().parents[2]
_RESEARCH_HTML = Path(__file__).with_name("research.html")
_OG_IMAGE = Path(__file__).with_name("og.png")        # social link-preview card
_FAVICON = Path(__file__).with_name("favicon.png")    # tab / bookmark icon
_DASHBOARD_HTML = _ROOT / "reports" / "dashboard.html"
_GAME_PAGE_HTML = Path(__file__).with_name("game.html")   # /play wrapper page
_GAME_DIR = Path(__file__).with_name("game").resolve()    # the Godot web export
_GAMES_PAGE_HTML = Path(__file__).with_name("games.html")  # /games arcade hub
_GAMES_DIR = Path(__file__).with_name("games").resolve()   # the built word-game bundles

# Content types for the static game assets (small fixed map — no mimetypes guesswork).
_GAME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".wasm": "application/wasm",
    ".pck": "application/octet-stream",
    ".png": "image/png",
    ".json": "application/json; charset=utf-8",
}

# Content types for the word-game bundles under /games/* (React/Vue/Parcel builds
# + the static crossword player + .ipuz puzzle files).
_GAMES_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".ipuz": "application/json; charset=utf-8",   # crossword puzzles (ipuz = JSON)
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".ico": "image/x-icon",
    ".txt": "text/plain; charset=utf-8",
    ".webmanifest": "application/manifest+json",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
}

_LANDING = (
    "<!doctype html><meta charset='utf-8'><title>Trader Goblins</title>"
    "<body style='font-family:system-ui;max-width:640px;margin:3rem auto;padding:0 1rem'>"
    "<h1>Trader Goblins</h1>"
    "<p>No dashboard export yet. Generate one with "
    "<code>python -m trader_goblins.dashboard</code>, or head straight to "
    "<a href='/research'>the research deep-dive</a>.</p></body>"
)


def _clean_ticker(raw: str) -> str:
    """Keep only ticker-legal chars (alnum, dot, dash), upper-cased, capped."""
    return "".join(ch for ch in raw.upper() if ch.isalnum() or ch in ".-")[:8]


# Sent on every response — defense-in-depth for a public, read-only site.
_SECURITY_HEADERS = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "no-referrer",
    "Content-Security-Policy": (
        "default-src 'self'; "
        "script-src 'self' https://cdnjs.cloudflare.com 'unsafe-inline'; "
        "style-src 'self' 'unsafe-inline'; connect-src 'self'; "
        "img-src 'self' data:; base-uri 'none'; frame-ancestors 'none'"
    ),
}

# The Godot WebAssembly game needs a looser CSP than the strict site default:
# WASM compilation requires 'wasm-unsafe-eval', the engine spins up blob: workers,
# and the page is meant to be framed by our own /play wrapper (frame-ancestors
# 'self', X-Frame-Options SAMEORIGIN — NOT the site-wide DENY). Scoped to /game/*.
_GAME_HEADERS = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "no-referrer",
    "Content-Security-Policy": (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'; "
        "style-src 'self' 'unsafe-inline'; "
        "img-src 'self' data: blob:; media-src 'self' blob:; "
        "worker-src 'self' blob:; child-src 'self' blob:; "
        "connect-src 'self'; base-uri 'none'; frame-ancestors 'self'"
    ),
}

# CSP for the word-game bundles under /games/*. They are third-party SPA builds,
# so they need looser rules than the strict site default: inline scripts (CRA's
# runtime chunk, jQuery's script-element eval), inline styles, and Connections'
# one Google Font. Still no remote script execution, no framing by other sites.
_GAMES_HEADERS = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "no-referrer",
    "Content-Security-Policy": (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline'; "
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
        "font-src 'self' data: https://fonts.gstatic.com; "
        "img-src 'self' data: blob:; "
        "worker-src 'self' blob:; child-src 'self' blob:; "
        "connect-src 'self'; base-uri 'none'; frame-ancestors 'self'"
    ),
}


class Handler(BaseHTTPRequestHandler):
    server_version = "TraderGoblins"
    sys_version = ""      # suppress the "Python/3.12.x" version disclosure
    public = False        # set True (via --public) to hide the dashboard for internet exposure

    # ── helpers ───────────────────────────────────────────────────────────────
    def _security_headers(self) -> None:
        for name, value in _SECURITY_HEADERS.items():
            self.send_header(name, value)

    def _send(self, code: int, body, ctype: str) -> None:
        data = body.encode("utf-8") if isinstance(body, str) else body
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self._security_headers()
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(data)

    def _redirect(self, location: str) -> None:
        self.send_response(302)
        self.send_header("Location", location)
        self.send_header("Content-Length", "0")
        self._security_headers()
        self.end_headers()

    def _client_ip(self) -> str:
        # The socket peer is a proxy (Render/Cloudflare), so trust the edge's
        # client-IP headers first, then the first X-Forwarded-For hop, then the
        # raw peer as a last resort. Without this, every visitor shares one bucket.
        h = self.headers
        ip = h.get("CF-Connecting-IP") or h.get("True-Client-IP")
        if not ip:
            xff = h.get("X-Forwarded-For")
            if xff:
                ip = xff.split(",")[0].strip()
        return ip or self.client_address[0]

    def _send_file(self, path: Path, ctype: str, fallback: str) -> None:
        try:
            self._send(200, path.read_text(encoding="utf-8"), ctype)
        except FileNotFoundError:
            self._send(200, fallback, "text/html; charset=utf-8")

    def _send_image(self, path: Path, ctype: str) -> None:
        try:
            data = path.read_bytes()
        except FileNotFoundError:
            self._send(404, "not found", "text/plain; charset=utf-8")
            return
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "public, max-age=86400")
        self._security_headers()
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(data)

    def _serve_game_asset(self, raw_path: str) -> None:
        """Serve a file from the Godot export under /game/*, binary-safe and
        path-traversal-guarded, with the looser game CSP/framing headers."""
        rel = raw_path[len("/game"):].lstrip("/") or "index.html"
        target = (_GAME_DIR / rel).resolve()
        # Containment guard: the resolved path must stay inside _GAME_DIR.
        if _GAME_DIR not in target.parents or not target.is_file():
            self._send(404, "not found", "text/plain; charset=utf-8")
            return
        data = target.read_bytes()
        ctype = _GAME_TYPES.get(target.suffix.lower(), "application/octet-stream")
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        for name, value in _GAME_HEADERS.items():
            self.send_header(name, value)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(data)

    def _serve_games_asset(self, raw_path: str) -> None:
        """Serve the word-game bundles under /games/*. /games (bare) -> the hub
        page; /games/<game>/ -> that bundle's index.html; everything else a static
        file inside _GAMES_DIR. Path-traversal guarded, binary-safe, games CSP."""
        rel = raw_path[len("/games"):].lstrip("/")
        if not rel:                                   # /games or /games/
            self._send_file(_GAMES_PAGE_HTML, "text/html; charset=utf-8",
                            "games.html missing from the install")
            return
        target = (_GAMES_DIR / rel).resolve()
        if target.is_dir():                           # /games/wordle -> .../wordle/index.html
            target = target / "index.html"
        # Containment guard: the resolved path must stay inside _GAMES_DIR.
        if _GAMES_DIR not in target.parents or not target.is_file():
            self._send(404, "not found", "text/plain; charset=utf-8")
            return
        data = target.read_bytes()
        ctype = _GAMES_TYPES.get(target.suffix.lower(), "application/octet-stream")
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        for name, value in _GAMES_HEADERS.items():
            self.send_header(name, value)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(data)

    # ── routing ───────────────────────────────────────────────────────────────
    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/game" or parsed.path.startswith("/game/"):
            self._serve_game_asset(parsed.path)
            return
        if parsed.path == "/games" or parsed.path.startswith("/games/"):
            self._serve_games_asset(parsed.path)
            return
        route = parsed.path.rstrip("/") or "/"
        if route == "/":
            if self.public:                       # hide the account-bearing dashboard
                self._redirect("/research")
            else:
                self._send_file(_DASHBOARD_HTML, "text/html; charset=utf-8", _LANDING)
        elif route == "/research":
            self._send_file(_RESEARCH_HTML, "text/html; charset=utf-8",
                            "research.html missing from the install")
        elif route == "/play":
            self._send_file(_GAME_PAGE_HTML, "text/html; charset=utf-8",
                            "game.html missing from the install")
        elif route == "/api/deepdive":
            if not _rate_ok(self._client_ip()):
                self._send(429, json.dumps({"error": "rate limited — slow down a moment"}),
                           "application/json; charset=utf-8")
                return
            self._api_deepdive(parse_qs(parsed.query))
        elif route == "/og.png":
            self._send_image(_OG_IMAGE, "image/png")
        elif route in ("/favicon.png", "/favicon.ico"):
            self._send_image(_FAVICON, "image/png")
        else:
            self._send(404, "not found", "text/plain; charset=utf-8")

    do_HEAD = do_GET

    def _api_deepdive(self, qs) -> None:
        ticker = _clean_ticker((qs.get("ticker") or [""])[0])
        if not ticker:
            self._send(400, json.dumps({"error": "ticker required"}),
                       "application/json")
            return
        try:
            result = build_deepdive(ticker)
        except Exception as e:                 # build_deepdive shouldn't raise, but be safe
            print(f"  deepdive error for {ticker}: {type(e).__name__}: {e}")
            result = {"ticker": ticker, "error": "internal error building the deep-dive"}
        self._send(200, json.dumps(result, default=str),
                   "application/json; charset=utf-8")

    # Quieter logs: one tidy line per request, no stderr noise on broken pipes.
    def log_message(self, fmt: str, *args) -> None:
        print(f"  {self.command} {self.path} -> {args[1] if len(args) > 1 else ''}")
