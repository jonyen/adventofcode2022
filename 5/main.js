
/*
            [C]         [N] [R]    
[J] [T]     [H]         [P] [L]    
[F] [S] [T] [B]         [M] [D]    
[C] [L] [J] [Z] [S]     [L] [B]    
[N] [Q] [G] [J] [J]     [F] [F] [R]
[D] [V] [B] [L] [B] [Q] [D] [M] [T]
[B] [Z] [Z] [T] [V] [S] [V] [S] [D]
[W] [P] [P] [D] [G] [P] [B] [P] [V]
 1   2   3   4   5   6   7   8   9 
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

let crates = { 
  1: ['W', 'B', 'D', 'N', 'C', 'F', 'J'],
  2: ['P', 'Z', 'V', 'Q', 'L', 'S', 'T'],
  3: ['P', 'Z', 'B', 'G', 'J', 'T'],
  4: ['D', 'T', 'L', 'J', 'Z', 'B', 'H', 'C'],
  5: ['G', 'V', 'B', 'J', 'S'],
  6: ['P', 'S', 'Q'],
  7: ['B', 'V', 'D', 'F', 'L', 'M', 'P', 'N'],
  8: ['P', 'S', 'M', 'F', 'B', 'D', 'L', 'R'],
  9: ['V', 'D', 'T', 'R']
}

const lines = input.split(/\r?\n/);
const regexp = /move (\d+) from (\d+) to (\d+)/g;

for (let i = 0; i < lines.length - 1; i++) {
  let line = lines[i];

  let search = [...line.matchAll(regexp)];

  let quantity = search[0][1];
  let origin = search[0][2];
  let destination = search[0][3];

  let crate;

  while (quantity > 0) {
    crate = crates[origin].pop();
    crates[destination].push(crate);
    quantity--;
  }
//  console.log(search[0], "   ", search[0][1], "    ", search[0][2], "     ",  search[0][3]);
//  console.log('--------');
}

console.log(crates);
