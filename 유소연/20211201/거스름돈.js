// 풀이 참고했습니다..^^
function solution(n, money) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  
  for (let m of money) {
      for (let i = 0; i <= n; i++) {
          if (i >= m) {
              dp[i] += dp[i - m] % 100000007 // 효율성 테스트 5 -> 마지막에만 나눌 필요 없음
          }
      }    
  }
  
  return dp[n];
}