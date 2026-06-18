"""Smoke test for the price-ingestion layer:  python -m trader_goblins.data

Ingests a small synthetic universe (+ a synthesized SPY benchmark) into a
throwaway database and exercises the point-in-time readers.
"""
from .ingest import _smoke

if __name__ == "__main__":
    _smoke()
