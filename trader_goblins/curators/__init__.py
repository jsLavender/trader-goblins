"""Tier 1 curator goblins: biased lenses that spin a shared fact substrate."""
from .lenses import Bull, Bear, Macro, Momentum, Quant
from .pipeline import run_curators_for_date

__all__ = [
    "Quant",
    "Bull",
    "Bear",
    "Momentum",
    "Macro",
    "run_curators_for_date",
]
