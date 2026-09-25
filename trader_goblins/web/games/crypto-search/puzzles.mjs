const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function makePuzzle(p) {
  const key = Object.fromEntries([...alphabet].map((l, i) => [l, p.start + i * p.step]));
  return { ...p, key, grid: p.rows.map(r => r.split(' ').map(Number)) };
}
export const puzzles = [
  makePuzzle({
    id: 'toys', title: 'Toys in the Attic', level: 'Guided introduction', number: '01',
    start: 66, step: -2, hints: ['A','F','C','D'],
    words: ['WANT','FUN','KIDS','TOY','SMALL','SOFT','COOL','CHEAP'], answer: 'GIFT',
    clue: 'Something to unwrap.',
    nudge: 'A is 66, C is 62. What number belongs to B, halfway between them?',
    explanation: 'Each letter is worth 2 less than the letter before it.',
    rows: ['30 60 50 46 36 30','28 22 28 62 66 42','56 66 54 38 58 66','38 40 50 38 52 44','30 28 56 44 62 44','56 26 40 18 38 28'],
    source: 'Scott Berndt, Crypto-Search Volume 1, page 4. Tutorial.'
  }),
  makePuzzle({
    id: 'golf', title: 'Swinging the Club', level: 'Easy on the mind', number: '02',
    start: 67, step: -1, hints: ['H','B','X','D'],
    words: ['GREEN','CADDY','COURSE','CLUB','FORE','IRON','WOOD','SAND','TEE','BET'], answer: 'GOLF',
    clue: 'A game played on the green.',
    nudge: 'B is 66 and D is 64. Compare letters two places apart.',
    explanation: 'Each letter is worth 1 less than the letter before it.',
    rows: ['63 63 48 59 64 65 54','49 62 50 53 67 63 66','67 53 53 64 63 47 63','54 45 64 50 56 56 48','64 43 61 65 63 53 61','62 63 49 50 47 53 65'],
    source: 'Scott Berndt, Crypto-Search Volume 1, page 5; answer key page 41.'
  }),
  makePuzzle({
    id: 'snow', title: 'Chilling in the White', level: 'Easy on the mind', number: '03',
    start: 6, step: 3, hints: ['J','Q','M','D'],
    words: ['MITTENS','SKIING','HOT','DOG','GAME','COOL','SNOW','SKATING','SLED','NOME','BOARD','TOOL'], answer: 'LUGE',
    clue: 'A fast ride down an icy track.',
    nudge: 'J is 33 and M is 42. There are three letter steps between them.',
    explanation: 'Each letter is worth 3 more than the letter before it.',
    rows: ['60 36 06 63 30 45 24','15 45 39 27 39 48 45','57 15 18 48 48 42 30','06 18 18 63 48 18 30','48 39 39 15 63 12 36','09 60 45 48 72 30 60','18 42 06 24 66 24 42'],
    source: 'Scott Berndt, Crypto-Search Volume 1, page 6; answer key page 41.'
  })
];
export { alphabet };
