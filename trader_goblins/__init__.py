"""Trader Goblins — a simulated AI investment research firm (Phase 1)."""
import os as _os
from pathlib import Path as _Path


def _load_dotenv() -> None:
    """Load KEY=VALUE lines from a project-root .env into the environment (without
    overwriting already-set vars). Dependency-free; lets you keep ANTHROPIC_API_KEY
    in a gitignored .env instead of a system env var."""
    env = _Path(__file__).resolve().parent.parent / ".env"
    if not env.exists():
        return
    for line in env.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, val = line.partition("=")
        _os.environ.setdefault(key.strip(), val.strip().strip('"').strip("'"))


_load_dotenv()

from .config import Settings, DEFAULT_UNIVERSE
from .pipeline import run_pipeline
from .report import render_markdown, save_report

__version__ = "0.1.0"

__all__ = [
    "Settings",
    "DEFAULT_UNIVERSE",
    "run_pipeline",
    "render_markdown",
    "save_report",
]
