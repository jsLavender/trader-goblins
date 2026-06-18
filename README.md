# Trader Goblins 👹📈

**An AI-driven investment-research platform — and an honest case study in
data-platform design, third-party integration, and reaching evidence-based
conclusions instead of the ones you were hoping for.**

Trader Goblins is a personal project that grew into a full data product: it
ingests market and fundamental data from four external sources into a
**point-in-time, leak-free data platform**, runs a roster of specialist "goblin"
analysts and traders over it, executes paper trades through a live brokerage API,
and surfaces everything in a self-updating dashboard. Along the way it was used to
run controlled research experiments on whether any of it actually predicts
returns — and to document, honestly, what does and doesn't.

> **The headline finding:** built rigorously and tested leak-free, the
> system's signals amount to a small, real, but already-commoditized factor tilt
> — not a market-beating edge. The value of the project is the *platform* and the
> *discipline*, not a secret money printer. That conclusion is the point.

---

## What this demonstrates (for a data-platform / data-product reader)

- **End-to-end data product ownership** — conceived, built, and shipped the whole
  chain: raw data → integration → modeling → decisions → execution → an end-user
  dashboard and automated daily jobs.
- **Integration breadth** — four external systems behind clean adapter
  interfaces: Yahoo Finance (prices), **SEC EDGAR / XBRL** (filings), **Alpaca**
  (brokerage, paper), and an LLM. Swapping a provider is a single new class.
- **Data governance & integrity** — the platform is engineered so that
  *temporal correctness is structural, not hoped-for* (see below). This is the
  data-quality instinct that separates a trustworthy data product from a demo.
- **Metrics-driven decisions** — defined the right measures (Information
  Coefficient, t-stats, multi-period robustness), ran controlled experiments, and
  let the evidence — including disconfirming evidence — drive the conclusion.
- **Prioritization & judgment** — made explicit build-vs-defer and, crucially,
  *stop* decisions: recognized when a result was already commoditized and not
  worth chasing further. Knowing when **not** to build is a product skill.

---

## Architecture

```
 External sources            Data platform (point-in-time, leak-free)         Product surface
 ────────────────            ─────────────────────────────────────────        ───────────────
 Yahoo Finance  ─┐                                                            ┌─ dashboard (Chart.js,
 SEC EDGAR/XBRL ─┼─► ingest ─► SQLite store ──► research / factor lab ──┐     │   dark-mode, run picker)
 Alpaca (paper) ─┤            versioned schema   (curators, IC tests)    ├────┤─ automated daily jobs
 LLM (Claude)   ─┘            as-of reads, cache  ──► paper trading ─────┘     └─ markdown / json reports
                                                      (backtest + live)
```

A run is a unit of work; almost everything is scoped to it so experiments stay
isolated and reproducible. The persistence layer (`trader_goblins/db/`) owns the
schema, versioning, and the point-in-time read API; the rest of the code reads
through it.

---

## The flagship engineering story: a leak-free, point-in-time data platform

The #1 integrity failure in financial backtesting is **lookahead bias** — letting
a model "see" data that wasn't actually available yet, which produces beautiful
results that evaporate in reality. Most projects try to *remember* not to do this.

This platform makes it **structurally impossible**:

- The price store only ever answers *as-of* queries: every read is bounded by a
  date, so a model can never touch a future row.
- Fundamentals come from **SEC EDGAR**, keyed on each figure's **filing date** —
  so "what was publicly known on date X" is a first-class query. (A live
  demonstration of why this matters: during one test, a ticker silently dropped
  out because the company had been acquired and delisted — exactly the
  survivorship bias that quietly inflates naive backtests.)
- Current-snapshot fundamentals (which *would* leak) are walled off to the
  forward/live path and never enter the historical backtest.

This is a data-governance design, not a trading trick — the same instinct you'd
apply to any system where leadership needs to *trust* the numbers.

---

## What it actually found (the honest part)

Using the factor lab (`trader_goblins/sim/factor_lab.py`, `combo_check.py`), tested
leak-free across ~200 equities and up to 10 years of point-in-time data:

- A single "value" signal looked like an edge over 2 years but **washed out to
  noise over 10** — a textbook lesson in regime-dependence and sample size.
- Tested properly, **value strengthens with horizon** (12-month Information
  Coefficient ≈ +0.03, statistically significant) and **size** was the strongest
  single factor (IC ≈ +0.05, t ≈ 4) — both consistent with decades of academic
  research.
- Naively averaging all factors produced a *negative* result; a deliberately
  **selected, oriented** combination of value + size + momentum, run **long-only**,
  beat the basket by ~6%/yr gross (t ≈ 5) — but a year-by-year breakdown showed it
  was **fragile**: carried by two strong years, with a losing year and a drawdown.

**Conclusion, stated plainly:** these are the most commoditized factor premia in
finance — buyable as low-cost ETFs with better implementation and none of the
overfitting risk. The project is a great way to *understand* them; it is not a
proprietary edge. Reaching that conclusion honestly — with controls, out-of-sample
tests, and a willingness to kill my own hypotheses — was the actual deliverable.

---

## Selected components

| Area | Module | What it does |
|------|--------|--------------|
| Persistence | `db/store.py`, `db/schema.sql` | versioned schema, as-of reads, FK-enforced |
| Integration | `data/edgar.py` | ticker→CIK, XBRL facts, filing-date point-in-time, rate-limited |
| Integration | `broker/alpaca.py` | paper-only brokerage client (hard-locked to the paper endpoint) |
| Research | `sim/factor_lab.py`, `sim/combo_check.py` | factor IC across horizons; robustness + long-only checks |
| Modeling | `curators/`, `sim/traders.py` | specialist analyst/trader agents; deterministic signals + LLM narrative |
| Evolution | `sim/evolution.py`, `db/genomes.py` | genetic selection of trader "genomes" with persisted lineage |
| Product | `dashboard.py`, `viz_export.py` | self-contained HTML dashboard (equity curves, leaderboard, live account) |
| Automation | `*_run.ps1` + scheduled tasks | daily forward predictions, tracking, and rebalances |

~60-module Python package; pandas / numpy / SQLite; no framework lock-in.

---

## Run it

```bash
python -m venv .venv && .venv/Scripts/python -m pip install -r requirements.txt

# Fully offline (synthetic data, no keys): a backtest of the trading firm
python -m trader_goblins.sim

# Leak-free factor research on real data (needs network; SEC asks for a UA in .env)
python -m trader_goblins.sim.factor_lab

# Interactive research server: type a ticker, get a deep-dive (price + curator
# leans + analyst/value + leak-free EDGAR fundamentals). Keyless, cached.
python -m trader_goblins.web        # -> http://127.0.0.1:8000/research
```

Optional `.env` keys enable the live paths: `ANTHROPIC_API_KEY` (LLM narratives),
`ALPACA_API_KEY_ID/SECRET` (paper trading), `TG_EDGAR_UA` (SEC contact string).
Everything degrades gracefully without them.

---

## Honest limitations

Single ~10-year window; today's index membership (residual survivorship bias);
gross of transaction costs; large-cap universe. Each is called out where it
appears in the code rather than glossed over — because a result you can't trust
isn't a result.

## ⚠️ Not investment advice

An experimental research project. Nothing it produces is a recommendation to buy
or sell anything.
