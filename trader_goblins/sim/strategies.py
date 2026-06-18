"""Mechanical reference strategies (no LLM).

These exist to (a) validate the engine end-to-end and (b) populate the
leaderboard with reference lines before the trader goblins arrive. A strategy is
just: "given the world as of this date, what target weights do I want?" -- return
None to leave the book untouched (that's how buy-and-hold holds).

SPY is treated as a benchmark instrument, not a stock-pickable name: stock
strategies exclude it via `tradable()`, while the SPY holder trades only it.
"""
from __future__ import annotations

import random
import sqlite3
from typing import Dict, List, Optional

from ..db import prices as price_store


class Strategy:
    name = "strategy"

    def tradable(self, all_tickers: List[str]) -> List[str]:
        """Stock universe this strategy may hold (excludes the SPY benchmark)."""
        return [t for t in all_tickers if t != "SPY"]

    def decide(self, conn: sqlite3.Connection, run_id: int, account_id: int,
               as_of_date, step: int) -> Optional[Dict[str, float]]:
        raise NotImplementedError


class BuyAndHoldSPY(Strategy):
    """The yardstick: buy SPY on day one, hold forever."""
    name = "SPY-Holder"

    def tradable(self, all_tickers: List[str]) -> List[str]:
        return ["SPY"]

    def decide(self, conn, run_id, account_id, as_of_date, step):
        return {"SPY": 1.0} if step == 0 else None


class EqualWeightHold(Strategy):
    """Buy every stock equally on day one, hold. Naive diversification."""
    name = "EqualWeight"

    def decide(self, conn, run_id, account_id, as_of_date, step):
        if step != 0:
            return None
        ts = self.tradable(price_store.tickers_in_run(conn, run_id))
        if not ts:
            return None
        w = 1.0 / len(ts)
        return {t: w for t in ts}


class RandomTrader(Strategy):
    """Reconcentrates into N random stocks every `cadence` days. The 'is there
    any skill?' control -- seeded so a run is reproducible."""
    name = "RandomGoblin"

    def __init__(self, seed: int = 0, cadence: int = 5, n_positions: int = 3):
        self.cadence = cadence
        self.n_positions = n_positions
        self._rng = random.Random(seed)

    def decide(self, conn, run_id, account_id, as_of_date, step):
        if step % self.cadence != 0:
            return None
        ts = self.tradable(price_store.tickers_in_run(conn, run_id))
        if not ts:
            return None
        picks = self._rng.sample(ts, min(self.n_positions, len(ts)))
        w = 1.0 / len(picks)
        return {t: w for t in picks}
