function solution(n) {
  // 풀이 참고했습니다..
  // n = 1일 경우, 그저 src에서 dst로 옮기기
  // n >= 2일 경우, mid에 잠시 옮겨두었다가 dst로 옮겨야함
  //    src -> mid -> dst
  // 점화식을 사용해 구하면 된다...어렵다...
  var answer = [];
  
  const dp = (n, src, dst, mid) => {
      if (n === 1) {
          answer.push([src, dst]);
      } else {
          dp(n - 1, src, mid, dst);
          answer.push([src, dst]);
          dp(n - 1, mid, dst, src);
      }
  }
  
  dp(n, 1, 3, 2);
  return answer;
}