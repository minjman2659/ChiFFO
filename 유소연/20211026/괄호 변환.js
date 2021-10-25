function solution(p) {
  if (p === '') return '';

  let left = 0, right = 0;
  let u = '', v = '';

  let check = false;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') left++;
    if (p[i] === ')') right++;

    if (left < right) check = true;

    if (left === right) {
      if (!check) {
        u = p.slice(0, i + 1);
        v = p.slice(i + 1, p.length);
        return u + solution(v);

      } else {
        u = p.slice(0, i + 1);
        v = p.slice(i + 1, p.length);

        let str = '';

        for (let j = 1; j < u.length - 1; j++) {
          if (u[j] === '(') str += ')';
          if (u[j] === ')') str += '(';
        }

        return '(' + solution(v) + ')' + str;
      }
    }
  }
}