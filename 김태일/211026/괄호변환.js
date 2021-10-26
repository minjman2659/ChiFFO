function solution(p) {
  var answer = '';
  if (p === '') return p;
  
  let count = 0;
  let u = '';
  let v = '';
  let check = true;
  for (let i = 0; i < p.length; i++) {
      if (p[i] === '(') {
          count += 1;
          u += p[i];
      } else {
          count -= 1;
          u += p[i];
          if (count < 0) check = false;
      }
      if (count === 0) {
          v = p.substring(i + 1);
          break;
      }
  }
  
  if (v === '' && check) {
      return p;
  }
  if (check) {
      return u += solution(v);
  } else {
      let str = '(' + solution(v) + ')';
      u = u.substring(1, u.length - 1);
      for (let i = 0; i < u.length; i++) {
          if (u[i] === '(') str += ')';
          else str += '(';
      }
      return str;
  }
}