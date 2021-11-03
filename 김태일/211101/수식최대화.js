function solution(expression) {
  const priors = [
      ['+','-','*'],['+','*','-'],['*','-','+'],
      ['*','+','-'],['-','+','*'],['-','*','+']
    ];
  
  let answer = [];

  for (let prior of priors) {
    const temp = expression.split(/(|D)/)
    for (let exp of prior) {
      while (temp.includes(exp)) {
        const idx = temp.indexOf(exp)
        temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join('')))
      }
    }
    answer.push(Math.abs(temp[0]))
  }

  return Math.max(...answer);
}