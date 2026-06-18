"""Render a ResearchPacket into a readable Markdown report."""
from __future__ import annotations

import os
from datetime import datetime, timezone

from .models import ResearchPacket, TickerResearch


def _fmt_ts(iso: str) -> str:
    """Render an ISO timestamp as a friendly 'YYYY-MM-DD HH:MM UTC'."""
    try:
        dt = datetime.fromisoformat(iso).astimezone(timezone.utc)
        return dt.strftime("%Y-%m-%d %H:%M UTC")
    except (ValueError, TypeError):
        return f"{iso} UTC"


def _ticker_section(tr: TickerResearch) -> str:
    m, q, r = tr.metrics, tr.quant, tr.risk
    bull_pts = "\n".join(f"  - {p}" for p in tr.bull.key_points)
    bear_pts = "\n".join(f"  - {p}" for p in tr.bear.key_points)
    risk_notes = "\n".join(f"  - {n}" for n in r.downside_notes)
    flags = ", ".join(q.quality_flags) if q.quality_flags else "none"

    return f"""
## {tr.ticker} — {tr.pm_verdict}  (conviction {tr.conviction:.0%})

**Scanner ({tr.scanner.score:.0f}/100):** {tr.scanner.reason}

**Price metrics**
{m.as_bullets()}

**Quant — does the math**
{q.summary}
_{q.fair_value_note}_
Quality flags: {flags}

**Risk — measures downside** (risk {r.risk_score:.0f}/100)
{risk_notes}
  - **Sizing:** {r.position_sizing_hint}

**Bull case**
> {tr.bull.thesis}
{bull_pts}
  - _Biggest risk to this view:_ {tr.bull.biggest_risk_to_view}

**Bear case**
> {tr.bear.thesis}
{bear_pts}
  - _Biggest risk to this view:_ {tr.bear.biggest_risk_to_view}

---
"""


def render_markdown(packet: ResearchPacket) -> str:
    header = f"""# Trader Goblins — Daily Research Packet

*Generated {_fmt_ts(packet.created_at)}*
**Data:** {packet.data_source}  |  **Reasoning:** {packet.llm_source}
**Universe scanned:** {len(packet.universe)} tickers

## Summary

| Ticker | Verdict | Conviction | Scanner | Momentum | Risk |
|--------|---------|-----------:|--------:|---------:|-----:|
"""
    rows = ""
    for tr in packet.candidates:
        rows += (f"| **{tr.ticker}** | {tr.pm_verdict} | {tr.conviction:.0%} | "
                 f"{tr.scanner.score:.0f} | {tr.quant.momentum_score:.0f} | "
                 f"{tr.risk.risk_score:.0f} |\n")

    disclaimer = (
        "\n> ⚠️ **Not investment advice.** This is an experimental AI research "
        "prototype (Phase 1). Verdicts are mechanical syntheses of price-action "
        "metrics with no fundamentals. Do your own due diligence.\n"
    )

    body = "".join(_ticker_section(tr) for tr in packet.candidates)
    return header + rows + disclaimer + "\n" + body


def save_report(packet: ResearchPacket, report_dir: str = "reports") -> tuple[str, str]:
    """Write markdown + json. Returns (md_path, json_path)."""
    os.makedirs(report_dir, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
    md_path = os.path.join(report_dir, f"research_{stamp}.md")
    json_path = os.path.join(report_dir, f"research_{stamp}.json")
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(render_markdown(packet))
    with open(json_path, "w", encoding="utf-8") as f:
        f.write(packet.to_json())
    return md_path, json_path
