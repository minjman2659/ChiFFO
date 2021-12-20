function solution(A, B) {
    let answer = 0;
    let idx = 0;
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    
    for(let i = 0; i < A.length; i++) {
        if (B[idx] > A[i]) {
            answer++;
            idx++;
        }
    }
    
    return answer;
}