const solution = (n, s) => {
    if (n > s) return [-1];
    let mid = Math.floor(s / n);
    let answer = new Array(n).fill(mid);

    for (let i = 0; i < s % n; i ++) {
        answer[answer.length - 1 - i] += 1;
    }
    return answer;
}