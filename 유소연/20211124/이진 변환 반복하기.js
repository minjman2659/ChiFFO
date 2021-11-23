function solution(s) {
  let zeroCount = 0;
  let changeCount = 0;
  
  while(s !== '1') {
      let sLen = s.length;
      let changeLen = s.replace(/0/g, '').length;
      zeroCount += sLen - changeLen;
      s = changeLen.toString(2);
      changeCount++;
  }

  return [changeCount, zeroCount];
}