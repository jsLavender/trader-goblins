"""Regenerate a standalone HTML dashboard from the DB.

    python -m trader_goblins.dashboard [db_path] [run_id]   # -> reports/dashboard.html

Self-contained (Chart.js from CDN); open the file in any browser. Embeds EVERY
run so the in-page picker switches without re-running Python, plus the live
forward predict/track record and per-goblin progress. Dark-mode aware. An
optional run_id just preselects that run in the picker.
"""
from __future__ import annotations

import json
import os
import sys
import webbrowser

from .viz_export import export_all

COLORS = {"Grik": "#378ADD", "Mossback": "#D85A30", "Tally": "#7d8a99",
          "Snatch": "#D4537E", "Hoarder": "#1D9E75", "SPY-Holder": "#9aa0a6",
          "EqualWeight": "#b9b6ab", "RandomGoblin": "#BA7517"}

_TEMPLATE = r"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Trader Goblins dashboard</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
 :root{
  --bg:#faf9f5;--surface:#ffffff;--line:#e9e7df;--ink:#1f1e1b;--muted:#6b6a64;
  --faint:#9a988f;--pos:#1a7f4b;--neg:#c0392b;--accent:#534AB7;--chip:#f1efe8;}
 @media (prefers-color-scheme:dark){:root{
  --bg:#1a1916;--surface:#242320;--line:#34322d;--ink:#ecebe6;--muted:#a3a199;
  --faint:#6f6d65;--pos:#5dca8f;--neg:#e88;--accent:#AFA9EC;--chip:#2c2b27;}}
 *{box-sizing:border-box}
 body{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:var(--bg);
  color:var(--ink);max-width:1040px;margin:0 auto;padding:1.5rem 1.25rem 4rem;line-height:1.55}
 header{display:flex;flex-wrap:wrap;gap:.75rem 1rem;align-items:baseline;justify-content:space-between;
  border-bottom:1px solid var(--line);padding-bottom:.9rem;margin-bottom:1.2rem}
 h1{font-size:21px;font-weight:600;margin:0;letter-spacing:-.01em}
 h2{font-size:15px;font-weight:600;margin:2.2rem 0 .8rem;color:var(--ink);scroll-margin-top:96px}
 h2 .sub{font-weight:400;color:var(--faint);font-size:13px;margin-left:.4rem}
 .gen{color:var(--faint);font-size:12px;font-weight:400;margin-left:.5rem}
 select{background:var(--surface);color:var(--ink);border:1px solid var(--line);
  border-radius:8px;padding:.4rem .6rem;font:inherit;font-size:13px;max-width:62vw}
 .meta{color:var(--muted);font-size:13px;margin:-.3rem 0 .4rem}
 .chartbox{position:relative;height:330px;margin:.5rem 0}
 table{border-collapse:collapse;width:100%;font-size:13.5px}
 th{color:var(--muted);font-weight:500;text-align:left;padding:6px 10px;border-bottom:1px solid var(--line)}
 td{padding:7px 10px;border-bottom:1px solid var(--line)}
 td.num,th.num{text-align:right;font-variant-numeric:tabular-nums}
 .pos{color:var(--pos)}.neg{color:var(--neg)}
 .dot{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:7px;vertical-align:0}
 .cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}
 .card{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:1rem 1.1rem}
 .card .top{display:flex;align-items:center;justify-content:space-between;gap:8px}
 .card .nm{font-weight:600;font-size:15px}
 .chip{font-size:11px;color:var(--muted);background:var(--chip);border-radius:20px;padding:2px 9px;margin-left:6px;font-weight:500}
 .ret{font-size:25px;font-weight:600;font-variant-numeric:tabular-nums;margin:.35rem 0 .1rem}
 .vs{font-size:12.5px;color:var(--muted)}
 .spark{margin:.5rem 0 .2rem;display:block}
 .trow{display:flex;align-items:center;gap:8px;font-size:12px;margin:3px 0}
 .tk{width:62px;color:var(--muted);flex:none}
 .tbar{flex:1;height:6px;background:var(--chip);border-radius:4px;overflow:hidden}
 .tfill{display:block;height:100%;background:var(--accent);border-radius:4px}
 .tv{width:50px;text-align:right;color:var(--ink);font-variant-numeric:tabular-nums;flex:none}
 .foot{display:flex;gap:12px;flex-wrap:wrap;color:var(--faint);font-size:11.5px;margin-top:.6rem;
  border-top:1px solid var(--line);padding-top:.55rem}
 .rf{color:var(--muted);font-size:12.5px;font-style:italic;margin-top:.55rem;line-height:1.45}
 .bio{color:var(--faint);font-size:11.5px;margin-top:.5rem;line-height:1.4}
 .metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin:.4rem 0 1rem}
 .metric{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:.7rem .85rem}
 .metric .l{font-size:12px;color:var(--muted)}.metric .v{font-size:21px;font-weight:600;margin-top:2px}
 .note{color:var(--faint);font-size:12px;margin-top:.5rem}
 .empty{color:var(--muted);font-size:13px;background:var(--surface);border:1px dashed var(--line);
  border-radius:12px;padding:1rem}
 .topnav{position:sticky;top:0;z-index:30;background:var(--bg);
  margin:-1.5rem -1.25rem 1.1rem;padding:.55rem 1.25rem;border-bottom:1px solid var(--line)}
 .navrow{display:flex;align-items:center;gap:.5rem 1rem;flex-wrap:wrap}
 .brand{font-size:16px;font-weight:600;color:var(--ink);text-decoration:none;letter-spacing:-.01em;white-space:nowrap}
 .tabs{display:flex;gap:.3rem}
 .tab{font-size:13.5px;color:var(--muted);text-decoration:none;padding:.32rem .8rem;border-radius:8px;line-height:1}
 .tab:hover{background:var(--chip);color:var(--ink)}
 .tab.on{background:var(--accent);color:#fff}
 .navright{margin-left:auto;display:flex;align-items:center;gap:.6rem}
 .jumps{display:flex;gap:.05rem;flex-wrap:wrap;margin-top:.45rem}
 .jumps a{font-size:12px;color:var(--muted);text-decoration:none;padding:.15rem .55rem;border-radius:6px}
 .jumps a:hover{background:var(--chip);color:var(--ink)}
</style></head><body>
<nav class="topnav">
 <div class="navrow">
  <a class="brand" href="/">&#128122; Trader Goblins</a>
  <div class="tabs"><a class="tab on" href="/">Dashboard</a><a class="tab" href="/research">Research</a><a class="tab" href="/games">Games</a></div>
  <span class="navright"><span class="gen" id="gen"></span>
   <label style="font-size:13px;color:var(--muted)">run&nbsp;<select id="runsel" aria-label="Select run"></select></label></span>
 </div>
 <div class="jumps">
  <a href="#live">Live</a><a href="#backtest">Backtest</a><a href="#leaderboard">Leaderboard</a><a href="#goblins">Goblins</a><a href="#forward">Forward</a><a href="#champions">Champions</a>
 </div>
</nav>

<h2 id="live" style="margin-top:.4rem">Live paper accounts <span class="sub" id="livesub"></span></h2>
<div id="live"></div>

<h2 id="backtest">Backtest runs</h2>
<div class="meta" id="runmeta"></div>
<div class="chartbox"><canvas id="equity" role="img" aria-label="Equity curves of all accounts over the selected run"></canvas></div>

<h2 id="leaderboard">Leaderboard</h2>
<table id="lb"><thead><tr><th>#</th><th>account</th><th>tier</th>
 <th class="num">return</th><th class="num">vs SPY</th><th class="num">trades</th><th class="num">tokens</th></tr></thead>
 <tbody></tbody></table>

<h2 id="goblins">Goblin progress <span class="sub">how each trader is doing this run</span></h2>
<div class="cards" id="gobs"></div>

<h2 id="forward">Forward track record <span class="sub">live predict / track calls, scored vs today</span></h2>
<div id="fwd"></div>

<h2 id="champions">Hall of champions <span class="sub">evolved goblins, newest first</span></h2>
<div id="champs"></div>

<script>
var ALL=__DATA__, COL=__COLORS__, PRESEL=__PRESEL__;
var isDark=matchMedia('(prefers-color-scheme:dark)').matches;
var axis=isDark?'#a3a199':'#6b6a64', grid=isDark?'rgba(160,158,150,.14)':'rgba(120,118,110,.14)';
document.getElementById('gen').textContent='· generated '+ALL.generated;
function pct(x){return (x>=0?'+':'')+(x*100).toFixed(1)+'%';}
function money(x){return (x<0?'-$':'$')+Math.round(Math.abs(x)).toLocaleString();}
function col(n){return COL[n]||'#8a887f';}

function renderLive(){
 var accts=ALL.live_accounts||[], el=document.getElementById('live'),
     sub=document.getElementById('livesub');
 var conn=accts.filter(function(a){return a.connected;});
 if(!conn.length){
  sub.textContent='';
  el.innerHTML='<div class="empty">No live paper account connected — add Alpaca keys to .env and regenerate.</div>';
  return;}
 sub.textContent='Alpaca paper · fake money, real prices';
 el.innerHTML='';
 accts.forEach(function(L,idx){
  if(!L.connected) return;
  var name=L.label+(L.flagship?' — '+L.flagship:''), color=L.label==='Casino'?'#D85A30':'#1D9E75';
  var rows=L.positions.map(function(p){return '<tr><td>'+p.symbol+'</td><td class="num">'+p.qty+'</td><td class="num">'+money(p.market_value)+'</td><td class="num '+(p.unrealized_pl>=0?'pos':'neg')+'">'+(p.unrealized_pl>=0?'+':'')+p.unrealized_pl.toFixed(2)+' ('+pct(p.unrealized_plpc)+')</td></tr>';}).join('');
  el.insertAdjacentHTML('beforeend',
   '<div style="margin-bottom:1.6rem">'+
   '<div style="font-weight:500;font-size:14px;margin:.2rem 0 .5rem"><span class="dot" style="background:'+color+'"></span>'+name+'</div>'+
   '<div class="metrics">'+
    '<div class="metric"><div class="l">equity</div><div class="v">'+money(L.equity)+'</div></div>'+
    '<div class="metric"><div class="l">today</div><div class="v '+(L.day_pl>=0?'pos':'neg')+'">'+money(L.day_pl)+' <span style="font-size:13px;color:var(--color-text-secondary)">('+pct(L.day_pl_pct)+')</span></div></div>'+
    '<div class="metric"><div class="l">total P&amp;L</div><div class="v '+(L.total_pl_pct>=0?'pos':'neg')+'">'+pct(L.total_pl_pct)+'</div></div>'+
    '<div class="metric"><div class="l">cash · positions</div><div class="v" style="font-size:17px">'+money(L.cash)+' · '+L.positions.length+'</div></div>'+
   '</div>'+
   (L.curve.length>1?'<div class="chartbox" style="height:200px"><canvas id="livec'+idx+'" role="img" aria-label="'+name+' equity curve"></canvas></div>':'<div class="note">Equity curve fills in after a couple of daily marks.</div>')+
   (L.positions.length?'<table><thead><tr><th>symbol</th><th class="num">qty</th><th class="num">value</th><th class="num">unrealized P&amp;L</th></tr></thead><tbody>'+rows+'</tbody></table>':'<div class="note">No open positions yet — bets land at the next market open.</div>')+
   '</div>');});
 accts.forEach(function(L,idx){
  if(!L.connected||L.curve.length<2) return;
  var color=L.label==='Casino'?'#D85A30':'#1D9E75';
  new Chart(document.getElementById('livec'+idx),{type:'line',
   data:{labels:L.labels,datasets:[{label:'paper equity',data:L.curve,borderColor:color,
     backgroundColor:color,borderWidth:2,pointRadius:0,tension:.2,fill:false}]},
   options:{responsive:true,maintainAspectRatio:false,
    plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return money(c.raw);}}}},
    scales:{x:{grid:{display:false},ticks:{color:axis,maxTicksLimit:6}},
     y:{grid:{color:grid},ticks:{color:axis,callback:function(v){return '$'+Math.round(v/1000)+'k';}}}}}});});
}

