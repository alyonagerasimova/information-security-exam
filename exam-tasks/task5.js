const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let notesCount = 0;
let i = 0;
let queriesCount = 0;
let query = [];
let notes = [];

function calculateCount(countStart, end){
  let count = countStart;
  for (let i = 0; i < end; i++) {
    count += +(notes[3 * i] + notes[3 * i + 2]);
  }
  return count;
}

function task5(notes, query) {
  let count = query;
  let hours = 0;
  if (calculateCount(count, notesCount) < 0) {
    return "INFINITY";
  }
  for (let i = 0; i < notesCount - 1; i++) {
    count += +(notes[3 * i] + notes[3 * i + 2]);
    let nextCount = count;
    if (count < 0){
      for(let j = i+1; j < notesCount; j++){
        nextCount += +(notes[3 * j] + notes[3 * j + 2]);
        if ( nextCount > count ) {
          hours += notes[3 * j + 1] - notes[3 * i + 1];
        }
      }
    }

  }
  return hours;
}

process.stdin.on("end", () => {
  process.exit(0);
});

rl.on("line", function (data) {
  if (!notesCount && !queriesCount) {
    [notesCount, queriesCount] = data.split(' ').map(Number);
    return;
  }

  if (i < notesCount) {
    notes = data.split(' ');
    i++;
    return;
  }

  if (!query) {
    query = data.split(' ');
    console.log(task5(notes, query));

  }
});

// let notes = ["-", 1, 1, "-", 2, 2, "+", 4, 1, "-", 6, 1, "+", 7, 2];
// let query = [0, 3, 1, 2];
// console.log(task5(notes, query));
