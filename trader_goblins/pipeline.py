"""The Phase 1 pipeline:

    Market Data -> Scanner -> (Quant, Risk) -> (Bull, Bear) -> PM verdict
                -> Research Packet

The PM verdict is a deterministic synthesis of the specialist views (momentum vs
risk, tempered by the debate). It is intentionally simple and explainable -- the
goal of Phase 1 is coherence, not cleverness.
"""
from __future__ import annotations

from typing import Dict, List, Optional

import pandas as pd

from .agents import BearAgent, BullAgent, QuantAgent, RiskAgent, ScannerAgent
from .config import Settings
from .data import fetch_universe, get_provider
from .llm import get_llm
from .metrics import compute_metrics
from .models import PriceMetrics, ResearchPacket, TickerResearch


def _pm_verdict(quant_momentum: float, risk_score: float) -> tuple[str, float]:
    """Blend momentum (good) and risk (bad) into a verdict + conviction 0-1."""
    # net in [-100, 100] roughly
    net = quant_momentum - risk_score
    conviction = round(min(1.0, abs(net) / 60.0), 2)
    if net >= 25:
        verdict = "BUY"
    elif net >= 5:
        verdict = "ACCUMULATE"
    elif net > -15:
        verdict = "HOLD / WATCH"
    else:
        verdict = "AVOID"
    return verdict, conviction


def run_pipeline(settings: Optional[Settings] = None,
                 prefer_real_data: bool = True,
                 prefer_real_llm: bool = True,
                 verbose: bool = True) -> ResearchPacket:
    settings = settings or Settings()

    provider, real_data = get_provider(prefer_real_data, base_seed=settings.seed)
    llm, real_llm = get_llm(settings.llm_model, prefer_real_llm)

    if verbose:
        print(f"[firm] data source : {provider.name} ({'live' if real_data else 'OFFLINE/synthetic'})")
        print(f"[firm] llm source  : {llm.name} ({'live' if real_llm else 'OFFLINE/heuristic'})")
        print(f"[firm] universe    : {len(settings.universe)} tickers, "
              f"{settings.lookback_days}d lookback\n")

    # 1. Market data
    histories: Dict[str, pd.DataFrame] = fetch_universe(
        provider, settings.universe, settings.lookback_days)
    metrics: Dict[str, PriceMetrics] = {
        t: compute_metrics(t, df) for t, df in histories.items()
    }
    if verbose:
        print(f"[data] loaded {len(metrics)} tickers")

    # 2. Scanner promotes candidates
    scanner = ScannerAgent("Scanner", "finds interesting stocks", llm)
    picks = scanner.run(metrics, settings.max_candidates)
    if verbose:
        print(f"[scanner] promoted: {', '.join(p.ticker for p in picks)}\n")

    quant = QuantAgent("Quant", "does the math", llm)
    risk = RiskAgent("Risk", "measures downside", llm)
    bull = BullAgent("Bull", "argues for buying", llm)
    bear = BearAgent("Bear", "argues against buying", llm)

    research: List[TickerResearch] = []
    for pick in picks:
        m = metrics[pick.ticker]
        df = histories[pick.ticker]
        if verbose:
            print(f"[firm] researching {pick.ticker} ...")

        q = quant.run(m)
        r = risk.run(m, df)
        b_bull = bull.run(m, q, r)
        b_bear = bear.run(m, q, r)
        verdict, conviction = _pm_verdict(q.momentum_score, r.risk_score)

        research.append(TickerResearch(
            ticker=pick.ticker, metrics=m, scanner=pick, quant=q, risk=r,
            bull=b_bull, bear=b_bear, pm_verdict=verdict, conviction=conviction))

    packet = ResearchPacket(
        universe=settings.universe,
        # provider.name is already "synthetic"/"heuristic" when offline, so only
        # tag the live case to avoid redundant labels like "synthetic (synthetic)".
        data_source=f"{provider.name} (live)" if real_data else provider.name,
        llm_source=f"{llm.name} (live)" if real_llm else llm.name,
        candidates=research,
    )
    if verbose:
        print("\n[firm] research packet complete.")
    return packet
