-- Trader Goblins — persistence schema (Phase 2, step 1).
--
-- One SQLite file holds many *runs* (experiments/replays). Almost everything is
-- scoped to a run so worlds stay isolated and reproducible, and a run can be
-- inspected or deleted as a unit. Money is REAL (this is a paper sim, not real
-- accounting). Dates are TEXT 'YYYY-MM-DD'; timestamps are ISO-8601 UTC strings.
--
-- All statements are idempotent (IF NOT EXISTS) so init can re-run safely.
-- Schema evolution is tracked via PRAGMA user_version (set in store.init_db).

-- ── Identities ──────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS agents (
    id          INTEGER PRIMARY KEY,
    name        TEXT NOT NULL UNIQUE,
    tier        TEXT NOT NULL CHECK (tier IN ('curator', 'trader', 'baseline')),
    persona_json TEXT,                       -- bias / personality / strategy config
    created_at  TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS runs (
    id            INTEGER PRIMARY KEY,
    started_at    TEXT NOT NULL,
    mode          TEXT NOT NULL CHECK (mode IN ('synthetic', 'live')),
    seed          INTEGER,
    settings_json TEXT,
    note          TEXT
);

-- ── Market data (point-in-time) ─────────────────────────────────────────────
-- Run-scoped so each experiment's world is fixed. The replay driver must only
-- ever read rows with date <= as-of-date — that's how we make lookahead leakage
-- structurally impossible rather than a thing we remember not to do.

CREATE TABLE IF NOT EXISTS prices (
    run_id  INTEGER NOT NULL REFERENCES runs(id),
    ticker  TEXT NOT NULL,
    date    TEXT NOT NULL,                    -- 'YYYY-MM-DD'
    close   REAL NOT NULL,
    volume  REAL,
    source  TEXT,
    PRIMARY KEY (run_id, ticker, date)
);

-- ── LLM provenance ──────────────────────────────────────────────────────────
-- Full prompt + completion + params + seed for every model call. This is the
-- audit trail that makes a quirk *traceable* back to what the goblin actually
-- saw and said. Non-negotiable for the 'traceable quirks' success criterion.

CREATE TABLE IF NOT EXISTS llm_calls (
    id          INTEGER PRIMARY KEY,
    run_id      INTEGER NOT NULL REFERENCES runs(id),
    agent_id    INTEGER REFERENCES agents(id),
    as_of_date  TEXT,
    model       TEXT,
    params_json TEXT,
    prompt      TEXT,
    completion  TEXT,
    seed        INTEGER,
    created_at  TEXT NOT NULL
);

-- ── Tier 1: curator reports ─────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS reports (
    id          INTEGER PRIMARY KEY,
    run_id      INTEGER NOT NULL REFERENCES runs(id),
    agent_id    INTEGER NOT NULL REFERENCES agents(id),
    ticker      TEXT NOT NULL,
    as_of_date  TEXT NOT NULL,
    stance      TEXT,                         -- bull / bear / quant / momentum / macro
    facts_json  TEXT,                         -- the shared numeric truth snapshot
    narrative   TEXT,                         -- the (biased) write-up
    confidence  REAL,                         -- 0..1, how clear-cut the evidence is
    lean        REAL,                         -- -1..+1 directional view (sign fixed for Bull/Bear)
    llm_call_id INTEGER REFERENCES llm_calls(id),
    created_at  TEXT NOT NULL
);

-- ── Tier 2: trader accounts, decisions, execution, accounting ───────────────

CREATE TABLE IF NOT EXISTS accounts (
    id            INTEGER PRIMARY KEY,
    run_id        INTEGER NOT NULL REFERENCES runs(id),
    agent_id      INTEGER NOT NULL REFERENCES agents(id),
    starting_cash REAL NOT NULL,
    cash          REAL NOT NULL,
    UNIQUE (run_id, agent_id)
);

CREATE TABLE IF NOT EXISTS decisions (
    id              INTEGER PRIMARY KEY,
    run_id          INTEGER NOT NULL REFERENCES runs(id),
    account_id      INTEGER NOT NULL REFERENCES accounts(id),
    as_of_date      TEXT NOT NULL,
    ticker          TEXT NOT NULL,
    action          TEXT NOT NULL,            -- BUY / SELL / HOLD / TRIM / ADD ...
    target_weight   REAL,                     -- desired portfolio weight, 0..1
    rationale       TEXT,
    report_refs_json TEXT,                    -- which report ids informed this
    llm_call_id     INTEGER REFERENCES llm_calls(id),
    created_at      TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS fills (
    id          INTEGER PRIMARY KEY,
    decision_id INTEGER REFERENCES decisions(id),
    account_id  INTEGER NOT NULL REFERENCES accounts(id),
    ticker      TEXT NOT NULL,
    date        TEXT NOT NULL,
    side        TEXT NOT NULL CHECK (side IN ('buy', 'sell')),
    qty         REAL NOT NULL,
    price       REAL NOT NULL,
    commission  REAL NOT NULL DEFAULT 0,
    slippage    REAL NOT NULL DEFAULT 0
);

-- Current book. Derivable from fills, but kept as a snapshot for fast NAV marks.
CREATE TABLE IF NOT EXISTS positions (
    account_id INTEGER NOT NULL REFERENCES accounts(id),
    ticker     TEXT NOT NULL,
    qty        REAL NOT NULL,
    avg_cost   REAL NOT NULL,
    PRIMARY KEY (account_id, ticker)
);

-- Daily equity curve — the raw material for every scoreboard and the leaderboard.
CREATE TABLE IF NOT EXISTS nav_history (
    account_id      INTEGER NOT NULL REFERENCES accounts(id),
    date            TEXT NOT NULL,
    cash            REAL NOT NULL,
    positions_value REAL NOT NULL,
    equity          REAL NOT NULL,
    PRIMARY KEY (account_id, date)
);

-- ── Improvement spine ───────────────────────────────────────────────────────

-- Memory (primary spine): structured post-mark reflection re-injected next turn.
CREATE TABLE IF NOT EXISTS reflections (
    id                  INTEGER PRIMARY KEY,
    account_id          INTEGER NOT NULL REFERENCES accounts(id),
    as_of_date          TEXT NOT NULL,
    note                TEXT NOT NULL,
    trades_reviewed_json TEXT,
    created_at          TEXT NOT NULL
);

-- Reputation routing (secondary spine): how much a trader trusts each curator.
CREATE TABLE IF NOT EXISTS trust_weights (
    account_id       INTEGER NOT NULL REFERENCES accounts(id),
    curator_agent_id INTEGER NOT NULL REFERENCES agents(id),
    weight           REAL NOT NULL DEFAULT 1.0,
    updated_date     TEXT,
    PRIMARY KEY (account_id, curator_agent_id)
);

-- ── Arcade economy ──────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS token_ledger (
    id         INTEGER PRIMARY KEY,
    account_id INTEGER NOT NULL REFERENCES accounts(id),
    date       TEXT NOT NULL,
    delta      REAL NOT NULL,                 -- + earned, - spent
    reason     TEXT,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS wishlist (
    id            INTEGER PRIMARY KEY,
    account_id    INTEGER NOT NULL REFERENCES accounts(id),
    item          TEXT NOT NULL,
    cost          REAL NOT NULL,
    acquired      INTEGER NOT NULL DEFAULT 0,
    acquired_date TEXT
);

-- ── Forward predictions (live, not run-scoped) ──────────────────────────────
-- The firm's calls for going forward, with the price at the time of the call so
-- the tracker can mark them to future prices. NOT tied to a backtest run.

CREATE TABLE IF NOT EXISTS predictions (
    id            INTEGER PRIMARY KEY,
    created_at    TEXT NOT NULL,          -- full timestamp the call was made
    as_of_date    TEXT NOT NULL,          -- trading date of the call
    ticker        TEXT NOT NULL,
    verdict       TEXT NOT NULL,          -- BUY / ACCUMULATE / HOLD / AVOID
    combined      REAL,                   -- the firm's combined lean
    price_at_call REAL NOT NULL,
    target        REAL,                   -- analyst mean target at the call
    upside        REAL,                   -- implied upside at the call
    source        TEXT
);

-- ── Hall of champions (evolved genomes) ─────────────────────────────────────
-- Each evolved champion persona with its generation, fitness, and parentage, so
-- the gene pool has a memory and a champion can be promoted to trade live. Not
-- run-scoped — a genome outlives the backtests that bred it.

CREATE TABLE IF NOT EXISTS genomes (
    id          INTEGER PRIMARY KEY,
    generation  INTEGER NOT NULL,            -- 1, 2, 3, ... (gen 0 = hand-built cast)
    name        TEXT NOT NULL,               -- display handle, e.g. 'champ-g3'
    genome_json TEXT NOT NULL,               -- the persona genes
    fitness     REAL,                         -- (Calmar+Sortino)/2 across regimes
    parents     TEXT,                         -- lineage: which goblins bred it
    note        TEXT,
    created_at  TEXT NOT NULL
);

-- ── Indexes & views ─────────────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_reports_lookup   ON reports (run_id, ticker, as_of_date);
CREATE INDEX IF NOT EXISTS idx_decisions_lookup ON decisions (account_id, as_of_date);
CREATE INDEX IF NOT EXISTS idx_fills_lookup      ON fills (account_id, date);
CREATE INDEX IF NOT EXISTS idx_tokens_lookup     ON token_ledger (account_id, date);

-- Equity curve joined to readable agent names — the leaderboard's data source.
CREATE VIEW IF NOT EXISTS leaderboard AS
    SELECT n.date, ag.name, ag.tier, a.run_id, n.account_id, n.equity
    FROM nav_history n
    JOIN accounts a ON a.id = n.account_id
    JOIN agents   ag ON ag.id = a.agent_id;
