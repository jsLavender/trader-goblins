import {puzzles,alphabet} from './puzzles.mjs';
import {freshState,remaining,pathBetween,matchWord,findPaths} from './engine.mjs';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const STORAGE='crypto-search-v1', fmt=n=>String(n).padStart(2,'0');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let saved={}, storageAvailable=true;
try { saved=JSON.parse(localStorage.getItem(STORAGE)||'{}'); if(!saved||typeof saved!=='object')saved={}; } catch { saved={}; }
let puzzle=puzzles.find(p=>p.id===saved.current)||puzzles[0];
function restore(p) {
  const s=freshState(p), old=saved[p.id];
  if(!old||typeof old!=='object')return s;
  for(const l of alphabet)if(old.key?.[l]===p.key[l])s.key[l]=old.key[l];
  for(const w of p.words){
    const path=old.found?.[w];
    if(Array.isArray(path)&&findPaths(p,w).some(pth=>pth.join(',')===path.join(',')||pth.join(',')===[...path].reverse().join(',')))s.found[w]=path;
  }
  for(const k of ['hints','mistakes'])if(Number.isSafeInteger(old[k])&&old[k]>=0)s[k]=old[k];
  s.usedHints=Array.isArray(old.usedHints)?old.usedHints.filter(v=>typeof v==='string'):[];
  s.drafts=Object.fromEntries(Object.entries(old.drafts||{}).filter(([l,v])=>alphabet.includes(l)&&l.length===1&&typeof v==='string'&&v.length<=3));
  const allCode=Object.keys(s.key).length===26, allWords=Object.keys(s.found).length===p.words.length;
  const maxStage=allCode?(allWords?3:2):1;
  s.stage=Number.isInteger(old.stage)?Math.max(1,Math.min(maxStage,old.stage)):maxStage;
  const leftovers=remaining(p,s.found);
  s.tiles=allWords&&Array.isArray(old.tiles)?old.tiles.filter((n,i,a)=>Number.isInteger(n)&&n>=0&&n<leftovers.length&&a.indexOf(n)===i):[];
  s.solved=old.solved===true&&allCode&&allWords&&s.tiles.map(i=>leftovers[i].letter).join('')===p.answer;
  return s;
}
let state=restore(puzzle), anchor=null, selection=[], invalid=[], hintedCell=null, drag=null, suppressClick=false;
const completeCode=()=>Object.keys(state.key).length===26;
const completeWords=()=>Object.keys(state.found).length===puzzle.words.length;
function persist(){
  saved.current=puzzle.id; saved[puzzle.id]=state;
  try{localStorage.setItem(STORAGE,JSON.stringify(saved));storageAvailable=true;}catch{storageAvailable=false;}
  $('#save-status').textContent=storageAvailable?'Saved on this browser':'Progress cannot be saved in this browser';
}
function say(message,error=false){
  $('#feedback').textContent=message; $('#feedback').classList.toggle('error',error);
  const target=state.stage===2?$('#selection-label'):$('#action-message');
  if(target){target.textContent=message;target.classList.toggle('error-text',error);}
}
function counters(){ $('#mistakes').textContent=state.mistakes;$('#hints').textContent=state.hints; }
function focusStage(){
  if(matchMedia('(max-width:680px)').matches){
    const el=state.stage===2?$('.play-panel'):$('.key-panel');
    el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});
  }
}
function render(){
  if($('#action-message'))$('#action-message').textContent='';
  $('#app').dataset.stage=state.stage;
  $('#puzzle-title').textContent=puzzle.title;
  $('#puzzle-level').textContent=`PUZZLE ${puzzle.number} / ${puzzle.level.toUpperCase()}`;
  $('#puzzle-select').innerHTML=puzzles.map(p=>`<option value="${p.id}">${p.number} · ${p.title}${(p.id===puzzle.id?state.solved:saved[p.id]?.solved)?' ✓':''}</option>`).join('');
  $('#puzzle-select').value=puzzle.id;
  $('#key-intro').textContent=completeCode()?puzzle.explanation:puzzle.nudge;
  $('#key-count').textContent=state.stage===3?`${puzzle.answer.length} letters`:`${Object.keys(state.key).length} / 26`;
  $('#notebook-title').textContent=state.stage===3?'The final secret':'The code key';
  $('#key-work').hidden=state.stage===3;
  $('#secret-work').hidden=state.stage!==3;
  $('#key-grid').innerHTML=[...alphabet].map(l=>{
    const given=puzzle.hints.includes(l), valid=state.key[l]!==undefined;
    return `<label class="key-cell ${given?'given':valid?'valid':''} ${invalid.includes(l)?'invalid':''}"><span>${l}</span><input aria-label="Code for ${l}${given?', given':valid?', solved':''}" data-letter="${l}" inputmode="numeric" pattern="[0-9]*" maxlength="3" autocomplete="off" value="${esc(state.key[l]??state.drafts?.[l]??'')}" ${valid?'readonly':''} ${invalid.includes(l)?'aria-invalid="true"':''}></label>`;
  }).join('');
  $('#check-key').disabled=completeCode();
  $('#fill-pattern').disabled=completeCode()||state.key.A===undefined||state.key.B===undefined;
  $('#pattern-note').textContent=completeCode()?'Your code is complete. The word list now shows each number sequence.':'Find A and B, then extend their pattern to fill the key.';
  $('#hint').disabled=state.solved;
  $('#hint-note').textContent=state.solved?'Puzzle complete':'Hints are counted';
  $('.notebook-foot').hidden=state.stage===2;
  $('#board-hint').hidden=state.stage!==2||completeWords();
  renderSecret();renderBoard();renderWords();renderResult();counters();
  $$('[data-stage]').forEach(b=>{
    const n=Number(b.dataset.stage),max=completeCode()?(completeWords()?3:2):1;
    b.disabled=n>max;
    b.classList.toggle('done',n===1?completeCode():n===2?completeWords():state.solved);
    if(n===state.stage)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');
    b.querySelector('.stage-check').textContent=b.classList.contains('done')?'✓':'';
  });
  if(!$('#action-message')){
    const p=document.createElement('p');p.id='action-message';p.className='action-message';
    (state.stage===3?$('#secret-work'):$('#key-work')).append(p);
  }else (state.stage===3?$('#secret-work'):$('#key-work')).append($('#action-message'));
  persist();
}
function renderBoard(){
  const cols=puzzle.grid[0].length,rows=puzzle.grid.length;
  $('#number-grid').style.setProperty('--cols',cols);
  const used=new Set(Object.values(state.found).flat()),left=new Set(completeWords()?remaining(puzzle,state.found).map(c=>c.index):[]);
  $('#number-grid').innerHTML=puzzle.grid.flat().map((n,i)=>{
    const found=used.has(i), leftover=left.has(i);
    return `<button class="cell ${state.stage===1?'gated':''} ${found?'found':''} ${leftover?'leftover':''}" data-cell="${i}" aria-label="Row ${Math.floor(i/cols)+1}, column ${i%cols+1}: ${fmt(n)}${leftover?', leftover':found?', found':''}" ${state.stage!==2||completeWords()?'disabled':''}>${fmt(n)}</button>`;
  }).join('');
  $('#dimensions').textContent=`${cols} × ${rows}`;
  $('#board-kicker').textContent=completeWords()?'THE LEFTOVER NUMBERS':'THE SEARCH GRID';
  $('#board-title').textContent=state.solved?'Every piece in its place.':completeWords()?'The secret was here all along.':state.stage===2?'Follow the numbers.':'A secret in the numbers.';
  $('#board-instruction').textContent=completeWords()?'The gold cells hold your final letters.':state.stage===2?'Drag in a straight line, or tap the first and last cells.':'First, discover how letters turn into numbers.';
  $('#selection-label').textContent=state.solved?'Puzzle solved.':completeWords()?'Use the leftover letters in your notebook.':state.stage===2?(puzzle.id==='toys'&&!Object.keys(state.found).length?'Try KIDS: 46 · 50 · 60 · 30, across the top row from right to left.':'Words can run forwards, backwards, or diagonally.'):'Crack the code to unlock the grid.';
  paintSelection();
}
function paintSelection(){
  $$('#number-grid .cell').forEach(b=>{
    const i=Number(b.dataset.cell);b.classList.toggle('selected',selection.includes(i));b.classList.toggle('hinted',hintedCell===i);
    b.setAttribute('aria-pressed',String(selection.includes(i)));
  });
  $('#clear-selection').hidden=anchor===null;
  if(selection.length)$('#selection-label').textContent=selection.map(i=>fmt(puzzle.grid.flat()[i])).join(' · ')+(selection.length===1?'. Now choose the last cell.':'');
}
function renderWords(){
  $('#word-count').textContent=`${Object.keys(state.found).length} / ${puzzle.words.length} found`;
  $('#word-list').innerHTML=puzzle.words.map(w=>`<div class="word-chip ${state.found[w]?'found':''}" aria-label="${w}${state.found[w]?', found':''}"><strong>${w}${state.found[w]?' ✓':''}</strong><span class="encoded">${[...w].map(l=>state.key[l]!==undefined?fmt(state.key[l]):'··').join(' ')}</span></div>`).join('');
}
function renderSecret(){
  if(!completeWords()){ $('#secret-work').innerHTML='';return; }
  const left=remaining(puzzle,state.found);
  $('#secret-work').innerHTML=`<p class="intro">Every word is found. Arrange the ${left.length} leftover letters to solve the secret.</p><p class="secret-label">${left.map(c=>fmt(c.number)).join(' · ')} → ${left.map(c=>c.letter).join(' · ')}</p><div class="answer-slots" aria-label="Your final answer">${Array.from({length:left.length},(_,i)=>{const tile=state.tiles[i];return `<button class="tile ${tile===undefined?'empty':''}" data-slot="${i}" aria-label="${tile===undefined?'Empty answer slot '+(i+1):'Remove '+left[tile].letter+' from slot '+(i+1)}" ${tile===undefined||state.solved?'disabled':''}>${tile===undefined?'·':left[tile].letter}</button>`;}).join('')}</div><div class="tile-bank" aria-label="Available letters">${left.map((c,i)=>`<button class="tile" data-tile="${i}" aria-label="Add ${c.letter}" ${state.tiles.includes(i)||state.solved?'disabled':''}>${c.letter}</button>`).join('')}</div><p class="micro">Tap a letter to place it. Tap a filled slot to return it.</p><div class="key-actions"><button class="primary" id="check-answer" ${state.tiles.length!==left.length||state.solved?'disabled':''}>Check secret</button><button class="secondary" id="clear-answer" ${!state.tiles.length||state.solved?'disabled':''}>Clear</button></div>`;
}
function renderResult(){
  $('#result').hidden=!state.solved;
  if(!state.solved){$('#result').innerHTML='';return;}
  const next=puzzles[puzzles.indexOf(puzzle)+1];
  $('#result').innerHTML=`<div class="result-card"><p class="eyebrow">CODE CRACKED. SECRET SOLVED.</p><h2>You found ${puzzle.answer}.</h2><p>${state.mistakes===0&&state.hints===0?'A clean solve. ':''}${state.mistakes} ${state.mistakes===1?'mistake':'mistakes'} · ${state.hints} ${state.hints===1?'hint':'hints'} · ${puzzle.words.length} words found</p><button class="primary" id="next-puzzle">${next?'Next: '+next.title:'Back to the first puzzle'}</button></div>`;
}
function checkEntries(entries){
  if(!entries||typeof entries!=='object'||Array.isArray(entries)||!Object.keys(entries).length||Object.keys(entries).some(l=>l.length!==1||!alphabet.includes(l)))throw new Error('Provide letter codes using A through Z.');
  if(completeCode())return {correct:0,incorrect:[],codeComplete:true,mistakes:state.mistakes};
  invalid=[];let correct=0,attempted=0;state.drafts??={};
  for(const [l,raw] of Object.entries(entries)){
    if(state.key[l]!==undefined)continue;
    const v=String(raw).trim();if(!v)continue;attempted++;
    if(/^\d{1,3}$/.test(v)&&Number(v)===puzzle.key[l]){state.key[l]=Number(v);delete state.drafts[l];correct++;}
    else {invalid.push(l);state.drafts[l]=v.slice(0,3);}
  }
  if(invalid.length)state.mistakes++;
  const finished=completeCode();if(finished)state.stage=2;render();
  say(finished?'Code cracked. Now find the word sequences in the grid.':invalid.length?`${correct?correct+' correct. ':''}Check ${invalid.join(', ')} again. One mistake added.`:correct?`${correct} ${correct===1?'entry':'entries'} solved. ${state.key.A!==undefined&&state.key.B!==undefined?'You can now extend A → B.':'Keep looking for the pattern.'}`:attempted?'Those entries are already solved.':'Enter at least one new number to check.',!!invalid.length);
  if(finished)focusStage();else if(invalid.length)$(`[data-letter="${invalid[0]}"]`)?.focus();
  else if(!$('#fill-pattern').disabled)$('#fill-pattern').focus({preventScroll:true});
  return {correct,incorrect:[...invalid],codeComplete:finished,mistakes:state.mistakes};
}
function extendPattern(){
  if(completeCode())return {codeComplete:true,stage:state.stage};
  if(state.key.A===undefined||state.key.B===undefined)throw new Error('Solve and check A and B first.');
  const step=state.key.B-state.key.A,key=Object.fromEntries([...alphabet].map((l,i)=>[l,state.key.A+i*step]));
  if(Object.entries(key).some(([l,n])=>n!==puzzle.key[l]))throw new Error('This puzzle does not follow a single A-to-B pattern.');
  state.key=key;state.drafts={};invalid=[];state.stage=2;render();
  say('Code cracked. '+puzzle.explanation+' Now search for the words.');focusStage();
  return {codeComplete:true,stage:state.stage};
}
function clearSelection(){anchor=null;selection=[];drag=null;paintSelection();}
function submitPath(start,end){
  if(state.stage!==2||completeWords())throw new Error('Open an unfinished Search the grid stage after completing the code.');
  const rows=puzzle.grid.length,cols=puzzle.grid[0].length;
  if(![start,end].every(n=>Number.isInteger(n)&&n>=0&&n<rows*cols))throw new Error('Choose two cells inside the grid.');
  const path=pathBetween(start,end,rows,cols);clearSelection();
  if(path.length<2){say('Choose a straight line across two or more cells.');return {found:false,mistakes:state.mistakes};}
  const word=matchWord(puzzle,path);
  if(word&&state.found[word]){say(`${word} is already found. Try another word.`);return {found:false,alreadyFound:word,mistakes:state.mistakes};}
  if(!word){state.mistakes++;persist();counters();say('That sequence is not one of the listed words. Try again.',true);return {found:false,mistakes:state.mistakes};}
  state.found[word]=path;hintedCell=null;if(completeWords()){state.stage=3;state.tiles=[];}
  render();say(completeWords()?'All words found. Arrange the leftover letters to reveal the secret.':`${word} found. ${puzzle.words.length-Object.keys(state.found).length} to go.`);
  $('#number-grid').classList.remove('pulse');requestAnimationFrame(()=>$('#number-grid').classList.add('pulse'));if(completeWords())focusStage();
  else $(`[data-cell="${end}"]`)?.focus({preventScroll:true});
  return {found:true,word,allWordsFound:completeWords(),stage:state.stage};
}
function selectCell(i){
  if(anchor===null){anchor=i;selection=[i];paintSelection();}
  else if(anchor===i){clearSelection();say('Selection cleared.');}else submitPath(anchor,i);
}
function checkAnswer(){
  if(!completeWords())throw new Error('Find all the words before solving the secret.');
  if(state.solved)return {solved:true};
  const left=remaining(puzzle,state.found);if(state.tiles.length!==left.length)throw new Error('Place all the letters first.');
  if(state.tiles.map(i=>left[i].letter).join('')!==puzzle.answer){state.mistakes++;persist();counters();say('Not quite. Try another order for those letters.',true);return {solved:false,mistakes:state.mistakes};}
  state.solved=true;state.stage=3;render();say(`You solved it. The secret is ${puzzle.answer}.`);
  if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
    $('#celebration').innerHTML=Array.from({length:28},(_,i)=>`<i style="left:${(i*37)%100}%;animation-delay:${(i%7)*.05}s;background:${i%2?'#59ccad':'#ecc36e'}"></i>`).join('');
    setTimeout(()=>$('#celebration').replaceChildren(),2200);
  }
  $('#result').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'center'});
  return {solved:true,answer:puzzle.answer,mistakes:state.mistakes,hints:state.hints};
}
function hint(){
  if(state.solved)return;
  if(state.stage===1){
    const l=[...'AB'+alphabet].find(l=>state.key[l]===undefined);
    if(!l){say('Your code is complete. Move on to Search the grid.');return;}
    state.hints++;state.key[l]=puzzle.key[l];if(state.drafts)delete state.drafts[l];invalid=[];
    if(completeCode())state.stage=2;render();say(`Hint: ${l} = ${fmt(puzzle.key[l])}. ${puzzle.explanation}`);
  }else if(state.stage===2){
    const word=puzzle.words.find(w=>!state.found[w]);if(!word)return;
    const marker='word:'+word;if(!state.usedHints.includes(marker)){state.hints++;state.usedHints.push(marker);}
    hintedCell=findPaths(puzzle,word)[0][0];clearSelection();paintSelection();persist();counters();
    say(`${word} starts at the outlined cell. Find the rest of its sequence.`);
  }else{
    if(!state.usedHints.includes('secret')){state.hints++;state.usedHints.push('secret');persist();counters();}
    say('Final clue: '+puzzle.clue);
  }
}
function choosePuzzle(id){
  const next=puzzles.find(p=>p.id===id);if(!next)throw new Error('Unknown puzzle.');
  persist();puzzle=next;state=restore(puzzle);invalid=[];hintedCell=null;anchor=null;selection=[];drag=null;
  render();say(state.solved?'This puzzle is already solved. Restart to play again.':state.stage===1?'Use the given clues to discover the code.':'Your progress is ready. Pick up where you left off.');
}
$('#key-form').addEventListener('submit',e=>{e.preventDefault();checkEntries(Object.fromEntries($$('[data-letter]').map(el=>[el.dataset.letter,el.value])));});
$('#key-form').addEventListener('input',e=>{if(e.target.dataset.letter){state.drafts??={};state.drafts[e.target.dataset.letter]=e.target.value;persist();}});
$('#fill-pattern').addEventListener('click',extendPattern);
$('#puzzle-select').addEventListener('change',e=>choosePuzzle(e.target.value));
$$('[data-stage]').forEach(b=>b.addEventListener('click',()=>{clearSelection();state.stage=Number(b.dataset.stage);render();say(state.stage===1?'Use your notebook to review the code.':state.stage===2?'Select the first and last cells of a word.':'Arrange the leftover letters to solve the secret.');focusStage();}));
$('#hint').addEventListener('click',hint);
$('#board-hint').addEventListener('click',hint);
$('#clear-selection').addEventListener('click',()=>{clearSelection();say('Selection cleared.');});
const grid=$('#number-grid');
grid.addEventListener('pointerdown',e=>{
  const b=e.target.closest('[data-cell]');if(!b||b.disabled||e.button!==0)return;
  drag={start:Number(b.dataset.cell),end:Number(b.dataset.cell),moved:false,id:e.pointerId};grid.setPointerCapture(e.pointerId);
});
grid.addEventListener('pointermove',e=>{
  if(!drag||drag.id!==e.pointerId)return;
  const b=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-cell]');if(!b||!grid.contains(b))return;
  const end=Number(b.dataset.cell);if(end!==drag.start){drag.moved=true;drag.end=end;selection=pathBetween(drag.start,end,puzzle.grid.length,puzzle.grid[0].length);paintSelection();}
});
grid.addEventListener('pointerup',e=>{
  if(!drag||drag.id!==e.pointerId)return;
  const d=drag;drag=null;if(grid.hasPointerCapture(e.pointerId))grid.releasePointerCapture(e.pointerId);
  suppressClick=true;setTimeout(()=>{suppressClick=false;},0);
  if(d.moved){const b=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-cell]');if(b&&grid.contains(b))submitPath(d.start,Number(b.dataset.cell));else {clearSelection();say('Selection cleared.');}}
  else selectCell(d.start);
});
grid.addEventListener('pointercancel',()=>clearSelection());
grid.addEventListener('click',e=>{if(suppressClick)return;const b=e.target.closest('[data-cell]');if(b&&!b.disabled&&e.detail===0)selectCell(Number(b.dataset.cell));});
grid.addEventListener('keydown',e=>{
  const b=e.target.closest('[data-cell]');if(!b)return;
  if(e.key==='Escape'){clearSelection();say('Selection cleared.');return;}
  const cols=puzzle.grid[0].length,i=Number(b.dataset.cell),r=Math.floor(i/cols),c=i%cols;
  const move={ArrowRight:[r,c+1],ArrowLeft:[r,c-1],ArrowDown:[r+1,c],ArrowUp:[r-1,c]}[e.key];
  if(move){e.preventDefault();if(move[0]>=0&&move[0]<puzzle.grid.length&&move[1]>=0&&move[1]<cols)$(`[data-cell="${move[0]*cols+move[1]}"]`).focus();}
});
$('#secret-work').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b||b.disabled)return;
  if(b.dataset.tile!==undefined){state.tiles.push(Number(b.dataset.tile));render();($('#check-answer').disabled?$('.tile-bank button:not(:disabled)'):$('#check-answer'))?.focus({preventScroll:true});}
  else if(b.dataset.slot!==undefined){state.tiles.splice(Number(b.dataset.slot),1);render();$('.tile-bank button:not(:disabled)')?.focus({preventScroll:true});}
  else if(b.id==='clear-answer'){state.tiles=[];render();say('Letters returned. Try a new order.');}
  else if(b.id==='check-answer')checkAnswer();
});
$('#result').addEventListener('click',e=>{if(e.target.closest('#next-puzzle')){choosePuzzle(puzzles[(puzzles.indexOf(puzzle)+1)%puzzles.length].id);$('.puzzle-heading').scrollIntoView({block:'start'});}});
$('#help').addEventListener('click',()=>$('#help-dialog').showModal());
$$('.close-help,.close-dialog').forEach(b=>b.addEventListener('click',()=>$('#help-dialog').close()));
$('#restart').addEventListener('click',()=>$('#restart-dialog').showModal());
$('#cancel-restart').addEventListener('click',()=>$('#restart-dialog').close());
$('#confirm-restart').addEventListener('click',()=>{state=freshState(puzzle);invalid=[];hintedCell=null;clearSelection();$('#restart-dialog').close();render();say('Fresh page. Start with the given clues.');focusStage();});
render();if(state.stage>1)say(state.solved?'Puzzle solved. Choose another puzzle or restart.':'Your progress is saved. Keep going.');

