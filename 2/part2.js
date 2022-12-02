const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

let totalScore = 0;

const A = 'rock';
const B = 'paper';
const C = 'scissors';

const mappings = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'lose',
  Y: 'draw',
  Z: 'win'
}

const values = [A, B, C];

//let input = "A Y\nB X\nC Z";

//let input = "B X";

input.split(/\r?\n/).forEach((line) => {
  [opponent, outcome] = line.split(' ');

  console.log(opponent, outcome);
  console.log(values.indexOf(mappings[opponent])); 

  if (outcome === 'X') {
    console.log('you lose');
    console.log('opponent picks ', opponent, mappings[opponent]);
    console.log('value: ', (values.indexOf(mappings[opponent]) + 5) % 3)
    console.log('you pick: ', values[(values.indexOf(mappings[opponent]) + 5) % 3]);
    totalScore += ((values.indexOf(mappings[opponent]) + 5) % 3) + 1;
  } 

  if (outcome === 'Y') {
    console.log('draw');
    totalScore += (values.indexOf(mappings[opponent]) + 1) + 3;
  } 

  if (outcome === 'Z') {
    totalScore += ((values.indexOf(mappings[opponent]) + 1) % 3) + 1 + 6;
  } 

console.log('new total score', totalScore);
console.log('-----');
});

console.log(totalScore);
