"""Evolutionary breeding chamber:  python -m trader_goblins.sim.evolution [generations] [seeds]

Each generation: evaluate every goblin's fitness ACROSS regimes (bull/bear/choppy)
-- so survival means consistency, not luck -- then cull the worst, breed hybrids
of the survivors (crossover + mutation), keep the champions (elitism), and toss in
a random immigrant for diversity. Fitness = Calmar + Sortino blend (drawdown-aware).

Runs entirely on the free deterministic engine (no LLM, no API key).
"""
from __future__ import annotations

import random
import sys
from statistics import mean
from typing import Dict, List

from ..data import build_run_prices
from ..data.market_data import SyntheticProvider
from ..db import store, tokens
from .evaluate import REGIMES
from .firm import run_firm
from .performance import metrics
from .traders import Persona, TraderGoblin, default_roster

CURATORS = ["Bull", "Bear", "Quant", "Momentum"]
TEMPERAMENTS = ["cut", "press", "press_hard", "double_down", "ignore"]
UNIVERSE = ["AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "TSLA", "JPM", "BAC",
            "JNJ", "UNH", "XOM", "CVX", "KO", "WMT", "HD"]
LOOKBACK = 150
POP = 10
NUM = {"max_weight": (0.12, 0.7), "base_gross": (0.4, 1.0), "max_gross": (1.0, 1.6),
       "min_confidence": (0.0, 0.5), "learning_rate": (0.0, 0.18)}


def _clip(x, lo, hi):
    return lo if x < lo else hi if x > hi else x


def random_genome(rng) -> Dict:
    return {
        "trust": {c: round(rng.uniform(0.0, 1.2), 2) for c in CURATORS},
        "max_positions": rng.randint(3, 12),
        "max_weight": round(rng.uniform(*NUM["max_weight"]), 2),
        "base_gross": round(rng.uniform(*NUM["base_gross"]), 2),
        "max_gross": round(rng.uniform(*NUM["max_gross"]), 2),
        "min_confidence": round(rng.uniform(*NUM["min_confidence"]), 2),
        "long_short": rng.random() < 0.6,
        "contrarian": rng.random() < 0.25,
        "temperament": rng.choice(TEMPERAMENTS),
        "learning_rate": round(rng.uniform(*NUM["learning_rate"]), 2),
    }


def genome_from_persona(p: Persona) -> Dict:
    return {"trust": {c: p.trust.get(c, 0.0) for c in CURATORS},
            "max_positions": p.max_positions, "max_weight": p.max_weight,
            "base_gross": p.base_gross, "max_gross": p.max_gross,
            "min_confidence": p.min_confidence, "long_short": p.long_short,
            "contrarian": p.contrarian, "temperament": p.temperament,
            "learning_rate": p.learning_rate}


def genome_to_goblin(g: Dict, name: str) -> TraderGoblin:
    return TraderGoblin(Persona(
        name=name, character="(evolved)", trust=dict(g["trust"]),
        contrarian=g["contrarian"], long_short=g["long_short"],
        max_positions=int(g["max_positions"]), max_weight=g["max_weight"],
        base_gross=g["base_gross"], max_gross=g["max_gross"],
        min_confidence=g["min_confidence"], learning_rate=g["learning_rate"],
        temperament=g["temperament"]))


def crossover(a: Dict, b: Dict, rng) -> Dict:
    child = {"trust": {c: round((a["trust"][c] + b["trust"][c]) / 2, 2) for c in CURATORS}}
    for k in NUM:
        child[k] = round((a[k] + b[k]) / 2, 3)
    child["max_positions"] = round((a["max_positions"] + b["max_positions"]) / 2)
    for k in ("long_short", "contrarian", "temperament"):
        child[k] = rng.choice([a[k], b[k]])
    return child


def mutate(g: Dict, rng, rate: float = 0.25) -> Dict:
    for c in CURATORS:
        if rng.random() < rate:
            g["trust"][c] = round(_clip(g["trust"][c] * (1 + rng.gauss(0, 0.25)), 0.0, 1.5), 2)
    for k, (lo, hi) in NUM.items():
        if rng.random() < rate:
            g[k] = round(_clip(g[k] * (1 + rng.gauss(0, 0.25)), lo, hi), 3)
    if rng.random() < rate:
        g["max_positions"] = int(_clip(g["max_positions"] + rng.choice([-2, -1, 1, 2]), 2, 14))
    if rng.random() < rate * 0.5:
        g["temperament"] = rng.choice(TEMPERAMENTS)
    if rng.random() < rate * 0.4:
        g["long_short"] = not g["long_short"]
    if rng.random() < rate * 0.3:
        g["contrarian"] = not g["contrarian"]
    return g


def _fitness_one(conn, run_id, account_id) -> float:
    eq = [r["equity"] for r in conn.execute(
        "SELECT equity FROM nav_history WHERE account_id=? ORDER BY date", (account_id,))]
    m = metrics(eq)
    return 0.5 * m["calmar"] + 0.5 * m["sortino"]


