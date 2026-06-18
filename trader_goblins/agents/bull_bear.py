"""Bull -> argues for buying.  Bear -> argues against.

Both LLM agents. They receive the SAME evidence (metrics + quant + risk views)
and are asked to build the strongest honest case for their side, plus name the
single fact most damaging to their own view. The heuristic fallback generates a
templated-but-coherent case so the debate exists even offline.
"""
from __future__ import annotations

from ..models import Argument, PriceMetrics, QuantView, RiskView
from .base import Agent


def _evidence_block(m: PriceMetrics, q: QuantView, r: RiskView) -> str:
    return (
        f"TICKER: {m.ticker}\n\nPRICE METRICS:\n{m.as_bullets()}\n\n"
        f"QUANT VIEW: {q.summary}\nFair-value note: {q.fair_value_note}\n\n"
        f"RISK VIEW: risk {r.risk_score:.0f}/100, 1d 95% VaR {r.var_95_1d:.1%}.\n"
        f"Downside: {'; '.join(r.downside_notes)}\nSizing: {r.position_sizing_hint}"
    )


class BullAgent(Agent):
    def run(self, m: PriceMetrics, q: QuantView, r: RiskView) -> Argument:
        # Describe the trend honestly: above the 200-day but cooling off in the
        # short term is a pullback, not a "confirmed uptrend".
        if not m.above_200d:
            trend_phrase = "reclaiming its long-term trend"
        elif m.return_3m >= 0:
            trend_phrase = "in a confirmed uptrend"
        else:
            trend_phrase = "in an uptrend pausing for a pullback"
        heuristic = {
            "thesis": (
                f"{m.ticker} is {trend_phrase} with {m.return_3m:+.0%} over 3 months "
                f"and a {q.momentum_score:.0f}/100 momentum score; trend + liquidity "
                f"make it a credible long."
            ),
            "key_points": [
                f"3m momentum {m.return_3m:+.0%}, 12m {m.return_12m:+.0%}.",
                f"{'Above' if m.above_200d else 'Reclaiming'} the 200-day MA.",
                f"Risk-adjusted Sharpe-like {m.sharpe_like:.2f}.",
            ],
            "biggest_risk_to_view": (
                f"If momentum rolls over, vol of {m.annualized_vol:.0%} means the "
                f"drawdown could be fast."
            ),
        }
        system = (
            "You are the Bull analyst. Build the strongest HONEST case to BUY this "
            "stock from the evidence. No hype, cite numbers. Also state the single "
            "fact most damaging to your bullish view. Return JSON with keys: "
            "thesis (string), key_points (list of 3 strings), biggest_risk_to_view (string)."
        )
        out = self._ask_json(system, _evidence_block(m, q, r), heuristic,
                             max_tokens=700, temperature=0.7)
        return Argument(stance="bull",
                        thesis=out.get("thesis", heuristic["thesis"]),
                        key_points=out.get("key_points", heuristic["key_points"]),
                        biggest_risk_to_view=out.get("biggest_risk_to_view",
                                                     heuristic["biggest_risk_to_view"]))


class BearAgent(Agent):
    def run(self, m: PriceMetrics, q: QuantView, r: RiskView) -> Argument:
        # Pick the bear's strongest *real* concern rather than asserting weak
        # trend support on a stock that is plainly trending.
        if m.rsi_14 > 70:
            concern = "an overbought RSI"
            third_point = f"RSI {m.rsi_14:.0f} (stretched)."
        elif not m.above_200d:
            concern = "no trend support (below the 200-day)"
            third_point = "Below the 200-day MA -> weak trend support."
        else:
            concern = f"a stretched {m.return_12m:+.0%} 12m run prone to mean reversion"
            third_point = f"Annualized vol {m.annualized_vol:.0%} can erase gains quickly."
        heuristic = {
            "thesis": (
                f"{m.ticker} carries a {r.risk_score:.0f}/100 risk score with "
                f"{m.annualized_vol:.0%} vol and a {m.max_drawdown:.0%} historical "
                f"drawdown; {concern} skews the reward against new longs here."
            ),
            "key_points": [
                f"1-day 95% VaR {r.var_95_1d:.1%}; tail losses are real.",
                f"Max drawdown {m.max_drawdown:.0%} shows how deep it can fall.",
                third_point,
            ],
            "biggest_risk_to_view": (
                f"Strong {m.return_12m:+.0%} 12m trend could simply continue and "
                f"squeeze the short."
            ),
        }
        system = (
            "You are the Bear analyst. Build the strongest HONEST case AGAINST "
            "buying this stock from the evidence. Cite numbers, focus on risk and "
            "what could go wrong. Also state the single fact most damaging to your "
            "bearish view. Return JSON with keys: thesis (string), key_points "
            "(list of 3 strings), biggest_risk_to_view (string)."
        )
        out = self._ask_json(system, _evidence_block(m, q, r), heuristic,
                             max_tokens=700, temperature=0.7)
        return Argument(stance="bear",
                        thesis=out.get("thesis", heuristic["thesis"]),
                        key_points=out.get("key_points", heuristic["key_points"]),
                        biggest_risk_to_view=out.get("biggest_risk_to_view",
                                                     heuristic["biggest_risk_to_view"]))
