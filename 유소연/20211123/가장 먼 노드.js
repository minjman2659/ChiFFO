function solution(n, edge) {
  const vertex = {};
    
  for (let i = 1; i <= n; i++) {
    vertex[i] = [];
  }
    
  for (let e of edge) {
    vertex[e[0]].push(e[1]);
    vertex[e[1]].push(e[0]);
  }
        
  return bfs(vertex, 1, n);
}

function bfs(vertex, start, n) { 
  let level = new Array(n + 1).fill(0);
  let lev = 0
  let check = {}
  const queue = [start];
  check[start] = true;

  while (queue.length > 0) {
    
    let now = queue.shift();
    lev = level[now] + 1;

    for (let i = 0; i < vertex[now].length; i++) {
      if (!check[vertex[now][i]]) {
        queue.push(vertex[now][i]);
        check[vertex[now][i]] = true;
        level[vertex[now][i]] = lev;
      }
    }
  }
  return level.filter((el) => el === Math.max(...level)).length;
  
}