var sel=document.getElementById('runsel');
ALL.runs.forEach(function(r){
 var tag=r.kind?r.kind:r.mode;
 var o=document.createElement('option');o.value=r.id;
 o.textContent='#'+r.id+' · '+tag+' · '+(r.note||'')+' · '+(r.first||'?')+'→'+(r.last||'?');
 sel.appendChild(o);});
sel.value=String(PRESEL||(ALL.runs[0]&&ALL.runs[0].id));

var chart=null;
function renderRun(id){
 var D=ALL.data[String(id)]; if(!D) return;
 var top=D.accounts.slice().sort(function(a,b){return b.return-a.return;})[0];
 document.getElementById('runmeta').textContent=
  D.n_fills+' trades · '+D.n_reports+' reports · '+(D.first||'?')+' → '+(D.last||'?')
  +' · leader: '+top.name+' '+pct(top.return);

 var mn=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 var ml=D.labels.map(function(d,i){var m=+d.slice(5,7),p=i?+D.labels[i-1].slice(5,7):-1;return m!==p?mn[m-1]:'';});
 var sets=D.accounts.filter(function(a){return a.curve.length>1;}).map(function(a){
  return {label:a.name,data:a.curve,borderColor:col(a.name),backgroundColor:col(a.name),
   borderWidth:a.tier==='trader'?2.2:1.4,borderDash:a.tier==='baseline'?[5,4]:[],
   pointRadius:0,tension:.25,fill:false};});
 if(chart)chart.destroy();
 chart=new Chart(document.getElementById('equity'),{type:'line',
  data:{labels:D.labels,datasets:sets},
  options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},
   plugins:{legend:{position:'bottom',labels:{boxWidth:12,color:axis,font:{size:11}}},
    tooltip:{callbacks:{label:function(c){return c.dataset.label+': $'+Math.round(c.raw).toLocaleString();}}}},
   scales:{x:{grid:{display:false},ticks:{color:axis,autoSkip:false,maxRotation:0,
      callback:function(v,i){return ml[i];}}},
    y:{grid:{color:grid},ticks:{color:axis,callback:function(v){return '$'+Math.round(v/1000)+'k';}}}}}});

 var rows=D.accounts.slice().sort(function(a,b){return b.return-a.return;});
 var tb=document.querySelector('#lb tbody');tb.innerHTML='';
 rows.forEach(function(a,i){
  var vs=a.vs_spy==null?'<span style="color:var(--faint)">—</span>':
    '<span class="'+(a.vs_spy>=0?'pos':'neg')+'">'+pct(a.vs_spy)+'</span>';
  tb.insertAdjacentHTML('beforeend','<tr><td>'+(i+1)+'</td>'+
   '<td><span class="dot" style="background:'+col(a.name)+'"></span>'+a.name+'</td>'+
   '<td style="color:var(--muted)">'+a.tier+'</td>'+
   '<td class="num '+(a.return>=0?'pos':'neg')+'">'+pct(a.return)+'</td>'+
   '<td class="num">'+vs+'</td><td class="num">'+a.n_trades+'</td>'+
   '<td class="num">'+a.tokens+'</td></tr>');});

 var g=document.getElementById('gobs');g.innerHTML='';
 D.accounts.filter(function(a){return a.tier==='trader';})
  .sort(function(a,b){return b.return-a.return;}).forEach(function(a){
   var bio=ALL.personas[a.name]||{};
   var keys=Object.keys(a.trust).sort(function(x,y){return a.trust[y]-a.trust[x];});
   var tb2=keys.map(function(k){
     var v=a.trust[k],i0=a.trust_init?a.trust_init[k]:null,w=Math.min(100,v/2*100);
     var d=(i0!=null&&Math.abs(v-i0)>=0.02)?(v>i0?' <span class="pos">↑</span>':' <span class="neg">↓</span>'):'';
     return '<div class="trow"><span class="tk">'+k+'</span><span class="tbar"><span class="tfill" style="width:'+w.toFixed(0)+'%;background:'+col(a.name)+'"></span></span><span class="tv">'+v.toFixed(2)+d+'</span></div>';}).join('');
   var chips=(bio.style?'<span class="chip">'+bio.style+'</span>':'')+(bio.contrarian?'<span class="chip">contrarian</span>':'');
   g.insertAdjacentHTML('beforeend',
    '<div class="card"><div class="top"><span class="nm"><span class="dot" style="background:'+col(a.name)+'"></span>'+a.name+'</span><span>'+chips+'</span></div>'+
    '<div class="ret '+(a.return>=0?'pos':'neg')+'">'+pct(a.return)+'</div>'+
    '<div class="vs">vs SPY '+(a.vs_spy==null?'—':pct(a.vs_spy))+' · '+a.n_trades+' trades'+(a.commission>0?' · '+a.commission+' tok on research':'')+'</div>'+
    spark(a.curve,col(a.name))+tb2+
    (a.reflections&&a.reflections[0]?'<div class="rf">“'+a.reflections[0]+'”</div>':'')+
    (bio.character?'<div class="bio">'+bio.character+'</div>':'')+'</div>');});
}

