/* tg-arcade.js — shared achievement + stats engine across all arcade games.
 *
 * Runs on every game page (tracks play + scans for unlocks) and on the /games
 * hub (renders the trophy shelf + stats). All games share one origin, so the
 * store ("tg_ach", "tg_stats") is naturally global. tg-namespace.js keeps each
 * game's OWN keys separate but lets "tg_" keys through unprefixed, so we read a
 * game's state with its bare key name (e.g. "gameStats") and it resolves to that
 * game's namespaced value automatically.
 *
 * Themes: naps · only-child · two black cats (+ a few general & secret eggs).
 * Add inside-joke secret codes in SECRET_CODES below.
 */
(function () {
  "use strict";
  var LS = window.localStorage;
  function jget(k, d) { try { var v = LS.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function jset(k, v) { try { LS.setItem(k, JSON.stringify(v)); } catch (e) {} }

  var path = location.pathname;
  var gm = path.match(/\/games\/([^\/]+)(?:\/|$)/);
  var GAME = (gm && gm[1] && gm[1] !== "_shared") ? gm[1] : null;
  var ON_HUB = !GAME;
  var ALL_GAMES = ["spellingbee", "wordle", "connections", "crossword"];

  // ---------------------------------------------------------------- registry
  var R = [
    // naps
    { id: "nap5",  emoji: "😴", title: "Cat Nap",  theme: "naps", desc: "Wandered off mid-game for five minutes, then came back. Refreshed.", hint: "Step away from a game for a little while…" },
    { id: "nap20", emoji: "🛌", title: "Power Nap", theme: "naps", desc: "Twenty whole minutes away. That one counted.", hint: "A longer break, perhaps?" },
    { id: "nap60", emoji: "☕", title: "Just Resting My Eyes", theme: "naps", secret: true, desc: "Gone for over an hour. That was a real nap and we both know it." },
    { id: "night", emoji: "🌙", title: "Night Owl", theme: "naps", desc: "Played in the wee hours (midnight–5am).", hint: "Play very, very late." },
    { id: "slowx", emoji: "🐢", title: "No Rush", theme: "naps", desc: "Took over ten minutes on a crossword. Savored every clue.", hint: "Take your sweet time on a crossword." },
    // only child
    { id: "allfour_win", emoji: "🥇", title: "Mine, All Mine", theme: "only", desc: "Won at every game. Shared the spotlight with no one.", hint: "Win all four games." },
    { id: "nohelp", emoji: "👑", title: "Only-Child Energy", theme: "only", desc: "Solved Connections with zero mistakes — didn't need anybody's help.", hint: "Solve Connections flawlessly." },
    { id: "spotlight", emoji: "🎯", title: "Center of Attention", theme: "only", desc: "Found a Spelling Bee pangram — the word using the center letter and every other.", hint: "Find a Spelling Bee pangram." },
    { id: "lastword", emoji: "🗣️", title: "The Last Word", theme: "only", desc: "Finished an entire crossword. Always gets the last word.", hint: "Complete a crossword." },
    // two black cats
    { id: "darkcat", emoji: "🖤", title: "Black Cat", theme: "cats", desc: "Played in the dark. Very on brand.", hint: "Play in dark mode." },
    { id: "curiosity", emoji: "🐾", title: "Curiosity", theme: "cats", desc: "Opened all four games. Curiosity didn't kill this cat.", hint: "Peek into every game at least once." },
    { id: "twocats", emoji: "🐈‍⬛", title: "Two Black Cats", theme: "cats", desc: "Played two different games in one sitting. A matched pair.", hint: "Play two different games in one visit." },
    { id: "ninelives", emoji: "🐈", title: "Nine Lives", theme: "cats", desc: "Came back to the arcade nine times. Plenty of lives left.", hint: "Keep coming back…" },
    { id: "herding", emoji: "🧶", title: "Herding Cats", theme: "cats", desc: "Sorted sixteen stubborn words into four neat groups.", hint: "Solve a Connections puzzle." },
    { id: "purrfect", emoji: "😺", title: "Purrfect", theme: "cats", desc: "Cracked Wordle in three guesses or fewer.", hint: "Win Wordle in 3 or fewer." },
    // general
    { id: "busybee", emoji: "🐝", title: "Busy Bee", theme: "general", desc: "Found twenty-five words in a single Spelling Bee. Buzzing.", hint: "Find 25 words in one Spelling Bee." },
    { id: "collector", emoji: "🏆", title: "Goblin's Favorite", theme: "general", desc: "Earned ten achievements. The goblins approve.", hint: "Earn 10 achievements." },
    // secret eggs
    { id: "meow", emoji: "🐈‍⬛", title: "Speak", theme: "secret", secret: true, desc: "You typed the magic word. The cats heard you." },
    { id: "napword", emoji: "😼", title: "The Password Is Nap", theme: "secret", secret: true, desc: "A secret phrase, whispered. Naturally it was about napping." },
    { id: "konami", emoji: "🎮", title: "The Old Ways", theme: "secret", secret: true, desc: "↑ ↑ ↓ ↓ ← → ← → B A. Some things never die." },
    { id: "goblin", emoji: "👺", title: "Goblin Whisperer", theme: "secret", secret: true, desc: "You poked the goblin until it noticed you." },
    // personalized cat eggs — type the cat's name anywhere in a game
    { id: "susuwatari", emoji: "⚫", title: "Soot Sprite", theme: "secret", secret: true, desc: "You called Susuwatari by name — soot sprite incarnate. Best leave out some star candy as thanks." },
    { id: "skadi", emoji: "❄️", title: "Goddess of Winter", theme: "secret", secret: true, desc: "You summoned Skadi, Norse goddess of winter and the hunt. The huntress approves." },
    { id: "familiars", emoji: "🐈‍⬛", title: "The Familiars", theme: "secret", secret: true, desc: "Named both Susuwatari and Skadi. Your familiars are assembled (then they wander off)." }
  ];
  var BY_ID = {}; R.forEach(function (a) { BY_ID[a.id] = a; });

  // Typed magic words -> achievement id. Add inside-joke codes here (e.g. a
  // cat's name or her name) once we have them.
  var SECRET_CODES = { "meow": "meow", "catnap": "napword", "susuwatari": "susuwatari", "skadi": "skadi" };

  // ----------------------------------------------------------------- state
  var ACH = jget("tg_ach", {});
  function earned(id) { return !!ACH[id]; }
  function unlock(id) {
    if (ACH[id] || !BY_ID[id]) return;
    ACH[id] = Date.now();
    jset("tg_ach", ACH);
    showToast(BY_ID[id]);
    if ((id === "susuwatari" || id === "skadi") && ACH.susuwatari && ACH.skadi) unlock("familiars");
    if (Object.keys(ACH).length >= 10) unlock("collector");
    if (ON_HUB) renderShelf();
  }

  var STATS = jget("tg_stats", null) || { firstSeen: Date.now(), loads: 0, games: {}, days: [], latestHour: -1, longestAwayMs: 0, win: {} };
  function saveStats() { jset("tg_stats", STATS); }
  function checkAllFour() {
    var w = STATS.win || {};
    if (w.wordle && w.connections && w.crossword && w.bee) unlock("allfour_win");
  }

  // ----------------------------------------------------------------- toast
  function toastHost() {
    var h = document.getElementById("tg-toasts");
    if (!h) { h = document.createElement("div"); h.id = "tg-toasts"; document.body.appendChild(h); }
    return h;
  }
  function showToast(def) {
    if (!document.body) { window.addEventListener("DOMContentLoaded", function () { showToast(def); }); return; }
    var el = document.createElement("div");
    el.className = "tg-toast";
    el.innerHTML =
      '<div class="tg-emoji"></div><div class="tg-text">' +
      '<div class="tg-kicker">Achievement unlocked</div>' +
      '<div class="tg-title"></div><div class="tg-desc"></div></div>';
    el.querySelector(".tg-emoji").textContent = def.emoji;
    el.querySelector(".tg-title").textContent = def.title;
    el.querySelector(".tg-desc").textContent = def.desc;
    toastHost().appendChild(el);
    requestAnimationFrame(function () { el.classList.add("tg-in"); });
    setTimeout(function () {
      el.classList.remove("tg-in");
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 320);
    }, 5200);
  }

  // ------------------------------------------------------------ helpers
  function isDark() {
    try { return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches; }
    catch (e) { return false; }
  }
  function uniq(s) { var o = {}, r = []; (s || "").toLowerCase().split("").forEach(function (c) { if (/[a-z]/.test(c) && !o[c]) { o[c] = 1; r.push(c); } }); return r; }

  // --------------------------------------------------- per-game tracking
  function trackVisit() {
    STATS.loads++;
    var g = STATS.games[GAME] || (STATS.games[GAME] = { visits: 0, timeMs: 0 });
    g.visits++; g.last = Date.now();
    var today = new Date().toISOString().slice(0, 10);
    if (STATS.days.indexOf(today) < 0) STATS.days.push(today);
    var hr = new Date().getHours();
    if (hr > STATS.latestHour) STATS.latestHour = hr;
    saveStats();

    if (hr >= 0 && hr < 5) unlock("night");
    if (isDark()) unlock("darkcat");
    if (ALL_GAMES.every(function (n) { return STATS.games[n]; })) unlock("curiosity");
    if (STATS.loads >= 9) unlock("ninelives");

    // two-different-games-this-session (sessionStorage; "tg_" passes through unprefixed)
    try {
      var sg = JSON.parse(sessionStorage.getItem("tg_session_games") || "[]");
      if (sg.indexOf(GAME) < 0) sg.push(GAME);
      sessionStorage.setItem("tg_session_games", JSON.stringify(sg));
      if (sg.length >= 2) unlock("twocats");
    } catch (e) {}
  }

  function startNapWatch() {
    var hiddenAt = null, lastAct = Date.now();
    function away(ms) {
      if (ms > STATS.longestAwayMs) { STATS.longestAwayMs = ms; saveStats(); }
      if (ms >= 3600000) unlock("nap60");
      if (ms >= 1200000) unlock("nap20");
      if (ms >= 300000) unlock("nap5");
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) hiddenAt = Date.now();
      else if (hiddenAt) { away(Date.now() - hiddenAt); hiddenAt = null; lastAct = Date.now(); }
    });
    ["mousemove", "keydown", "pointerdown", "touchstart", "scroll"].forEach(function (ev) {
      window.addEventListener(ev, function () {
        var now = Date.now();
        if (now - lastAct > 300000) away(now - lastAct); // returned after sitting idle
        lastAct = now;
      }, { passive: true });
    });
    setInterval(function () {
      if (!document.hidden && STATS.games[GAME]) { STATS.games[GAME].timeMs += 15000; saveStats(); }
    }, 15000);
  }

  // --------------------------------------------------- game-state scanners
  function scanBee() {
    var letters = uniq(LS.getItem("availableLetters") || "");
    var found = jget("correctGuesses", []) || [];
    if (found.length >= 25) unlock("busybee");
    var pan = letters.length >= 7 && found.some(function (w) {
      w = (w || "").toLowerCase(); return letters.every(function (c) { return w.indexOf(c) >= 0; });
    });
    if (found.length >= 25 || pan) { STATS.win.bee = true; saveStats(); checkAllFour(); }
    if (pan) unlock("spotlight");
  }
  function scanWordle() {
    var stats = jget("gameStats", null), state = jget("gameState", null);
    var won = false, best = 99;
    if (stats && stats.winDistribution) {
      var wd = stats.winDistribution;
      for (var i = 0; i < wd.length; i++) if (wd[i] > 0) { won = true; if (i + 1 < best) best = i + 1; break; }
    }
    if (state && state.guesses && state.solution) {
      var g = state.guesses;
      if (g.length && String(g[g.length - 1]).toLowerCase() === String(state.solution).toLowerCase()) {
        won = true; if (g.length < best) best = g.length;
      }
    }
    if (won) { STATS.win.wordle = true; saveStats(); checkAllFour(); }
    if (best <= 3) unlock("purrfect");
  }
  function scanConnections() {
    var st = jget("gameState", null);
    if (st && st.solvedGameData && st.solvedGameData.length >= 4) {
      unlock("herding");
      STATS.win.connections = true; saveStats(); checkAllFour();
      var subs = (st.submittedGuesses || []).length;
      if (subs <= 4) unlock("nohelp");
    }
  }
  function startScanner() {
    var fn = GAME === "spellingbee" ? scanBee : GAME === "wordle" ? scanWordle : GAME === "connections" ? scanConnections : null;
    if (!fn) return;
    function safe() { try { fn(); } catch (e) {} }
    safe(); setInterval(safe, 3000);
  }

  function startCrosswordWatch() {
    if (GAME !== "crossword" || !window.MutationObserver) return;
    var done = false;
    function check() {
      if (done) return;
      var txt = (document.body && document.body.innerText) || "";
      if (/Crossword solved|Congratulations/i.test(txt)) {
        done = true;
        unlock("lastword");
        STATS.win.crossword = true; saveStats(); checkAllFour();
        var t = document.querySelector(".cw-button-timer");
        var s = parseTimer(t && t.textContent);
        if (s != null) { if (s >= 600) unlock("slowx"); }
      }
    }
    new MutationObserver(check).observe(document.body, { childList: true, subtree: true });
  }
  function parseTimer(s) {
    if (!s) return null; var m = String(s).match(/(\d+):(\d{2})/); return m ? (+m[1]) * 60 + (+m[2]) : null;
  }

  // ------------------------------------------------------ secret triggers
  function startSecretCodes() {
    var buf = "";
    window.addEventListener("keydown", function (e) {
      if (!e.key || e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-16);
      for (var code in SECRET_CODES) if (buf.indexOf(code) >= 0) unlock(SECRET_CODES[code]);
    });
  }
  function startKonami() {
    var K = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], i = 0;
    window.addEventListener("keydown", function (e) {
      if (e.keyCode === K[i]) { i++; if (i === K.length) { unlock("konami"); i = 0; } }
      else { i = (e.keyCode === K[0]) ? 1 : 0; }
    });
  }

  // ----------------------------------------------------------- hub shelf
  function fmtDuration(ms) {
    if (!ms) return "0m"; var m = Math.floor(ms / 60000); if (m < 60) return m + "m"; var h = Math.floor(m / 60); return h + "h " + (m % 60) + "m";
  }
  function renderShelf() {
    var host = document.getElementById("tg-trophies"); if (!host) return;
    var got = Object.keys(ACH).length, total = R.length;
    var stats =
      '<div class="tg-stat"><b>' + got + " / " + total + '</b><span>achievements</span></div>' +
      '<div class="tg-stat"><b>' + (STATS.days ? STATS.days.length : 0) + '</b><span>days played</span></div>' +
      '<div class="tg-stat"><b>' + (STATS.loads || 0) + '</b><span>games opened</span></div>' +
      '<div class="tg-stat"><b>' + fmtDuration(STATS.longestAwayMs) + '</b><span>longest nap</span></div>';
    var tiles = R.map(function (a) {
      var has = earned(a.id);
      if (has) {
        var d = new Date(ACH[a.id]);
        return '<div class="tg-trophy"><div class="tg-temoji">' + a.emoji + '</div><div>' +
          '<p class="tg-tname"></p><p class="tg-tdesc"></p>' +
          '<p class="tg-date">earned ' + d.toLocaleDateString() + '</p></div></div>';
      }
      var name = a.secret ? "???" : a.title;
      var sub = a.secret ? "A secret achievement." : (a.hint || "");
      return '<div class="tg-trophy locked"><div class="tg-temoji">' + (a.secret ? "🔒" : a.emoji) +
        '</div><div><p class="tg-tname">' + name + '</p><p class="tg-tdesc">' + sub + '</p></div></div>';
    }).join("");
    host.innerHTML =
      '<div class="tg-head"><h2>🏆 Trophies</h2><span class="tg-count">' + got + " of " + total + " unlocked</span></div>" +
      '<div class="tg-statsrow">' + stats + "</div>" +
      '<div class="tg-grid">' + tiles + "</div>";
    // fill earned text safely (avoid HTML injection from titles/descs)
    var idx = 0;
    R.forEach(function (a) {
      if (!earned(a.id)) return;
      var tile = host.querySelectorAll(".tg-trophy:not(.locked)")[idx++];
      if (tile) { tile.querySelector(".tg-tname").textContent = a.title; tile.querySelector(".tg-tdesc").textContent = a.desc; }
    });
  }
  function bindGoblin() {
    var n = 0, t = 0;
    var el = document.getElementById("tg-goblin") || document.querySelector("h1");
    if (!el) return;
    el.id = el.id || "tg-goblin";
    el.addEventListener("click", function () {
      var now = Date.now(); if (now - t > 1500) n = 0; t = now;
      if (++n >= 5) { unlock("goblin"); n = 0; }
    });
  }

  // ------------------------------------------------- Random / Previous bar
  function ymd(d) { return d.toISOString().slice(0, 10); }
  function shiftDay(base, delta) { var d = base ? new Date(base) : new Date(); d.setDate(d.getDate() + delta); return ymd(d); }
  function randPastDay() { var end = Date.now() - 86400000, start = end - 730 * 86400000; return ymd(new Date(start + Math.random() * (end - start))); }
  function navTo(qs) { location.href = location.pathname + qs; }
  function qparam(name) { return new URLSearchParams(location.search).get(name); }
  function mkbtn(bar, label, title, fn) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "tg-cbtn"; b.textContent = label; b.title = title;
    b.addEventListener("click", fn); bar.appendChild(b); return b;
  }
  function mountControls() {
    if (!document.body) return;
    var bar = document.createElement("div"); bar.id = "tg-controls";
    // Keyboard games (bottom on-screen keyboard) -> dock the bar at the top.
    if (GAME === "wordle") bar.className = "tg-top";
    else if (GAME === "spellingbee") bar.className = "tg-top tg-bee";
    var today = ymd(new Date());
    if (GAME === "connections") {
      var cur = parseInt(qparam("p") || "0", 10) || 0;
      mkbtn(bar, "◀", "Previous puzzle", function () { navTo("?p=" + (cur - 1)); });
      mkbtn(bar, "🎲 Random", "Random puzzle", function () { navTo("?p=" + Math.floor(Math.random() * 1000)); });
      mkbtn(bar, "▶", "Next puzzle", function () { navTo("?p=" + (cur + 1)); });
      document.body.appendChild(bar);
    } else if (GAME === "wordle" || GAME === "spellingbee") {
      var d = qparam("d");
      mkbtn(bar, "◀", "Previous day", function () { navTo("?d=" + shiftDay(d, -1)); });
      mkbtn(bar, "🎲 Random", "Random puzzle", function () { navTo("?d=" + randPastDay()); });
      mkbtn(bar, "▶", "Next day", function () { var nx = shiftDay(d, 1); navTo("?d=" + (nx > today ? today : nx)); });
      document.body.appendChild(bar);
    } else if (GAME === "crossword") {
      fetch("/games/crossword/puzzles/manifest.json").then(function (r) { return r.json(); }).then(function (list) {
        var files = list.map(function (x) { return "puzzles/" + x.file; });
        if (!files.length) return;
        var idx = files.indexOf(qparam("file")); if (idx < 0) idx = 0;
        mkbtn(bar, "◀", "Previous puzzle", function () { navTo("?file=" + files[(idx - 1 + files.length) % files.length]); });
        mkbtn(bar, "🎲 Random", "Random puzzle", function () { navTo("?file=" + files[Math.floor(Math.random() * files.length)]); });
        mkbtn(bar, "▶", "Next puzzle", function () { navTo("?file=" + files[(idx + 1) % files.length]); });
        document.body.appendChild(bar);
      }).catch(function () {});
    }
  }

  // ------------------------------------------------------------- wire up
  startSecretCodes(); startKonami();
  if (GAME) {
    trackVisit(); startNapWatch(); startScanner(); startCrosswordWatch(); mountControls();
  }
  if (ON_HUB) {
    function mount() { renderShelf(); bindGoblin(); }
    if (document.readyState !== "loading") mount();
    else window.addEventListener("DOMContentLoaded", mount);
  }
  // expose for manual testing
  window.TGArcade = { unlock: unlock, reset: function () { LS.removeItem("tg_ach"); LS.removeItem("tg_stats"); }, _registry: R };
})();
