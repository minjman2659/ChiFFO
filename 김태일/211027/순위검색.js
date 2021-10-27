const combination = (el, score, obj, start) => {
  let key = el.join('');
  let value = obj[key];

  if (value) {
    obj[key].push(score);
  } else {
    obj[key] = [score];
  }

  for (let i = start; i < el.length; i++) {
    let combiArr = [...el];
    combiArr[i] = '-';

    combination(combiArr, score, obj, i + 1);
  }
}

const binarySearch = (obj, key, score) => {
  let scoreArr = obj[key];
  
  if (scoreArr) {
    let start = 0;
    let end = scoreArr.length;

    while (start < end) {
      let mid = Math.floor((start + end) / 2);

      if (scoreArr[mid] >= score) {
        end = mid;
      } else if (scoreArr[mid] < score) {
        start = mid + 1;
      }
    }
    return scoreArr.length - start;
  } else {
    return 0
  }
}

const solution = (info, query) => {
  let answer = [];
  let obj = {};

  // - 로 가능한 조합 만들기
  for (let i = 0; i < info.length; i++) {
    let el = info[i].split(' ');
    let score = el.pop();
    combination(el, score, obj, 0);
  }

  // 이분탐색을 위한 정렬
  for (let key in obj) {
    obj[key].sort((a, b) => a - b);
  }

  // 이분탐색 실행
  for (let i = 0; i < query.length; i++) {
    let qEl = query[i].replace(/ and /g, '').split(' ');
    let score = Number(qEl.pop());

    answer.push(binarySearch(obj, qEl.join(''), score));
  }

  return answer;
}