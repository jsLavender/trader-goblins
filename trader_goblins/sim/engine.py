"""Paper-trading accounting engine (long AND short).

Given a target portfolio (signed weights -- negative = short), reconciles the
book via costed fills, then marks to market into nav_history. Strategies decide
*what* to hold; this module just keeps the books honestly and identically.

Rules:
  * Long or short. A trade that raises cash (sell long / open short) executes
    before one that uses cash (buy / cover). Gross/net exposure is bounded by the
    strategy (the engine trusts the target); shorts have unbounded risk so that
    limit lives in the trader, not here.
  * Costs: commission + half-spread + size-based impact on every fill, plus a
    daily borrow fee on short notional (charged at each mark).
  * Prices come from the point-in-time store, so nothing sees the future.
"""
from __future__ import annotations

import sqlite3
from dataclasses import dataclass
from typing import Dict, List, Optional

import pandas as pd

from ..db import prices as price_store

_DUST = 1.0


@dataclass
class CostModel:
    commission_bps: float = 1.0        # fee on notional
    half_spread_bps: float = 3.0       # cross half the bid-ask
    impact_coef_bps: float = 50.0      # bps of impact at 100% of ADV
    borrow_bps_annual: float = 50.0    # cost to borrow shorted shares, per year


DEFAULT_COSTS = CostModel()


def _d(value) -> str:
    return pd.Timestamp(value).strftime("%Y-%m-%d")


def _load_positions(conn, account_id) -> Dict[str, List[float]]:
    return {r["ticker"]: [r["qty"], r["avg_cost"]] for r in conn.execute(
        "SELECT ticker, qty, avg_cost FROM positions WHERE account_id = ?",
        (account_id,))}


def _save_positions(conn, account_id, pos) -> None:
    conn.execute("DELETE FROM positions WHERE account_id = ?", (account_id,))
    conn.executemany(
        "INSERT INTO positions (account_id, ticker, qty, avg_cost) VALUES (?, ?, ?, ?)",
        [(account_id, t, q, a) for t, (q, a) in pos.items()])


def _cash(conn, account_id) -> float:
    return float(conn.execute(
        "SELECT cash FROM accounts WHERE id = ?", (account_id,)).fetchone()["cash"])


def equity(conn, run_id, account_id, as_of_date) -> float:
    cash = _cash(conn, account_id)
    pos = _load_positions(conn, account_id)
    if not pos:
        return cash
    px = price_store.prices_asof(conn, run_id, as_of_date, list(pos))
    return cash + sum(q * px[t] for t, (q, _) in pos.items() if t in px)


def _newpos(cur, delta: float, price: float):
    """Apply a signed delta to a (possibly short) position -> [qty, avg_cost] or
    None if flat. avg_cost is informational (P&L is mark-to-market)."""
    cur_qty, avg = cur or [0.0, 0.0]
    new_qty = cur_qty + delta
    if abs(new_qty) < 1e-9:
        return None
    same_dir_add = (cur_qty >= 0 and delta > 0) or (cur_qty <= 0 and delta < 0)
    crossed = (cur_qty > 0) != (new_qty > 0)
    if same_dir_add and new_qty != 0:
        avg = (abs(cur_qty) * avg + abs(delta) * price) / abs(new_qty)
    elif crossed:
        avg = price
    return [new_qty, avg]


def _record_fill(conn, account_id, ticker, side, qty, price, commission,
                 slippage, decision_id, date) -> None:
    conn.execute(
        "INSERT INTO fills (decision_id, account_id, ticker, date, side, qty, "
        "price, commission, slippage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        (decision_id, account_id, ticker, date, side, qty, price, commission, slippage))


def rebalance_to(conn: sqlite3.Connection, run_id: int, account_id: int,
                 target_weights: Dict[str, float], as_of_date,
                 decision_id: Optional[int] = None,
                 costs: Optional[CostModel] = None) -> None:
    """Trade toward `target_weights` (signed fractions of equity) at as-of prices.
    Tickers absent from the target are closed out."""
    costs = costs or DEFAULT_COSTS
    date = _d(as_of_date)
    cash = _cash(conn, account_id)
    pos = _load_positions(conn, account_id)
    tickers = set(target_weights) | set(pos)
    if not tickers:
        return
    px = price_store.prices_asof(conn, run_id, as_of_date, list(tickers))
    eq = cash + sum(q * px[t] for t, (q, _) in pos.items() if t in px)
    comm = costs.commission_bps / 1e4

    orders = []
    for t in tickers:
        price = px.get(t)
        if not price or price <= 0:
            continue
        target_qty = eq * float(target_weights.get(t, 0.0)) / price
        delta = target_qty - pos.get(t, [0.0, 0.0])[0]
        if abs(delta * price) >= _DUST:
            orders.append((t, delta, price))
    orders.sort(key=lambda o: o[1])              # cash-raising trades (delta<0) first

    for t, delta, price in orders:
        adv = price_store.avg_dollar_volume(conn, run_id, t, as_of_date) or 1e12
        qty = abs(delta)
        pcost = (costs.half_spread_bps + costs.impact_coef_bps * (qty * price / adv)) / 1e4
        if delta > 0:                            # buy: open/add long, or cover short
            exec_price = price * (1 + pcost)
            notional = qty * exec_price
            commission = notional * comm
            cash -= notional + commission
            _record_fill(conn, account_id, t, "buy", qty, exec_price, commission,
                         qty * (exec_price - price), decision_id, date)
        else:                                    # sell: reduce long, or open/add short
            exec_price = price * (1 - pcost)
            notional = qty * exec_price
            commission = notional * comm
            cash += notional - commission
            _record_fill(conn, account_id, t, "sell", qty, exec_price, commission,
                         qty * (price - exec_price), decision_id, date)
        new = _newpos(pos.get(t), delta, exec_price)
        if new is None:
            pos.pop(t, None)
        else:
            pos[t] = new

    _save_positions(conn, account_id, pos)
    conn.execute("UPDATE accounts SET cash = ? WHERE id = ?", (cash, account_id))
    conn.commit()


def mark(conn: sqlite3.Connection, run_id: int, account_id: int, as_of_date,
         costs: Optional[CostModel] = None) -> float:
    """Charge daily borrow on shorts, then snapshot cash + positions value into
    nav_history. Returns equity. Positions value is signed (shorts subtract)."""
    costs = costs or DEFAULT_COSTS
    cash = _cash(conn, account_id)
    pos = _load_positions(conn, account_id)
    pv = 0.0
    if pos:
        px = price_store.prices_asof(conn, run_id, as_of_date, list(pos))
        pv = sum(q * px[t] for t, (q, _) in pos.items() if t in px)
        short_notional = sum(abs(q) * px[t] for t, (q, _) in pos.items()
                             if q < 0 and t in px)
        borrow = short_notional * costs.borrow_bps_annual / 1e4 / 252.0
        if borrow > 0:
            cash -= borrow
            conn.execute("UPDATE accounts SET cash = ? WHERE id = ?", (cash, account_id))
    eq = cash + pv
    conn.execute(
        "INSERT OR REPLACE INTO nav_history (account_id, date, cash, positions_value, equity) "
        "VALUES (?, ?, ?, ?, ?)", (account_id, _d(as_of_date), cash, pv, eq))
    conn.commit()
    return eq
