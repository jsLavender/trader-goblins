"""Launch the research server.

Local:   python -m trader_goblins.web [--port 8000] [--public]
Deploy:  the PaaS sets $PORT and TG_PUBLIC=1; start command binds 0.0.0.0, e.g.
         python -m trader_goblins.web --host 0.0.0.0
"""
from __future__ import annotations

import argparse
import os
import threading
from http.server import ThreadingHTTPServer

from .deepdive import prewarm
from .server import Handler, _AUTH_ENABLED


def _envflag(name: str) -> bool:
    return os.environ.get(name, "").strip().lower() in ("1", "true", "yes", "on")


def main() -> None:
    ap = argparse.ArgumentParser(description="Trader Goblins research server")
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--port", type=int, default=int(os.environ.get("PORT", 8000)))
    ap.add_argument("--public", action="store_true", default=_envflag("TG_PUBLIC"),
                    help="Internet-exposure mode (also via TG_PUBLIC=1): hide the "
                         "dashboard, serve only /research + the rate-limited API")
    args = ap.parse_args()

    Handler.public = args.public
    httpd = ThreadingHTTPServer((args.host, args.port), Handler)
    url = f"http://{args.host}:{args.port}"
    if args.public:
        print(f"Trader Goblins research server (PUBLIC — research only)  ->  {url}/research")
        print("  dashboard hidden · /api/deepdive rate-limited per IP · Ctrl-C to stop")
        # Warm the featured tickers in the background so the demo is snappy on the
        # first click; never blocks startup, never fatal.
        threading.Thread(target=prewarm, daemon=True).start()
    else:
        print(f"Trader Goblins research server  ->  {url}/research")
        print(f"  dashboard at {url}/   ·   Ctrl-C to stop")
    if _AUTH_ENABLED:
        print("  auth: ON — dashboard (/) and scanner (/scan) require a username/password")
    else:
        print("  auth: off — set TG_AUTH_USER + TG_AUTH_PASS to gate the dashboard + scanner")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nbye")
    finally:
        httpd.server_close()


if __name__ == "__main__":
    main()
