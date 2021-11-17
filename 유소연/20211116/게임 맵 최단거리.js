// DFS 효율성 테스트 실패
// BFS로 풀기

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue = [[0, 0]];

  while (queue.length > 0) {
    let [x, y] = queue.shift();
    for (let move of moves) {
      let [diffX, diffY] = move;
      let moveX = x + diffX;
      let moveY = y + diffY;
      if (
        moveX < 0 ||
        moveX >= n ||
        moveY < 0 ||
        moveY >= m ||
        maps[moveX][moveY] !== 1
      )
        continue;
      maps[moveX][moveY] = maps[x][y] + 1;
      queue.push([moveX, moveY]);
    }
  }

  const answer = maps[n - 1][m - 1];
  return answer !== 1 ? answer : -1;
}