def evaluate(population: List[Dict], seeds: List[int]) -> List[float]:
    """Mean (Calmar+Sortino)/2 for each genome, averaged over regimes x seeds."""
    acc = [[] for _ in population]
    for regime, params in REGIMES.items():
        for seed in seeds:
            conn = store.init_db(":memory:")
            run_id = store.create_run(conn, mode="synthetic", seed=seed)
            build_run_prices(conn, run_id, SyntheticProvider(base_seed=seed, **params),
                             UNIVERSE, lookback_days=LOOKBACK)
            accounts = []
            for i, g in enumerate(population):
                gob = genome_to_goblin(g, f"g{i}")
                aid = store.get_or_create_agent(conn, f"g{i}", "trader")
                acct = store.create_account(conn, run_id, aid, 100_000.0)
                tokens.grant(conn, acct, "init", 100.0, "initial grant")
                accounts.append((acct, gob))
            run_firm(conn, run_id, accounts, UNIVERSE, verbose=False)
            for i, (acct, _) in enumerate(accounts):
                acc[i].append(_fitness_one(conn, run_id, acct))
            conn.close()
    return [mean(a) if a else 0.0 for a in acc]


def _summary(g: Dict) -> str:
    top = sorted(g["trust"].items(), key=lambda kv: -kv[1])[:2]
    style = ("L/S" if g["long_short"] else "long-only") + ("/contra" if g["contrarian"] else "")
    return (f"{style}, {g['max_positions']}pos, trusts "
            + "+".join(f"{c}{v:.1f}" for c, v in top)
            + f", {g['temperament']}, gross<={g['max_gross']:.1f}")


def evolve(generations: int, seeds: List[int], seed_genomes: List[Dict] = None) -> Dict:
    """Breed for `generations`. The starting population is the hand-built gen-0
    cast plus any saved champions (seed_genomes), filled out with random
    immigrants -- so each breeding run stands on the shoulders of the last."""
    rng = random.Random(42)
    seeded = [genome_from_persona(g.persona) for g in default_roster()]
    names = [g.name for g in default_roster()]
    for ch in (seed_genomes or []):
        seeded.append(dict(ch["genome"]))
        names.append(ch["name"])
    while len(seeded) < POP:                       # fill with immigrants
        seeded.append(random_genome(rng))
        names.append(f"rand{len(names)}")
    pop, names = seeded[:POP], names[:POP]          # cap at POP (keeps the freshest seeds)

    champion, champ_fit, champ_lineage = None, -1e9, "?"
    for gen in range(generations):
        fits = evaluate(pop, seeds)
        ranked = sorted(zip(fits, pop, names), key=lambda x: -x[0])
        best_f, best_g, best_n = ranked[0]
        if best_f > champ_fit:
            champion, champ_fit, champ_lineage = dict(best_g), best_f, best_n
        print(f"gen {gen}: best {best_f:+.2f} ({best_n})  | pop mean {mean(fits):+.2f}  "
              f"| worst {ranked[-1][0]:+.2f} ({ranked[-1][2]}) culled")

        if gen == generations - 1:
            break
        survivors = ranked[:POP // 2]                 # truncation selection
        new_pop = [dict(survivors[0][1]), dict(survivors[1][1])]   # elitism: keep top 2
        new_names = [survivors[0][2], survivors[1][2]]
        while len(new_pop) < POP - 1:                 # breed survivors
            (_, a, an), (_, b, bn) = rng.sample(survivors, 2)
            new_pop.append(mutate(crossover(a, b, rng), rng))
            new_names.append(f"{an[:3]}x{bn[:3]}")
        new_pop.append(random_genome(rng))            # immigrant for diversity
        new_names.append(f"imm{gen}")
        pop, names = new_pop, new_names

    return {"genome": champion, "fitness": champ_fit, "lineage": champ_lineage}


def main() -> None:
    generations = int(sys.argv[1]) if len(sys.argv) > 1 else 4
    seeds = list(range(int(sys.argv[2]))) if len(sys.argv) > 2 else [0]

    from ..db import genomes as genome_store
    conn = store.init_db("trader_goblins.db")
    hall = genome_store.list_champions(conn)
    if hall:
        print(f"hall of champions: {len(hall)} saved (up to gen {hall[-1]['generation']}); "
              "seeding the population with them + the gen-0 cast.")
    print(f"Evolving {POP} goblins over {generations} generations, "
          f"{len(REGIMES)} regimes x {len(seeds)} seed(s). Fitness = (Calmar+Sortino)/2.\n")

    result = evolve(generations, seeds, seed_genomes=hall)

    gen = genome_store.max_generation(conn) + 1
    gid = genome_store.save_champion(
        conn, result["genome"], result["fitness"], generation=gen,
        parents=result["lineage"], note=f"bred {generations} gens x {len(seeds)} seed(s)")
    conn.close()

    print(f"\nCHAMPION saved -> gen {gen} (id {gid}), fitness {result['fitness']:+.2f}, "
          f"from {result['lineage']}")
    print(f"  {_summary(result['genome'])}")
    print(f"  promote it to the live paper account with:")
    print(f"    python -m trader_goblins.sim.live_paper --champion --submit   (during market hours)")


if __name__ == "__main__":
    main()
