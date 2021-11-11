//insert
const solution = (n, arr1, arr2) => {
  let answer = [];

  for (let i = 0; i < n; i++) {
    const bin = (arr1[i] | arr2[i]).toString(2); // 두 피연산자의 각 자리 비트의 값이 하나라도 1이면 1을 반환합니다.
    let line = [];

    for (let j = bin.length - n; j < bin.length; j++) {
      if (bin[j] === '1') {
        line.push('#');
      } else {
        line.push(' ');
      }
    }
    answer.push(line.join(''));
  }
  return answer;
}
