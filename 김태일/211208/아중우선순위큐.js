const solution = (operations) => {
    let answer = [];
    let maxNum = -99999999;
    let minNum = Infinity;
    let queue = [];

    operations.forEach((el, idx) => {
        let temp = el.split(' ');
        ;
        if (queue.length === 0 && temp[0] === 'D') {
            return
        }

        if (queue.length === 1) {
            minNum = queue[0];
            maxNum = queue[0]; 
        }

        if (temp[0] === 'I') {
            queue.push(+temp[1]);
            if (maxNum < +temp[1]) maxNum = +temp[1];
            if (minNum > +temp[1]) minNum = +temp[1];
        } else if (temp[0] === 'D' && temp[1] === '1') {
            queue = queue.filter((el) => el !== maxNum);
            maxNum = Math.max(...queue);
        } else if (temp[0] === 'D' && temp[1] === '-1') {
            queue = queue.filter((el) => el !== minNum);
            minNum = Math.min(...queue);
        }
        console.log(queue, maxNum, minNum) 
    })   
    if (queue.length === 0) {
        maxNum = 0;
        minNum = 0;
    }
    answer = [maxNum, minNum]
    return answer;
}

let operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"];
console.log(solution(operations));