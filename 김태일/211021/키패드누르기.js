const distance = (num, lp, rp, hand) => {
  const keypads = {
      1: [0, 0], 2: [0, 1], 3: [0, 2],
      4: [1, 0], 5: [1, 1], 6: [1, 2],
      7: [2, 0], 8: [2, 1], 9: [2, 2],
      '*': [3, 0], 0: [3, 1], '#': [3, 2]
  };
  const ld = Math.abs(keypads[lp][0] - keypads[num][0]) + 
        Math.abs(keypads[lp][1] - keypads[num][1]);
  const rd = Math.abs(keypads[rp][0] - keypads[num][0]) + 
        Math.abs(keypads[rp][1] - keypads[num][1]);
  
  if (ld === rd) {
      return hand === 'left' ? 'L' : 'R';
  }
  return ld < rd ? 'L' : 'R';
}

const solution = (numbers, hand) => {
  let answer = '';
  let leftPosition = '*';
  let rightPosition = '#';
  
  for (let number of numbers) {
      if (number % 3 === 1) {
          answer += 'L';
          leftPosition = number;
      } else if (number !== 0 && number % 3 === 0) {
          answer += 'R';
          rightPosition = number;
      } else {
          answer += distance(number, leftPosition, rightPosition, hand);
          answer[answer.length - 1] === 'L' ? leftPosition = number : rightPosition = number;
      }
  }
  
  return answer;
}