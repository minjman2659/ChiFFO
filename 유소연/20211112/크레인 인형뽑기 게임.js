function solution(board, moves) {
  const n = board.length;
  let bucket = [];
  let count = 0;

  const pickDoll = (move) => {
    for (let i = 0; i < n; i++) {
      let type = board[i][move];
      if (type !== 0) {
        bucket.push(type);
        board[i][move] = 0;
        return;
      }
    }
  }

  const popDoll = () => {
    const len = bucket.length;
    if (len >= 2 && bucket[len - 1] === bucket[len - 2]) {
      bucket = bucket.slice(0, len - 2);
      count += 2;
    }

  }

  for (let move of moves) {
    pickDoll(move - 1);
    popDoll();
  }

  return count;
}