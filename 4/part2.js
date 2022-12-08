const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

const lines = input.split(/\r?\n/);

/*const lines = [
'2-4,6-8',
'2-3,4-5',
'5-7,7-9',
'2-8,3-7',
'6-6,4-6',
'2-6,4-8',
'1-1,1-2',
'3-35,2-4'
] */


function hasOverlap(assignment1, assignment2) {
//console.log(assignment1);
//console.log(assignment2);
  let [l1, r1] = assignment1.split('-').map(x => Number(x));
  let [l2, r2] = assignment2.split('-').map(x => Number(x));

//  console.log(`l1: ${l1}   r1: ${r1}    l2: ${l2}   r2: ${r2}`); 

//  l1: 3   r1: 35    l2: 2   r2: 4

//  console.log('first condition: ', (l2 >= l1 && l2 <= r1 && r2 >= l1 && r2 <= r1));
//  console.log('second condition: ', (l1 >= l2 && l1 <= r2 && r1 >= l2 && r1 <= r2));
  return (l2 >= l1 && l2 <= r1 || r2 >= l1 && r2 <= r1) ||
         (l1 >= l2 && l1 <= r2 || r1 >= l2 && r1 <= r2);
}

let count = 0;
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  let [assignment1, assignment2] = line.split(',');

  console.log(`assignment1: ${assignment1}   assignment2: ${assignment2}  hasOverlap: ${assignment1 && assignment2 && hasOverlap(assignment1, assignment2)}`);
  if (assignment1 && assignment2 && hasOverlap(assignment1, assignment2)) {
//    console.log(`hasOverlap: ${hasOverlap(assignment1, assignment2)}`);
    count++;
  }
}

console.log(count);
