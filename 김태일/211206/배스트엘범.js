const solution = (genres, plays) => {
    let answer = [];
    let song = genres.reduce((el, genre, idx) => {
        if (!el[genre]) {
            el[genre] = {count : plays[idx], index : []};
        } else {
            el[genre].count += plays[idx];
        }
        el[genre].index.push([idx, plays[idx]]);
        return el;
    }, {})
    
    let sorted = Object.values(song).sort((a, b) => b.count - a.count);

    sorted.forEach((obj) => {
        if (obj.index.length > 1) {
            obj.index.sort((a, b) => {
                if (a[1] > b[1]) return -1;
                else return 1;
            })
            answer.push(obj.index[0][0]);
            answer.push(obj.index[1][0]);
        } else {
            answer.push(obj.index[0][0]);
        }
    })

    return answer;
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));
