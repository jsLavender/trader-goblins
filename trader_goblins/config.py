"""Central configuration for the Trader Goblins research firm.

Everything that you might want to tweak lives here so the rest of the code
stays clean. Nothing here requires an API key to import.
"""
from __future__ import annotations

import os
from dataclasses import dataclass, field
from typing import List


# A small, liquid default universe. Swap freely or pass your own to the pipeline.
DEFAULT_UNIVERSE: List[str] = [
    "AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "TSLA",
    "AMD", "NFLX", "JPM", "XOM", "WMT", "KO", "DIS", "BA",
]


@dataclass
class Settings:
    """Runtime knobs for a research run."""

    # --- Universe / data ---
    universe: List[str] = field(default_factory=lambda: list(DEFAULT_UNIVERSE))
    lookback_days: int = 252          # ~1 trading year of history
    max_candidates: int = 3           # how many tickers the Scanner promotes

    # --- LLM ---
    # Model used for the reasoning agents (Scanner rationale, Bull, Bear).
    llm_model: str = os.environ.get("TG_LLM_MODEL", "claude-sonnet-4-6")
    llm_max_tokens: int = 1200
    llm_temperature: float = 0.7      # a little spread so Bull/Bear feel distinct

    # --- Misc ---
    seed: int = 7                     # makes synthetic data + heuristics reproducible
    report_dir: str = "reports"

    @property
    def has_anthropic_key(self) -> bool:
        return bool(os.environ.get("ANTHROPIC_API_KEY"))
