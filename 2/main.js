const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

let totalScore = 0;

const A = 'rock';
const B = 'paper';
const C = 'scissors';

const X = 'rock';
const Y = 'paper';
const Z = 'scissors';

const mappings = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'rock',
  Y: 'paper',
  Z: 'scissors'
}

const values = [X, Y, Z];

//let input = "A Y\nB X\nC Z\nC X";

input.split(/\r?\n/).forEach((line) => {
  [opponent, you] = line.split(' ');

  console.log(you, opponent);
  console.log(values.indexOf(mappings[you])); 
  console.log(values.indexOf(mappings[opponent])); 
 
  if ((values.indexOf(mappings[opponent]) + 1) % 3 === values.indexOf(mappings[you])) {
    console.log('you won');
    totalScore += 6 + values.indexOf(mappings[you]) + 1;
  }

  if (values.indexOf(mappings[you]) === values.indexOf(mappings[opponent])) {
    console.log('draw');
    totalScore += 3 + values.indexOf(mappings[you]) + 1;
  }
  
  if ((values.indexOf(mappings[you]) + 1) % 3 === values.indexOf(mappings[opponent])) {
    console.log('you lost');
    totalScore += 0 + values.indexOf(mappings[you]) + 1;
  }
console.log('new total score', totalScore);
console.log('-----');
});

console.log(totalScore);
