const solution = (dartResult) => {
  let answer = [];
  for (let i = 0; i < dartResult.length; i+=1) {
    if (dartResult[i] >='0' && dartResult[i] <='9') {
      if (dartResult[i] =='1' && i + 1 < dartResult.length && dartResult[i+1] == '0') {
        answer.push(10);
        i+=1;
      }else{
        answer.push(+dartResult[i]);
      }
    }
    if (dartResult[i] === 'D') {
        let last = answer[answer.length - 1];
        answer[answer.length-1]=Math.pow(last, 2);
    } else if (dartResult[i] === 'T') {
        let last = answer[answer.length - 1];
        answer[answer.length-1] = Math.pow(last, 3);
    }
    if (dartResult[i] === '*') {
        answer[answer.length - 1]*= 2;
        if(answer.length >= 2){
            answer[answer.length-2]*= 2;
        }
    }
    if (dartResult[i] === '#') {
        answer[answer.length - 1]*= -1;
      }
    }
    return answer.reduce((acc,cur) => acc + cur, 0);
}

// function solution(dartResult) {
//   const bonus = { 'S': 1, 'D': 2, 'T': 3 },
//         options = { '*': 2, '#': -1, undefined: 1 };

//   let darts = dartResult.match(/\d.?\D/g);

//   for (let i = 0; i < darts.length; i++) {
//       let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
//           score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

//       if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

//       darts[i] = score;
//   }

//   return darts.reduce((a, b) => a + b);
// }