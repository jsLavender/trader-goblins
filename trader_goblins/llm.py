"""LLM abstraction.

The reasoning agents (Scanner rationale, Bull, Bear) call `LLMClient.complete`.
Two implementations:

  * AnthropicClient -> real Claude call (needs `anthropic` + ANTHROPIC_API_KEY)
  * HeuristicClient -> deterministic, offline templated reasoning so the whole
                       firm runs and produces a readable packet with no key

`get_llm()` auto-selects. Swapping in OpenAI/local models later = one new class.

All agents request JSON and we parse defensively, so a flaky model response
degrades gracefully instead of crashing the run.
"""
from __future__ import annotations

import json
import re
from typing import Optional


class LLMClient:
    name = "base"

    def complete(self, system: str, user: str, max_tokens: int = 1000,
                 temperature: float = 0.7) -> str:
        raise NotImplementedError


class AnthropicClient(LLMClient):
    name = "anthropic"

    def __init__(self, model: str) -> None:
        import anthropic  # lazy import
        self._client = anthropic.Anthropic()
        self.model = model

    def complete(self, system: str, user: str, max_tokens: int = 1000,
                 temperature: float = 0.7) -> str:
        msg = self._client.messages.create(
            model=self.model,
            max_tokens=max_tokens,
            temperature=temperature,
            system=system,
            messages=[{"role": "user", "content": user}],
        )
        return "".join(block.text for block in msg.content if block.type == "text")


class HeuristicClient(LLMClient):
    """No-API fallback. Produces structured, plausible reasoning from the numbers
    embedded in the prompt so the pipeline is fully runnable offline. It is NOT
    smart - it just makes the *shape* of the output real."""

    name = "heuristic"

    def complete(self, system: str, user: str, max_tokens: int = 1000,
                 temperature: float = 0.7) -> str:
        # The agents pass a machine-readable hint block we can echo back as JSON.
        # Look for a line like: HEURISTIC_JSON: {...}
        m = re.search(r"HEURISTIC_JSON:\s*(\{.*\})\s*$", user, re.DOTALL)
        if m:
            return m.group(1)
        return json.dumps({"text": "(heuristic) no structured hint provided."})


def get_llm(model: str, prefer_real: bool = True) -> tuple[LLMClient, bool]:
    """Return (client, is_real)."""
    if prefer_real:
        try:
            import os
            if os.environ.get("ANTHROPIC_API_KEY"):
                return AnthropicClient(model), True
        except Exception:
            pass
    return HeuristicClient(), False


def parse_json(text: str, fallback: dict) -> dict:
    """Pull the first JSON object out of an LLM response, tolerating prose/fences."""
    if not text:
        return dict(fallback)
    # strip code fences
    text = re.sub(r"```(?:json)?", "", text)
    try:
        return json.loads(text)
    except Exception:
        pass
    m = re.search(r"\{.*\}", text, re.DOTALL)
    if m:
        try:
            return json.loads(m.group(0))
        except Exception:
            pass
    return dict(fallback)
