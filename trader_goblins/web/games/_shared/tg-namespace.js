/* tg-namespace.js — isolate each co-hosted game's localStorage.
 *
 * All four games are served from ONE origin, so they share a single
 * localStorage. Without this, Wordle and Connections (both use the key
 * "gameState") clobber each other, and several games fight over "theme".
 *
 * Fix: transparently prefix every storage key with the game's path segment
 * (e.g. "gameState" -> "g:wordle:gameState"), EXCEPT keys starting with "tg_"
 * which are the shared arcade achievement/stats store and are GLOBAL on purpose.
 *
 * Must load BEFORE the game's own scripts. Patches Storage.prototype so it
 * covers getItem/setItem/removeItem regardless of how the bundle calls them.
 */
(function () {
  var m = location.pathname.match(/\/games\/([^\/]+)(?:\/|$)/);
  var game = m && m[1];
  if (!game || game === "_shared") return; // hub page / shared assets: don't namespace
  var P = "g:" + game + ":";
  var proto = Storage.prototype;
  var _get = proto.getItem, _set = proto.setItem, _rem = proto.removeItem;
  function map(k) {
    return (k != null && String(k).indexOf("tg_") === 0) ? String(k) : P + k;
  }
  proto.getItem = function (k) { return _get.call(this, map(k)); };
  proto.setItem = function (k, v) { return _set.call(this, map(k), v); };
  proto.removeItem = function (k) { return _rem.call(this, map(k)); };
})();
