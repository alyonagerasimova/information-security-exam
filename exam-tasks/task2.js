const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function task2(firstLine,secondLine){
  let [W, H] = firstLine.split(' ').map(Number);
  let [w, h] = secondLine.split(' ').map(Number);
  let startArr = [];
  startArr.push(W,H);
  startArr.sort( (a, b) => a - b);
  let purposeArr = [];
  purposeArr.push(w,h);
  purposeArr.sort( (a, b) => a - b);
  
  let count = 0;
  if((purposeArr[0] > startArr[0] && purposeArr[0]> startArr[1]) || (purposeArr[1] > startArr[0] && purposeArr[1] > startArr[1])){
    return -1;
  }

  while(startArr[0] !== purposeArr[0] || startArr[1] !== purposeArr[1]){
    let halfW = Math.round(startArr[0] / 2);
    let halfH = Math.round(startArr[1] / 2);
    if(startArr[0] - purposeArr[0] >= halfW){
      count++;
      startArr[0] = halfW;
    }else if(startArr[1] - purposeArr[1] >= halfH){
      count++;
      startArr[1] = halfH;
    }else {
      if(startArr[0] > purposeArr[0]){
        count++;
        startArr[0] = purposeArr[0];
      }
      if(startArr[1] > purposeArr[1]){
        count++;
        startArr[1] = purposeArr[1];
      }
    }
  }
  return count;
}

let firstLine, secondLine;

process.stdin.on("end", () => {
  console.log(task2(firstLine, secondLine));
  process.exit(0);
});

rl.on("line", function (data) {
    if (!firstLine) {
        firstLine = data;
    } else {
        secondLine = data;
    }
});

// let firstLine = '5 5';
// let secondLine = '1 6';
// console.log(task2(firstLine, secondLine));