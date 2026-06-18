"""Paper-trading simulation: accounting engine, strategies, replay driver."""
from . import engine, replay, strategies
from .replay import final_standings, run_replay
from .strategies import BuyAndHoldSPY, EqualWeightHold, RandomTrader, Strategy

__all__ = [
    "engine",
    "replay",
    "strategies",
    "run_replay",
    "final_standings",
    "Strategy",
    "BuyAndHoldSPY",
    "EqualWeightHold",
    "RandomTrader",
]
