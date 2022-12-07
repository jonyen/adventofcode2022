const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

const lines = input.split(/\r?\n/);


function intersectSets (setA, setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

function commonItem(sack) {
  const half1 = new Set(sack.slice(0, sack.length / 2));
  const half2 = new Set(sack.slice(sack.length / 2, sack.length));
  return intersectSets(half1, half2);  
}

const priorities = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function priority(item) {
  return priorities.split('').indexOf(item);
}

//console.log([...commonItem(lines[0])][0]);

//console.log(priority('p'));

let sum = 0;
for (let x = 0; x < lines.length - 1; x++) {
  let line = lines[x];
  let common = [...commonItem(line)][0];
  console.log(`line: ${line}     commonItem: ${common}     priority: ${priority(common)}`);
  sum += priority(common);
}

console.log(sum);
