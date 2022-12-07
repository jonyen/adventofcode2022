const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

const lines = input.split(/\r?\n/);
/*const lines = ['vJrwpWtwJgWrhcsFMMfFFhFp',
'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
'PmmdzqPrVvPwwTWBwg', 
'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
'ttgJtRGJQctTZtZT',
'CrZsJsPPZsGzwwsLwLmpwMDw',
'']; */

function intersectSets(setA, setB) {
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

function badge(group) {
 /* console.log(group[0]);
  console.log(group[1]);
  console.log(group[2]);
  console.log(intersectSets(new Set(group[0]), new Set(group[1]))); */
  return intersectSets(intersectSets(new Set(group[0]), new Set(group[1])), new Set(group[2]));
}

const priorities = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function priority(item) {
  return priorities.split('').indexOf(item);
}

//console.log([...commonItem(lines[0])][0]);

//console.log(priority('p'));

let sum = 0;
let group = [];
let groupBadge;
for (let x = 0; x <= lines.length; x++) {
  let line = lines[x];
  console.log('line', line);
  console.log('groupsize', group.length);
  if (group.length < 3) {
    group.push(line); 
  }

  if (group.length === 3) { 
    console.log('group', group);
    groupBadge = badge(group);
    console.log(groupBadge);
    sum += priority([...groupBadge][0]);
    group = [];
  }
 // let common = [...commonItem(line)][0];
//  console.log(`line: ${line}     commonItem: ${common}     priority: ${priority(common)}`);
//  sum += priority(common);
}

console.log(sum);
