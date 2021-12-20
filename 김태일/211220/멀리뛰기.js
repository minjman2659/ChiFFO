const solution = (n) => {
    const dp = [0, 1, 2];
    for(let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }
    return dp[n];
}

// 점화식 문제
// n = n1 + n2;