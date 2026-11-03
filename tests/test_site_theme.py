from pathlib import Path
from trader_goblins.web.theme import apply_theme

WEB = Path(__file__).resolve().parents[1] / 'trader_goblins/web'

def test_pages_share_one_navigation_and_keep_scripts():
    for route, filename in [('/', 'resume.html'), ('/research', 'research.html'),
                            ('/games', 'games.html'), ('/office', 'office_published.html'),
                            ('/board', 'board_published.html'), ('/scan', 'scan.html')]:
        original = (WEB / filename).read_bytes()
        themed = apply_theme(original, route)
        assert themed.count(b'class="jl-nav"') == 1, route
        assert themed.count(b'<script') == original.count(b'<script'), route
        assert b'site-theme.css' in themed
        assert apply_theme(themed, route) == themed

def test_game_shell_preserves_bundle_and_does_not_insert_full_navigation():
    original = (WEB / 'games/wordle/index.html').read_bytes()
    themed = apply_theme(original, '/games/wordle/')
    assert b'data-jl-theme="game"' in themed
    assert b'class="jl-nav"' not in themed
    assert b'main.36b9a845.js' in themed

def test_signin_fragment_gets_theme_without_changing_message():
    themed = apply_theme(b'<body><p>This area needs a username and password.</p></body>', '/dashboard')
    assert b'site-theme.css' in themed
    assert b'This area needs a username and password.' in themed
