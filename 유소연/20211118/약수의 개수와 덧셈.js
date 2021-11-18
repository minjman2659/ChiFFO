function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
      result = Math.sqrt(i) % 1 === 0 ? result - i : result + i;
  }
  return result;
}

// const divisorCnt = (n) => {
//   let count = 0;
//   for (let i = 1; i * i <= n; i++) {
//       if (n % i === 0) {
//           count = i * i === n ? count + 2 : count + 1;
//       } 
//   }
//   return count;
// }