function spark(vals,c){
 if(!vals||vals.length<2)return '';
 var w=260,h=34,mn=Math.min.apply(null,vals),mx=Math.max.apply(null,vals),r=(mx-mn)||1;
 var pts=vals.map(function(v,i){return (i/(vals.length-1)*w).toFixed(1)+','+(h-(v-mn)/r*h).toFixed(1);}).join(' ');
 return '<svg class="spark" width="100%" height="'+h+'" viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none"><polyline points="'+pts+'" fill="none" stroke="'+c+'" stroke-width="1.6"/></svg>';
}

function renderForward(){
 var F=ALL.forward, el=document.getElementById('fwd');
 if(!F||!F.priced||!F.calls.length){
  el.innerHTML='<div class="empty">No priced forward calls yet — run <code>predict</code> then <code>track</code> (the daily task does this), and regenerate.</div>';return;}
 var hr=F.hit_rate==null?'—':Math.round(F.hit_rate*100)+'%';
 el.innerHTML='<div class="metrics">'+
   '<div class="metric"><div class="l">directional hits</div><div class="v">'+F.n_hits+'/'+F.n_directional+' <span style="font-size:13px;color:var(--muted)">('+hr+')</span></div></div>'+
   '<div class="metric"><div class="l">mean acting return</div><div class="v '+(F.mean_acting>=0?'pos':'neg')+'">'+pct(F.mean_acting||0)+'</div></div>'+
   '<div class="metric"><div class="l">calls scored</div><div class="v">'+F.n+'</div></div>'+
   '<div class="metric"><div class="l">as of</div><div class="v" style="font-size:16px">'+F.as_of+'</div></div></div>'+
   '<div class="chartbox" style="height:'+(F.calls.length*26+60)+'px"><canvas id="fwdc" role="img" aria-label="Acting return per forward call"></canvas></div>'+
   '<div class="note">Sample is small and young — re-run <code>track</code> over days for this to mean anything.</div>';
 var rows=F.calls.slice().sort(function(a,b){return b.acting-a.acting;});
 new Chart(document.getElementById('fwdc'),{type:'bar',
  data:{labels:rows.map(function(c){return c.ticker+' · '+c.verdict;}),
   datasets:[{data:rows.map(function(c){return +(c.acting*100).toFixed(1);}),
    backgroundColor:rows.map(function(c){return c.hit==null?'#8a887f':(c.acting>=0?'#1d9e75':'#d85a30');}),
    borderRadius:3,barPercentage:.8}]},
  options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
   plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return (c.raw>=0?'+':'')+c.raw+'% since call';}}}},
   scales:{x:{grid:{color:grid},ticks:{color:axis,callback:function(v){return (v>0?'+':'')+v+'%';}}},
    y:{grid:{display:false},ticks:{color:axis,font:{size:11}}}}}});
}

