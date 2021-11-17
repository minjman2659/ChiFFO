function bfs(n, m, edges, s) {
  // Write your code here
  const result = new Array(n).fill(-1);
  result[s - 1] = 0;
  const vertex = {};
  for (let i = 1; i <= n; i++) {
      vertex[i] = new Set();
  }
  
  for (let edge of edges) {
      vertex[edge[0]].add(edge[1]);
      vertex[edge[1]].add(edge[0]);
  }
  
  const queue = [s];
  const check = {};
  while (queue.length > 0) {
      let now = queue.shift();
      
      for (let node of vertex[now]) {
          if (!check[node] || result[node - 1] > result[node - 1] + 1) {
              queue.push(node)
              check[now] = true;
              result[node - 1] = result[now - 1] + 1;
          }
      }
  }
  return result.filter(el => el !== 0).map((el) => {
      return el !== -1 ? el * 6 : -1;
  })
}