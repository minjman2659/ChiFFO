// https://programmers.co.kr/learn/courses/30/lessons/72412

// 효율성 실패 => 다시 풀어봐야 함
function solution(info, query) {
  const result = [];

  const userInfo = info.map((el) => {
    let obj = {};
    let user = el.split(' ');
    obj['lang'] = user[0];
    obj['job'] = user[1];
    obj['career'] = user[2];
    obj['food'] = user[3];
    obj['score'] = user[4];
    return obj;
  });

  let count = 0;
  for (let el of query) {
    let tmp = el.split(' ').filter((ele) => ele !== 'and');
    for (let obj of userInfo) {
      if (
        (obj['lang'] === tmp[0] || tmp[0] === '-') &&
        (obj['job'] === tmp[1] || tmp[1] === '-') &&
        (obj['career'] === tmp[2] || tmp[2] === '-') &&
        (obj['food'] === tmp[3] || tmp[3] === '-') &&
        Number(obj['score']) >= Number(tmp[4])
      ) {
        count++;
      }
    }
    result.push(count);
    count = 0;
  }

  return result;
}
