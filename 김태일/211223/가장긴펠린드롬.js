const solution = (s) => {
    let answer = 1;
    const stringLength = s.length;

    const dp = new Array(stringLength).fill().map(_ => new Array(stringLength).fill(false));


    // 자기자신은 팰린드롬
    for(let i = 0; i < stringLength; i++) {
        dp[i][i] = true;
    }

    // 길이가 2인 팰린드롬
    for(let i = 0; i < stringLength - 1; i++) {
        if(s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            answer = 2;
        }
    }

    // 길이가 3이상 팰린드롬
    for(let i = 3; i <= stringLength; i++) {
        for(let start = 0; start <= stringLength - i; start++) {
            const end = start + i - 1;
            if(s[start] === s[end] && dp[start + 1][end - 1]) {
                dp[start][end] = true;
                answer = Math.max(answer, i);
            }
        }
    }
    // console.log(dp);

    return answer;
}

let s = 'abacde';
console.log(solution(s));