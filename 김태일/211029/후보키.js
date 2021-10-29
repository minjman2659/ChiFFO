const solution = (relation) => {
  const cols = relation[0].length;
  const check = 1 << cols;
  let answer = new Set();

  for (let i = 1; i < check; i++) {
    let temp = relation.map(x => x.filter((el, col) => i & (1 << col)).join(''));
    const set = new Set(temp);

    if (temp.length === set.size) {
      answer.add(i);
    }
  }

  for (let x of answer) {
    for (let y of answer) {
      if (x >= y) {
        continue;
      }
      if ((x & y) === x) {
        answer.delete(y);
      } 
    }
  }
  return answer.size;
}

let relation = [
  ["100","ryan","music","2"],
  ["200","apeach","math","2"],
  ["300","tube","computer","3"],
  ["400","con","computer","4"],
  ["500","muzi","music","3"],
  ["600","apeach","music","2"]];
console.log(solution(relation));

// 학번, 이름, 학년, 전공 개체타입이라면 1은 학번 10은 이름 ... 1000은 전공
// 각각의 index만큼 1을, shift한 값과 일치하기 때문에 1<<index로 표현 가능