function renderChampions(){
 var C=ALL.champions, el=document.getElementById('champs');
 if(!C||!C.length){el.innerHTML='<div class="empty">No evolved champions yet — breed one with <code>python -m trader_goblins.sim.evolution</code>.</div>';return;}
 var rows=C.slice().reverse().map(function(c){
  return '<tr><td>gen '+c.generation+'</td><td>'+c.name+'</td>'+
   '<td class="num '+(c.fitness>=0?'pos':'neg')+'">'+(c.fitness==null?'—':(c.fitness>=0?'+':'')+c.fitness.toFixed(2))+'</td>'+
   '<td>'+c.style+'</td><td style="color:var(--muted)">'+c.trusts+' · '+c.temperament+'</td>'+
   '<td style="color:var(--faint)">'+(c.parents||'')+'</td></tr>';}).join('');
 el.innerHTML='<table><thead><tr><th>generation</th><th>name</th><th class="num">fitness</th>'+
  '<th>style</th><th>genes</th><th>bred from</th></tr></thead><tbody>'+rows+'</tbody></table>';
}

sel.addEventListener('change',function(){renderRun(+sel.value);});
renderLive();
renderRun(+sel.value);
renderForward();
renderChampions();
</script></body></html>"""


def build(db_path: str = "trader_goblins.db", run_id: int = None) -> str:
    data = export_all(db_path)
    presel = run_id if run_id is not None else (data["runs"][0]["id"] if data["runs"] else 0)
    html = (_TEMPLATE.replace("__DATA__", json.dumps(data))
            .replace("__COLORS__", json.dumps(COLORS))
            .replace("__PRESEL__", json.dumps(presel)))
    os.makedirs("reports", exist_ok=True)
    out = os.path.join("reports", "dashboard.html")
    with open(out, "w", encoding="utf-8") as f:
        f.write(html)
    return out


def main() -> None:
    db_path = sys.argv[1] if len(sys.argv) > 1 else "trader_goblins.db"
    run_id = int(sys.argv[2]) if len(sys.argv) > 2 else None
    out = build(db_path, run_id)
    print(f"wrote {out} ({os.path.getsize(out)} bytes)")
    try:
        webbrowser.open("file://" + os.path.abspath(out))
    except Exception:
        pass


if __name__ == "__main__":
    main()
