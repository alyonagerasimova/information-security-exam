const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function task1(line){
  const [a, b, x, y] = line.split(' ').map(Number);
  [x,y].sort();
  return a - x + b - y;
  // let min = 0;
  // let result;
  // if (a < x || a < y){
  //   min = a;
  //   result = b - a - Math.abs(x - y) - 1;
  // }else if(x < y){
  //   min = x;
  //   result = a - min + (b - y);
  // }else if(y < x){
  //   min = y;
  //   result = a - min + (b - x);
  // }
  // return result;
}

let line;
process.stdin.on("end", () => {
  console.log(task1(line));
  process.exit(0);
});

rl.on("line", function (data) {
    if (!line) {
        line = data;
    }
});

// let line = '3 10 8 2';
// console.log(task1(line));