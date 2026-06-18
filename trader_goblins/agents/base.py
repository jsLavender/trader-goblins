"""Shared agent scaffolding.

An Agent has a name, a role description, and access to the shared LLM client.
Reasoning agents build a prompt that ALWAYS embeds a HEURISTIC_JSON hint, so the
offline HeuristicClient can echo a sensible structured answer while the real
Claude client ignores the hint and reasons properly.
"""
from __future__ import annotations

import json
from dataclasses import dataclass

from ..llm import LLMClient, parse_json


@dataclass
class Agent:
    name: str
    role: str
    llm: LLMClient

    def _ask_json(self, system: str, user: str, heuristic: dict,
                  max_tokens: int = 1000, temperature: float = 0.7) -> dict:
        """Ask the LLM for JSON, embedding a heuristic fallback the offline
        client can echo. Always returns a dict."""
        user_with_hint = (
            user
            + "\n\nRespond ONLY with a JSON object matching the requested schema."
            + "\n\nHEURISTIC_JSON: " + json.dumps(heuristic)
        )
        raw = self.llm.complete(system, user_with_hint,
                                max_tokens=max_tokens, temperature=temperature)
        return parse_json(raw, heuristic)
