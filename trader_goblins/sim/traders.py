"""Tier 2 trader peers: LLM-driven reasoning, deterministic fallback, plus the
improvement spine (reputation + memory) and the commissioning desk (info-market).

decide():
  1. score every candidate as a TRUST-WEIGHTED blend of curator lean x confidence,
  2. COMMISSION deep-dives -- spend scarce tokens to buy sharper reads on the
     highest-conviction names (diminishing cost; Tally abstains = control),
  3. fold the deep-dives into the scores, then either ask the LLM for weights
     (key attached) or run the deterministic proxy, under the persona's risk caps.

The commissioning desk gives tokens a SINK. NOTE: in pure-synthetic (random-walk)
data there is no real alpha to buy, so deep-dives won't reliably lift returns
there -- the mechanic is correct and the spend/allocation is real, but its value
only shows on data with an actual signal (real markets, or an injected factor).

Personality is data: a Persona (character voice + trust + risk knobs + temperament
+ commissioning budget).
"""
from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, Optional, Tuple

from ..curators.base import clarity, momentum_read
from ..curators.lenses import MARKET_TICKER
from ..db import decisions as decision_store
from ..db import learning as trust_store
from ..db import prices as price_store
from ..db import reports as report_store
from ..db import tokens
from ..llm import parse_json
from ..metrics import compute_metrics
from .strategies import Strategy

DEEPDIVE_TRUST = 1.2          # weight a commissioned read carries in the blend


def _clip(x: float, lo: float, hi: float) -> float:
    return lo if x < lo else hi if x > hi else x


@dataclass
class Persona:
    name: str
    character: str
    trust: Dict[str, float]
    contrarian: bool = False
    use_macro: bool = True
    long_short: bool = False             # may take SHORT positions (negative weights)
    max_positions: int = 5
    max_weight: float = 0.4              # cap on |weight| per name
    base_gross: float = 1.0              # invested fraction (long-only personas)
    max_gross: float = 1.5               # sum of |weights| cap (long/short personas)
    min_confidence: float = 0.0
    rebalance_every: int = 5
    # improvement spine
    learning_rate: float = 0.0
    temperament: str = "ignore"
    reflect_every: int = 4
    perf_window: int = 21
    # commissioning desk
    commissions: bool = True
    max_dives: int = 2
    dive_cost: float = 10.0


def _temperament_mult(temperament: str, r: float) -> float:
    if temperament == "cut":
        return _clip(1.0 + (2.0 * r if r < 0 else 0.0), 0.4, 1.1)
    if temperament == "press":
        return _clip(1.0 + 1.0 * r, 0.7, 1.3)
    if temperament == "press_hard":
        return _clip(1.0 + 2.0 * r, 0.6, 1.5)
    if temperament == "double_down":
        return _clip(1.0 - 1.2 * r, 0.8, 1.4)
    return 1.0


