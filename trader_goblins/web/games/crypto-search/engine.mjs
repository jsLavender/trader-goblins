export function pathBetween(start, end, rows, cols) {
  if (![start,end].every(n => Number.isInteger(n) && n >= 0 && n < rows * cols)) return [];
  const sr = Math.floor(start / cols), sc = start % cols;
  const er = Math.floor(end / cols), ec = end % cols;
  const dr = er-sr, dc = ec-sc;
  if (dr && dc && Math.abs(dr) !== Math.abs(dc)) return [];
  return Array.from({length: Math.max(Math.abs(dr),Math.abs(dc))+1}, (_,i) => (sr+i*Math.sign(dr))*cols + sc+i*Math.sign(dc));
}
export function findPaths(puzzle, word) {
  const {grid,key} = puzzle, rows = grid.length, cols = grid[0].length;
  const matches = [];
  for(let r=0;r<rows;r++) for(let c=0;c<cols;c++) {
    for(let dr=-1;dr<=1;dr++) for(let dc=-1;dc<=1;dc++) {
      if(!dr&&!dc) continue;
      const rr=r+dr*(word.length-1), cc=c+dc*(word.length-1);
      if(rr<0||rr>=rows||cc<0||cc>=cols) continue;
      const path=pathBetween(r*cols+c,rr*cols+cc,rows,cols);
      if(path.every((i,k)=>grid[Math.floor(i/cols)][i%cols]===key[word[k]])) matches.push(path);
    }
  }
  return matches;
}
export function matchWord(puzzle,path) {
  const values=path.map(i=>puzzle.grid.flat()[i]);
  return puzzle.words.find(w=>w.length===values.length &&
    (values.every((v,i)=>v===puzzle.key[w[i]]) || values.every((v,i)=>v===puzzle.key[w[w.length-1-i]]))) || null;
}
export function remaining(puzzle, found) {
  const used=new Set(Object.values(found).flat());
  const reverse=Object.fromEntries(Object.entries(puzzle.key).map(([l,n])=>[n,l]));
  return puzzle.grid.flat().flatMap((n,i)=>used.has(i)?[]:[{index:i,number:n,letter:reverse[n]}]);
}
export function freshState(puzzle) {
  return { key: Object.fromEntries(puzzle.hints.map(l=>[l,puzzle.key[l]])), found:{}, mistakes:0, hints:0, solved:false, stage:1, tiles:[], usedHints:[] };
}
export function validatePuzzle(puzzle) {
  const paths=Object.fromEntries(puzzle.words.map(w=>[w,findPaths(puzzle,w)]));
  const absent=Object.keys(paths).filter(w=>!paths[w].length);
  const ambiguous=Object.keys(paths).filter(w=>paths[w].length>1);
  const found=Object.fromEntries(Object.entries(paths).map(([w,p])=>[w,p[0]||[]]));
  const leftover=remaining(puzzle,found).map(c=>c.letter).join('');
  const sameLetters=[...leftover].sort().join('')===[...puzzle.answer].sort().join('');
  return {id:puzzle.id, absent, ambiguous, leftover, answer:puzzle.answer, sameLetters, paths};
}
