const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

const line = input.split(/\r?\n/)[0];

//const line = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
//const line = 'nppdvjthqldpwncqszvftbrmjlhg';
//const line = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
//const line = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';

let array = line.split('');

function isAllUnique(array) {
  const noDups = new Set(array);
 // console.log('nodups', noDups);
//  console.log('isallunique: ', array);
  return array.length == noDups.size;
}

for (let i = 0; i < array.length - 14; i++) {
  let currentWindow = line.slice(i, i + 14);
  console.log('currentWindow: ', currentWindow);
  if (isAllUnique(currentWindow)) {
    console.log('first marker after ', i+14);
    break;
  }
}


