const solution = (a) => {
    let answer = 0;
    let size = a.length;
    let left = Array(size).fill(0);
    let right = Array(size).fill(0);
    
    left[0] = a[0];
    right[size - 1] = a[size - 1];

    // 왼쪽부터 도는 배열
    for (let i = 0; i < size; i++) {
        if (a[i] > left[i - 1]) {
            left[i] = left[i - 1];
        } else {
            left[i] = a[i];
        }
    }

    // 오른쪽부터 도는 배열
    for (let i = size - 2; i >= 0; i--) {
        if (right[i + 1] < a[i]) {
            right[i] = right[i + 1];
        } else {
            right[i] = a[i];
        }
    }

    for (let i = 1; i < size - 1; i++) {
        if (left[i - 1] < a[i] && a[i] > right[i + 1]) {
            continue;
        }
        answer += 1;
    }
    answer += 2;
    return answer;
}