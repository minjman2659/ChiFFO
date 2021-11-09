function solution(n, t, m, p) {
  let numString = '';
  let result = ''
  let num = 0;

  while (numString.length < t * m) {
    numString += num.toString(n);
    num++;
  }

  result = numString.slice(0, t * m).split('').filter((el, idx) => idx % m === p - 1).join('')

  return result.toUpperCase();
}