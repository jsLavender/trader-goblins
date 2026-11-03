"""Shared presentation applied at response time, including regenerated reports."""
import re
from urllib.parse import urlsplit

ASSET = '/games/_shared/site-theme.css?v=20261103'

def apply_theme(data: bytes, path: str) -> bytes:
    page = data.decode('utf-8')
    if 'data-jl-theme=' in page:
        return data
    route = urlsplit(path).path.rstrip('/') or '/'
    # Crypto Search also runs on a separately authenticated Cloudflare Worker.
    # Its own stylesheet carries the palette, keeping both deployments identical.
    if route.startswith('/games/crypto-search'):
        return data
    game = route.startswith(('/games/', '/game/')) or route == '/game'
    kind = 'home' if route == '/' else 'game' if game else 'page'
    # The shared theme supplies a dark palette before first paint; game state
    # and localStorage remain owned by each game.
    if not re.search(r'<html\b', page, re.I):
        page = '<html><head><meta charset="utf-8"></head>' + page + '</html>'
    game_name = next((name for name in ('spellingbee', 'crossword', 'connections', 'wordle', 'gauntlet', 'frenzy', 'crypto-search') if route.startswith('/games/' + name)), '')
    page = re.sub(r'<html\b', f'<html data-jl-theme="{kind}" data-jl-game="{game_name}"', page, count=1, flags=re.I)
    link = f'<link rel="stylesheet" href="{ASSET}">'
    page = re.sub(r'</head>', link + '</head>', page, count=1, flags=re.I)
    if not game:
        links = [('/', 'Home'), ('/research', 'Research'), ('/games', 'Games'),
                 ('/board', 'Board'), ('/office', 'Office'), ('/scan', 'Scanner')]
        nav = '<nav class="jl-nav" aria-label="Main navigation"><a class="jl-brand" href="/"><span class="jl-mark" aria-hidden="true">JL</span>John Lavender</a><div class="jl-links">'
        for href, label in links:
            active = ' aria-current="page"' if href == route else ''
            nav += f'<a href="{href}"{active}>{label}</a>'
        nav += '</div></nav>'
        page = re.sub(r'<header class="topnav">.*?</header>', nav, page, count=1, flags=re.S | re.I) if kind == 'home' else page
        if kind == 'home' and 'class="jl-nav"' in page:
            return page.encode('utf-8')
        page, count = re.subn(r'<nav\b[^>]*class=["\'][^"\']*\b(?:topnav|tg-nav)\b[^"\']*["\'][^>]*>.*?</nav>', nav, page, count=1, flags=re.S | re.I)
        if not count:
            page = re.sub(r'(<body\b[^>]*>)', lambda m: m[1] + nav, page, count=1, flags=re.I)
    return page.encode('utf-8')
