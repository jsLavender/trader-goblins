"""Exercise the real HTTP handler without starting market-data background jobs."""
import base64
import hashlib
import http.client
import threading
import unittest
from http.server import ThreadingHTTPServer
from unittest.mock import patch

from trader_goblins.web import crypto_auth, server


def basic(user="test-guest", password="local-test-password"):
    return "Basic " + base64.b64encode(f"{user}:{password}".encode()).decode()


class QuietHandler(server.Handler):
    public = True

    def log_message(self, *_args):
        pass


class CryptoAccessTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        salt = bytes.fromhex("0123456789abcdef0123456789abcdef")
        digest = hashlib.pbkdf2_hmac("sha256", b"local-test-password", salt, 600000)
        cls.verifier = f"pbkdf2_sha256$600000${salt.hex()}${digest.hex()}"
        cls.config = patch.multiple(crypto_auth, _USER="test-guest", _PASSWORD_HASH=cls.verifier)
        cls.config.start()
        cls.httpd = ThreadingHTTPServer(("127.0.0.1", 0), QuietHandler)
        cls.thread = threading.Thread(target=cls.httpd.serve_forever, daemon=True)
        cls.thread.start()

    @classmethod
    def tearDownClass(cls):
        cls.httpd.shutdown()
        cls.httpd.server_close()
        cls.thread.join()
        cls.config.stop()

    def request(self, path, auth=None, method="GET"):
        connection = http.client.HTTPConnection("127.0.0.1", self.httpd.server_port, timeout=10)
        try:
            connection.request(method, path, headers={"Authorization": auth} if auth else {})
            response = connection.getresponse()
            return response.status, dict(response.getheaders()), response.read()
        finally:
            connection.close()

    def test_all_game_files_require_login(self):
        for suffix in ("", "/", "/index.html", "/game.mjs", "/engine.mjs", "/puzzles.mjs", "/styles.css"):
            with self.subTest(suffix=suffix):
                status, headers, body = self.request("/games/crypto-search" + suffix)
                self.assertEqual(status, 401)
                self.assertIn('realm="Crypto Search"', headers["WWW-Authenticate"])
                self.assertEqual(headers["Cache-Control"], "private, no-store")
                self.assertNotIn(b"Toys in the Attic", body)

    def test_valid_login_serves_exact_files_without_caching(self):
        for filename in ("index.html", "game.mjs", "engine.mjs", "puzzles.mjs", "styles.css"):
            with self.subTest(filename=filename):
                status, headers, body = self.request("/games/crypto-search/" + filename, basic())
                self.assertEqual(status, 200)
                self.assertEqual(body, (server._CRYPTO_GAME_DIR / filename).read_bytes())
                self.assertEqual(headers["Cache-Control"], "private, no-store")
                self.assertEqual(headers["Vary"], "Authorization")

    def test_wrong_and_malformed_credentials_are_rejected(self):
        for auth in (basic(password="wrong"), basic(user="wrong"), basic(user="\u00e9"),
                     "Bearer token", "Basic !!!", "Basic /w==", "Basic dGVzdA=="):
            with self.subTest(auth=auth[:8]):
                status, _, _ = self.request("/games/crypto-search/puzzles.mjs", auth)
                self.assertEqual(status, 401)

    def test_alternate_paths_cannot_bypass_login(self):
        for path in ("/games//crypto-search/puzzles.mjs",
                     "/games/./crypto-search/puzzles.mjs",
                     "/games/wordle/../crypto-search/puzzles.mjs",
                     "/games/crypto-search/../crypto-search/puzzles.mjs",
                     "/games/crypto-search/puzzles.mjs?download=1",
                     "/games/crypto-search%2fpuzzles.mjs",
                     "/games/%63rypto-search/puzzles.mjs",
                     "/game/../games/crypto-search/puzzles.mjs"):
            with self.subTest(path=path):
                self.assertIn(self.request(path)[0], (401, 404))

    def test_head_requires_auth_and_never_returns_body(self):
        self.assertEqual(self.request("/games/crypto-search/", method="HEAD")[0], 401)
        status, headers, body = self.request("/games/crypto-search/", basic(), "HEAD")
        self.assertEqual(status, 200)
        self.assertGreater(int(headers["Content-Length"]), 0)
        self.assertEqual(body, b"")

    def test_public_site_stays_public(self):
        for path in ("/", "/research", "/games", "/games/", "/games/wordle/"):
            with self.subTest(path=path):
                self.assertEqual(self.request(path)[0], 200)

    def test_guest_credentials_do_not_unlock_owner_routes(self):
        with patch.multiple(server, _AUTH_ENABLED=True, _AUTH_USER="owner", _AUTH_PASS="owner-test-password"):
            for path in ("/dashboard", "/live", "/scan"):
                self.assertEqual(self.request(path, basic())[0], 401)
            self.assertEqual(self.request("/scan", basic("owner", "owner-test-password"))[0], 200)
            self.assertEqual(self.request("/games/crypto-search/", basic("owner", "owner-test-password"))[0], 401)

    def test_missing_or_malformed_configuration_fails_closed(self):
        for invalid in ("", "bad", self.verifier.replace("600000", "0"),
                        self.verifier.replace("600000", "999999999999")):
            with self.subTest(invalid=invalid[:5]), patch.object(crypto_auth, "_PASSWORD_HASH", invalid):
                self.assertEqual(self.request("/games/crypto-search/", basic())[0], 401)
        with patch.object(crypto_auth, "_USER", ""):
            self.assertEqual(self.request("/games/crypto-search/", basic())[0], 401)


if __name__ == "__main__":
    unittest.main()
