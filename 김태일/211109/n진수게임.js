const solution = (n, t, m, p) => {
  let answer = '';
  let str = '';
  for (let i = 0; i <= m * t; i++) {
    str += i.toString(n).toUpperCase();
  }
  str = str.slice(0, m*t);

  answer = str.split('').filter((el, idx) => idx % m === p - 1).join('');
  return answer;
}