const solution = (board, moves) => {
  let answer = 0;
  let basket = [];
  let doll = 0;

  for (let move of moves) {
    for (let line of board) {
      if (line[move - 1] > 0) {
        doll = line[move - 1];
        basket.push(doll);
        line[move - 1] = 0;
        break;
      }
    }
    
    if (basket.length > 1 && basket[basket.length - 2] === basket[basket.length - 1]) {
      basket = basket.slice(0, -2);
      answer += 2;
    }
  }
  return answer;
}

let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));