const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

let elfCount = 0;
let currentElfCalories = 0;
const elfCalories = [0];
input.split(/\r?\n/).forEach((line) => {
  if (line == '') {
    elfCount++;
    elfCalories[elfCount] = 0;
  } else {
    console.log('calories: ', Number(line));
    elfCalories[elfCount] += Number(line);
  }
});

//console.log(Math.max(...elfCalories));

console.log(elfCalories.sort((a,b) => {return a - b}));
console.log(elfCalories.sort((a,b) => {return a - b}).slice(-3));
console.log(elfCalories.sort((a,b) => {return a - b}).slice(-3).reduce(function (a, b) { return a + b; }, 0));
