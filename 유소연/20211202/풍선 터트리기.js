function solution(a) {
  const alive = new Set();
  let leftMin = a[0];
  let rightMin = a[a.length - 1];
  
  for (let i = 1; i < a.length - 1; i++) {
      if (a[i] < leftMin) {
          alive.add(a[i])
          leftMin = a[i];
      };
      if (a[a.length - i - 1] < rightMin) {
          alive.add(a[a.length - i - 1])
          rightMin = a[a.length - i - 1]
      }
  }

  return alive.size + 2;
}