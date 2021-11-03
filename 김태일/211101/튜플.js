function solution(s) {
  let answer = [];
  s.slice(2, s.length - 2)
    .split('},{')
    .map((str) => str.split(',').map(Number))
    .sort((a, b) => a.length - b.length)
    .forEach((arr) => {
      arr.forEach((v) => {
        if (!answer.includes(v)) {
          answer.push(v);
        }
      })
    })
  return answer;
}

// function solution(s) {
//   const arr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
//   .sort((a, b) => a.length - b.length).flat();
//   console.log(arr);
//   return [...new Set(arr)];
// }

let s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
console.log(solution(s));