// Optional browser agent interface, sharing the same actions as the visible UI.
if(document.modelContext?.registerTool){
  const controller=new AbortController();
  const register=(name,description,inputSchema,execute,readOnlyHint=false)=>{
    try{Promise.resolve(document.modelContext.registerTool({name,description,inputSchema,execute,annotations:{readOnlyHint,untrustedContentHint:false}},{signal:controller.signal})).catch(()=>{});}catch{/* Ordinary browsers need no agent interface. */}
  };
  register('read_puzzle_progress','Read the selected puzzle, checked code, found words, stage, and counts. Does not reveal solutions.',{type:'object',properties:{},additionalProperties:false},()=>({puzzle:puzzle.id,title:puzzle.title,stage:state.stage,key:state.key,foundWords:Object.keys(state.found),mistakes:state.mistakes,hints:state.hints,solved:state.solved}),true);
  register('check_code_entries','Check a batch of letter-to-number guesses. An incorrect batch adds one mistake.',{type:'object',properties:{entries:{type:'object',additionalProperties:{type:'integer'}}},required:['entries'],additionalProperties:false},input=>checkEntries(input.entries));
  register('extend_code_pattern','Fill the code using the already checked A and B values and open the word search.',{type:'object',properties:{},additionalProperties:false},()=>extendPattern());
  register('select_word_endpoints','Submit a straight word selection using zero-based cell indices in row order. Wrong word submissions add one mistake.',{type:'object',properties:{start:{type:'integer',minimum:0},end:{type:'integer',minimum:0}},required:['start','end'],additionalProperties:false},input=>submitPath(input.start,input.end));
  addEventListener('pagehide',()=>controller.abort(),{once:true});
}
