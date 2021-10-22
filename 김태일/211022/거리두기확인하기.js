const isRange = (x, y) => {
  let size = 5;
  return 0 <= x && x < size && 0 <= y && y < size;
}

const solution = (places) => {
  let answer = [];
  for (let place of places) {
    let flag = 0;
    console.log(place)
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        
        if (place[i][j] === "P") {
          if ((isRange(i + 1, j) && place[i + 1][j]) === "P") {
            flag = 1;
          }
          if ((isRange(i + 2, j) && place[i + 2][j]) === "P" && place[i + 1][j] !== 'X') {
            flag = 1;
          }
          if ((isRange(i, j + 1) && place[i][j + 1]) === "P") {
            flag = 1;
          } 
          if ((isRange(i, j + 2) && place[i][j + 2]) === "P" && place[i][j + 1] !== 'X') {
            flag = 1;
          }
          if ((isRange(i + 1, j + 1) && place[i + 1][j + 1]) === "P" && place[i + 1][j] !== 'X' && place[i][j + 1] !== 'X') {
            flag = 1;
          }
          if ((isRange(i + 1, j - 1) && place[i + 1][j - 1]) === "P" && place[i][j - 1] !== 'X' && place[i + 1][j] !== 'X') {
            flag = 1;
          }
        }
      }
    }
    if (flag !== 0) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  }
  return answer;
}

// test case 5, 11, 16 통과 못함