class TraderGoblin(Strategy):
    def __init__(self, persona: Persona):
        self.persona = persona
        self.name = persona.name
        self.llm = None
        self.real_llm = False
        self.model = "heuristic"

    def attach_llm(self, llm, real_llm: bool, model: str) -> None:
        self.llm, self.real_llm, self.model = llm, real_llm, model

    # ── state helpers ──────────────────────────────────────────────────────────

    def _agent_id(self, conn, account_id) -> int:
        return conn.execute("SELECT agent_id FROM accounts WHERE id = ?",
                            (account_id,)).fetchone()["agent_id"]

    def _trust(self, conn, account_id, date) -> Dict[str, float]:
        tr = trust_store.get_trust(conn, account_id)
        if not tr:
            trust_store.seed_trust(conn, account_id, self.persona.trust, date)
            tr = dict(self.persona.trust)
        return tr

    def _trailing_return(self, conn, account_id, as_of_date) -> Optional[float]:
        rows = conn.execute(
            "SELECT equity FROM nav_history WHERE account_id = ? AND date <= ? "
            "ORDER BY date DESC LIMIT ?",
            (account_id, as_of_date, self.persona.perf_window + 1)).fetchall()
        if len(rows) < max(3, self.persona.perf_window // 2):
            return None
        recent, past = rows[0]["equity"], rows[-1]["equity"]
        return None if past <= 0 else recent / past - 1.0

    def _portfolio(self, conn, run_id, account_id, as_of_date):
        cash = conn.execute("SELECT cash FROM accounts WHERE id = ?",
                            (account_id,)).fetchone()["cash"]
        pos = conn.execute("SELECT ticker, qty FROM positions WHERE account_id = ?",
                           (account_id,)).fetchall()
        px = (price_store.prices_asof(conn, run_id, as_of_date, [p["ticker"] for p in pos])
              if pos else {})
        pv = sum(p["qty"] * px[p["ticker"]] for p in pos if p["ticker"] in px)
        eq = cash + pv
        if eq <= 0:
            return 1.0, {}
        holdings = {p["ticker"]: p["qty"] * px[p["ticker"]] / eq
                    for p in pos if p["ticker"] in px}
        return cash / eq, holdings

    @staticmethod
    def _regime_factor(macro_lean: float) -> float:
        return 1.0 if macro_lean > 0.2 else 0.6 if macro_lean < -0.2 else 0.85

    def _macro_lean(self, conn, run_id, as_of_date) -> float:
        rows = report_store.reports_asof(conn, run_id, MARKET_TICKER, as_of_date)
        return rows[0]["lean"] if rows else 0.0

    def _gather_candidates(self, conn, run_id, as_of_date) -> Dict[str, list]:
        out = {}
        for t in price_store.tickers_in_run(conn, run_id):
            if t == "SPY":
                continue
            bundle = report_store.reports_asof(conn, run_id, t, as_of_date)
            if bundle:
                out[t] = bundle
        return out

    def _score(self, bundle, trust, extra: Optional[Tuple[float, float]] = None) -> Optional[float]:
        s = w_sum = 0.0
        for rep in bundle:
            w = trust.get(rep["name"], 0.0)
            if w == 0.0 or rep["confidence"] < self.persona.min_confidence:
                continue
            s += w * rep["lean"] * rep["confidence"]
            w_sum += w
        if extra is not None:                                    # commissioned deep-dive
            dl, dc = extra
            s += DEEPDIVE_TRUST * dl * dc
            w_sum += DEEPDIVE_TRUST
        if w_sum == 0.0:
            return None
        score = s / w_sum
        return -score if self.persona.contrarian else score

    # ── commissioning desk ─────────────────────────────────────────────────────

    def _deep_dive(self, conn, run_id, ticker, as_of_date) -> Optional[Tuple[float, float]]:
        """A sharper, higher-confidence read bought with tokens: risk-adjusted
        trend, confidence boosted for the extra diligence."""
        df = price_store.history_asof(conn, run_id, ticker, as_of_date)
        if len(df) < 30:
            return None
        m = compute_metrics(ticker, df)
        mo = momentum_read(m)
        sharpe_sign = 1.0 if m.sharpe_like > 0 else -1.0
        lean = _clip(mo * (1.0 + 0.3 * sharpe_sign * min(1.0, abs(m.sharpe_like))), -1.0, 1.0)
        return lean, _clip(clarity(m) * 1.25, 0.1, 1.0)

    def _commission(self, conn, run_id, account_id, as_of_date, candidates,
                    base_scores) -> Dict[str, Tuple[float, float]]:
        """Spend tokens to deep-dive the strongest-conviction names. Diminishing
        cost makes the budget scarce, so WHICH names to dive is the skill."""
        if not self.persona.commissions or self.persona.max_dives <= 0:
            return {}
        balance = tokens.balance(conn, account_id)
        ranked = sorted(candidates, key=lambda t: -abs(base_scores.get(t) or 0.0))
        enhanced: Dict[str, Tuple[float, float]] = {}
        for i, t in enumerate(ranked[:self.persona.max_dives]):
            cost = self.persona.dive_cost * (1.0 + 0.5 * i)      # diminishing returns
            if balance < cost:
                break
            dd = self._deep_dive(conn, run_id, t, as_of_date)
            if dd is None:
                continue
            tokens.grant(conn, account_id, as_of_date, -cost, f"commission:{t}")
            balance -= cost
            enhanced[t] = dd
        return enhanced

    # ── decide ──────────────────────────────────────────────────────────────────

    def decide(self, conn, run_id, account_id, as_of_date, step):
        if step % self.persona.rebalance_every != 0:
            return None
        trust = self._trust(conn, account_id, as_of_date)
        candidates = self._gather_candidates(conn, run_id, as_of_date)
        base_scores = {t: self._score(b, trust) for t, b in candidates.items()}
        enhanced = self._commission(conn, run_id, account_id, as_of_date,
                                    candidates, base_scores)
        if self.real_llm and self.llm is not None:
            try:
                return self._decide_llm(conn, run_id, account_id, as_of_date,
                                        candidates, trust, enhanced)
            except Exception:
                pass
        return self._decide_heuristic(conn, run_id, account_id, as_of_date,
                                      candidates, trust, enhanced)

    def _decide_heuristic(self, conn, run_id, account_id, as_of_date, candidates,
                          trust, enhanced):
        scores = {}
        for t, bundle in candidates.items():
            sc = self._score(bundle, trust, extra=enhanced.get(t))
            if sc is not None:
                scores[t] = sc
        if not scores:
            return {}
        r = self._trailing_return(conn, account_id, as_of_date)
        risk_mult = 1.0 if r is None else _temperament_mult(self.persona.temperament, r)

        if self.persona.long_short:
            # hold the highest-conviction names by |score|, long OR short.
            picks = [(t, sc) for t, sc in
                     sorted(scores.items(), key=lambda kv: -abs(kv[1]))
                     if abs(sc) > 0.05][:self.persona.max_positions]
            if not picks:
                return {}
            # temperament scales exposure but can't breach the hard gross ceiling.
            gross = min(self.persona.base_gross * risk_mult, self.persona.max_gross)
            total = sum(abs(sc) for _, sc in picks)
            return {t: _clip((1.0 if sc > 0 else -1.0) * gross * abs(sc) / total,
                             -self.persona.max_weight, self.persona.max_weight)
                    for t, sc in picks}

        longs = sorted([(t, sc) for t, sc in scores.items() if sc > 0],
                       key=lambda x: -x[1])[:self.persona.max_positions]
        if not longs:
            return {}
        gross = self.persona.base_gross * risk_mult
        if self.persona.use_macro:
            gross *= self._regime_factor(self._macro_lean(conn, run_id, as_of_date))
        total = sum(sc for _, sc in longs)
        return {t: min(gross * sc / total, self.persona.max_weight) for t, sc in longs}

    # ── LLM path ──────────────────────────────────────────────────────────────

    def _system_prompt(self) -> str:
        p = self.persona
        side = (f"You may go LONG (positive weight) or SHORT (negative weight); keep "
                f"gross exposure (sum of |weights|) <= {p.max_gross:.0%}."
                if p.long_short else
                "You are long-only and may hold cash; total invested <= 100%.")
        return (
            f"You are {p.name}, a trader goblin. {p.character} You run a paper account. "
            f"{side} At most {p.max_positions} positions, at most {p.max_weight:.0%} in "
            f"any single name. Weigh the analysts by how much you trust them. Respond "
            f'with ONLY a JSON object: {{"targets":[{{"ticker":"AAA","weight":0.25}}],'
            f'"rationale":"one sentence"}} (negative weight = short). Empty targets = cash.')

    def _user_prompt(self, conn, run_id, account_id, as_of_date, candidates, trust,
                     enhanced) -> str:
        lines = [f"Date: {as_of_date}."]
        macro = report_store.reports_asof(conn, run_id, MARKET_TICKER, as_of_date)
        if macro:
            lines.append(f"Market regime: {macro[0]['narrative']}")
        cash_frac, holdings = self._portfolio(conn, run_id, account_id, as_of_date)
        lines.append("Your holdings: "
                     + (", ".join(f"{t} {w:.0%}" for t, w in holdings.items()) if holdings
                        else "none")
                     + f"; cash {cash_frac:.0%}.")
        r = self._trailing_return(conn, account_id, as_of_date)
        if r is not None:
            lines.append(f"Your trailing {self.persona.perf_window}d return: {r:+.1%} "
                         f"(your temperament: {self.persona.temperament}).")
        refl = conn.execute(
            "SELECT note FROM reflections WHERE account_id = ? AND as_of_date <= ? "
            "ORDER BY as_of_date DESC LIMIT 2", (account_id, as_of_date)).fetchall()
        if refl:
            lines.append("Your recent notes: " + " | ".join(x["note"] for x in refl))
        lines.append("Your trust in the analysts: "
                     + ", ".join(f"{k} {v:.2f}" for k, v in sorted(trust.items())))
        if enhanced:
            lines.append("Commissioned deep-dives (sharper reads you paid for): "
                         + ", ".join(f"{t} lean {dl:+.2f}/conf {dc:.2f}"
                                     for t, (dl, dc) in enhanced.items()))
        lines.append("\nCandidates (analyst lean/confidence + take):")
        for t, bundle in candidates.items():
            takes = "  ".join(f"{r['name']}({r['lean']:+.2f}/{r['confidence']:.2f}): "
                              f"{r['narrative']}" for r in bundle)
            lines.append(f"- {t}: {takes}")
        lines.append("\nChoose your target weights now as JSON.")
        return "\n".join(lines)

    def _constrain(self, targets, valid: set) -> Dict[str, float]:
        ws: Dict[str, float] = {}
        for item in targets or []:
            t = item.get("ticker") if isinstance(item, dict) else None
            if t not in valid:
                continue
            try:
                w = float(item.get("weight"))
            except (TypeError, ValueError):
                continue
            if w == 0 or (w < 0 and not self.persona.long_short):  # long-only drops shorts
                continue
            ws[t] = _clip(w, -self.persona.max_weight, self.persona.max_weight)
        ws = dict(sorted(ws.items(), key=lambda kv: -abs(kv[1]))[:self.persona.max_positions])
        gross = sum(abs(w) for w in ws.values())
        cap = self.persona.max_gross if self.persona.long_short else 1.0
        if gross > cap:
            ws = {t: w * cap / gross for t, w in ws.items()}
        return ws

    def _decide_llm(self, conn, run_id, account_id, as_of_date, candidates, trust, enhanced):
        system = self._system_prompt()
        user = self._user_prompt(conn, run_id, account_id, as_of_date, candidates,
                                 trust, enhanced)
        completion = self.llm.complete(system, user, max_tokens=700, temperature=0.7)
        llm_call_id = report_store.insert_llm_call(
            conn, run_id, self._agent_id(conn, account_id), as_of_date, self.model,
            {"max_tokens": 700, "temperature": 0.7}, f"{system}\n\n{user}", completion)
        parsed = parse_json(completion, {"_failed": True})
        if parsed.get("_failed"):
            return self._decide_heuristic(conn, run_id, account_id, as_of_date,
                                          candidates, trust, enhanced)
        weights = self._constrain(parsed.get("targets"), set(candidates))
        decision_store.insert_decision(conn, run_id, account_id, as_of_date,
                                       str(parsed.get("rationale", ""))[:500], llm_call_id)
        return weights

    # ── improvement spine ───────────────────────────────────────────────────────

    def learn(self, conn, run_id, account_id, as_of_date, prev_date, step) -> None:
        trust = self._trust(conn, account_id, as_of_date)
        if prev_date is not None and self.persona.learning_rate > 0:
            for name, reward in self._curator_rewards(conn, run_id, prev_date,
                                                      as_of_date).items():
                if name in trust:
                    new_w = _clip(trust[name] + self.persona.learning_rate * reward,
                                  0.05, 2.0)
                    trust_store.set_trust(conn, account_id, name, new_w, as_of_date)
        if step > 0 and (step // self.persona.rebalance_every) % self.persona.reflect_every == 0:
            self._reflect(conn, account_id, as_of_date)

    def _curator_rewards(self, conn, run_id, prev_date, as_of_date) -> Dict[str, float]:
        acc: Dict[str, list] = {}
        for t in (x for x in price_store.tickers_in_run(conn, run_id) if x != "SPY"):
            p0 = price_store.price_on_or_before(conn, run_id, t, prev_date)
            p1 = price_store.price_on_or_before(conn, run_id, t, as_of_date)
            if not p0 or not p1:
                continue
            fdir = 1 if p1 > p0 else -1 if p1 < p0 else 0
            for rep in report_store.reports_asof(conn, run_id, t, prev_date):
                ldir = 1 if rep["lean"] > 0 else -1 if rep["lean"] < 0 else 0
                conf = rep["confidence"]
                bucket = acc.setdefault(rep["name"], [0.0, 0.0])
                bucket[0] += ldir * fdir * conf
                bucket[1] += conf
        return {name: (num / den if den else 0.0) for name, (num, den) in acc.items()}

    def _reflect(self, conn, account_id, as_of_date) -> None:
        r = self._trailing_return(conn, account_id, as_of_date)
        mult = 1.0 if r is None else _temperament_mult(self.persona.temperament, r)
        trust = trust_store.get_trust(conn, account_id)
        top = max(trust, key=trust.get) if trust else "?"
        stance = "pressing" if mult > 1.05 else "de-risking" if mult < 0.95 else "steady"
        note = (f"{self.name}: trailing {('n/a' if r is None else format(r, '+.1%'))}; "
                f"{stance} (gross x{mult:.2f}); most-trusted {top} "
                f"({trust.get(top, 0.0):.2f}).")
        trust_store.insert_reflection(conn, account_id, as_of_date, note)


# ── the roster ────────────────────────────────────────────────────────────────

def default_roster(spine: bool = True) -> list:
    """The five locked peers. spine=False zeroes learning + temperament (the
    ablation arm: static traders, no improvement spine)."""
    roster = [
        TraderGoblin(Persona(
            name="Grik",
            character=("A brash momentum trader: you ride strength long and SHORT weakness, "
                       "lean on the Bull and Momentum goblins, press harder when winning."),
            trust={"Bull": 1.0, "Momentum": 1.0, "Quant": 0.4, "Bear": 0.1,
                   "Analyst": 0.5, "Value": 0.1},   # chases analyst upside, ignores cheapness
            long_short=True, max_positions=8, max_weight=0.25, max_gross=1.4,
            learning_rate=0.04, temperament="press", max_dives=2)),
        TraderGoblin(Persona(
            name="Mossback",
            character=("A contrarian: you buy what the crowd fears and short what it loves, "
                       "treat the Bear's warnings as signal, and double down when you're behind."),
            trust={"Bear": 1.0, "Quant": 0.5, "Momentum": 0.2, "Bull": 0.2,
                   "Analyst": 0.2, "Value": 0.6},   # leans on cheapness, fades crowd targets
            contrarian=True, long_short=True, max_positions=8, max_weight=0.25,
            max_gross=1.3, learning_rate=0.12, temperament="double_down", max_dives=2)),
        TraderGoblin(Persona(
            name="Tally",
            character=("A cold long-only quant: you trust only the Quant's hard facts, ignore "
                       "narrative and mood, and never let recent performance change your sizing."),
            trust={"Quant": 1.0}, use_macro=False,
            max_positions=10, max_weight=0.20, base_gross=0.9,
            learning_rate=0.0, temperament="ignore", commissions=False)),   # pure-price control: no teeth
        TraderGoblin(Persona(
            name="Snatch",
            character=("A reckless YOLO trader: a few big concentrated bets, long or short, "
                       "on your highest-conviction names, pressing hard when you're hot."),
            trust={"Bull": 0.8, "Momentum": 0.8, "Bear": 0.2,
                   "Analyst": 0.6, "Value": 0.1},   # YOLOs the biggest analyst upside
            long_short=True, max_positions=3, max_weight=0.5, max_gross=1.5,
            learning_rate=0.10, temperament="press_hard", max_dives=1)),
        TraderGoblin(Persona(
            name="Hoarder",
            character=("A cautious long-only capital-preserver: stay diversified, keep plenty "
                       "of cash, demand high conviction, cut risk fast the moment you lose."),
            trust={"Quant": 0.6, "Bear": 0.6, "Bull": 0.4, "Momentum": 0.4,
                   "Analyst": 0.3, "Value": 0.7},   # quality/value preserver
            max_positions=12, max_weight=0.12, base_gross=0.6, min_confidence=0.5,
            learning_rate=0.08, temperament="cut", max_dives=3)),
    ]
    if not spine:
        for g in roster:
            g.persona.learning_rate = 0.0
            g.persona.temperament = "ignore"
    return roster
