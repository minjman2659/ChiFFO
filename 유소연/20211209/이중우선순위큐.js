function solution(operations) {
  const arr = [];
  
  for (let op of operations) {
      let [operation, number] = op.split(' ');
      number = parseInt(number)
      
      if (operation === 'I') {
          arr.push(number);
          arr.sort((a, b) => a - b);
          continue;
      }
      
      if (number === 1) {
          arr.pop();
      } else {
          arr.shift();
      }
  }
  
  return arr.length === 0 ? [0, 0] : [arr[arr.length - 1], arr[0]]
}