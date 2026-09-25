"""Server-side access for the shared Crypto Search prototype account."""
from __future__ import annotations

import base64
import binascii
import hashlib
import hmac
import os


# Store only a salted password verifier. Hosting environment overrides allow
# this prototype account to be rotated independently of the site's owner login.
_USER = os.environ.get("TG_CRYPTO_AUTH_USER", "JeffFort")
_PASSWORD_HASH = os.environ.get(
    "TG_CRYPTO_AUTH_HASH",
    "pbkdf2_sha256$600000$f8a0eb36aa546647dcc99af2d38f932e$"
    "0a92903d77dffb65e7f61623722fc2477074e5323bd1a40acbafd151be50a0d4",
)


def authorized(header: str) -> bool:
    """Check this account only; missing or malformed configuration fails closed."""
    scheme, _, encoded = header.partition(" ")
    if scheme.lower() != "basic" or len(encoded) > 4096 or not _USER:
        return False
    try:
        user, separator, password = base64.b64decode(
            encoded, validate=True
        ).decode("utf-8").partition(":")
        if not separator:
            return False
        algorithm, rounds, salt_hex, expected_hex = _PASSWORD_HASH.split("$")
        iterations = int(rounds)
        salt = bytes.fromhex(salt_hex)
        expected = bytes.fromhex(expected_hex)
        if (algorithm != "pbkdf2_sha256" or not 600000 <= iterations <= 2000000
                or len(salt) < 16 or len(expected) != 32):
            return False
        actual = hashlib.pbkdf2_hmac(
            "sha256", password.encode("utf-8"), salt, iterations
        )
        user_matches = hmac.compare_digest(user.encode("utf-8"), _USER.encode("utf-8"))
        password_matches = hmac.compare_digest(actual, expected)
        return user_matches and password_matches
    except (ValueError, UnicodeError, binascii.Error):
        return False
