function solution(routes) {
  let camera = -30001;
  let count = 0;
  
  routes.sort((a, b) => a[1] - b[1]);
  for (let route of routes) {
      if (route[0] > camera) {
          camera = route[1];
          count++;
      }
  }
  return count;
}