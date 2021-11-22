function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
      let move = s.slice(i) + s.slice(0, i);
      if (correctBracket(move)) answer++;
  }
  return answer;
}

function correctBracket(s) {
  const pair = {
      ']': '[',
      '}': '{',
      ')': '('
  }
  const stack = [];
  
  for (let i of s) {
      if (!pair[i]) {
          stack.push(i);
      } else if (stack.length !== 0 && pair[i] === stack[stack.length - 1]) {
          stack.pop();
      } else {
          return false;
      }
  }
  return stack.length === 0;
}