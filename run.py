#!/usr/bin/env python3
"""Trader Goblins — Phase 1 CLI.

Examples
--------
    python run.py                          # default universe
    python run.py --tickers AAPL NVDA KO   # custom watchlist
    python run.py --top 5 --lookback 252   # more candidates, 1y lookback
    python run.py --offline                # force synthetic data + heuristic LLM

Set ANTHROPIC_API_KEY in your environment to enable real Claude reasoning for
the Scanner/Bull/Bear agents. Without it (or with --offline) the firm still runs
end-to-end using deterministic heuristics.
"""
from __future__ import annotations

import argparse

from trader_goblins import Settings, run_pipeline, save_report


def main() -> None:
    p = argparse.ArgumentParser(description="Trader Goblins research firm (Phase 1)")
    p.add_argument("--tickers", nargs="+", help="Override the universe")
    p.add_argument("--top", type=int, default=3, help="Candidates to promote")
    p.add_argument("--lookback", type=int, default=252, help="Trading days of history")
    p.add_argument("--offline", action="store_true",
                   help="Force synthetic data + heuristic reasoning (no network/key)")
    p.add_argument("--quiet", action="store_true", help="Less console output")
    args = p.parse_args()

    settings = Settings()
    if args.tickers:
        settings.universe = [t.upper() for t in args.tickers]
    settings.max_candidates = args.top
    settings.lookback_days = args.lookback

    packet = run_pipeline(
        settings=settings,
        prefer_real_data=not args.offline,
        prefer_real_llm=not args.offline,
        verbose=not args.quiet,
    )

    md_path, json_path = save_report(packet, settings.report_dir)
    print(f"\nSaved report : {md_path}")
    print(f"Saved packet : {json_path}")


if __name__ == "__main__":
    main()
