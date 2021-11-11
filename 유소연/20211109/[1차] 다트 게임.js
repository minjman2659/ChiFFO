function solution(dartResult) {
  const result = dartResult.match(/\d+[SDT][*#]?/g);
  const scoreList = [];

  for (let i = 0; i < result.length; i++) {
    const score = result[i].match(/\d+/g)[0];
    const bonus = result[i].match(/[SDT]/g)[0];
    const option = result[i].match(/[*#]/g) && result[i].match(/[*#]/g)[0];

    if (bonus === 'S') {
      scoreList.push(+score)
    } else if (bonus === 'D') {
      scoreList.push(score ** 2)
    } else if (bonus === 'T') {
      scoreList.push(score ** 3)
    }

    if (option === '*') {
      if (i > 0) {
        scoreList[i - 1] *= 2;
      }
      scoreList[i] *= 2;

    } else if (option === '#') {
      scoreList[i] = -scoreList[i]
    }

  }
  return scoreList.reduce((a, b) => a + b, 0)
}