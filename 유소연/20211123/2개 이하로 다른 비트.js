function solution(numbers) {
  return numbers.map(el => {
      if (el % 2 === 0) return el + 1;
      let binaryNum = '0' + el.toString(2);
      for (let i = binaryNum.length - 1; i >= 0; i--) {
          if (binaryNum[i] === '0') {
              return parseInt(binaryNum.slice(0, i) + '10' + binaryNum.slice(i + 2), 2)
          }
      }
  })
}