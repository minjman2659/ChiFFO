const solution = (str1, str2) => {
  let answer = 0;

  let lowStr1 = str1.toLowerCase();
  let lowStr2 = str2.toLowerCase();

  let str1Arr = [];
  let str2Arr = [];
  let sectionArr = [];

  let rex = /^[a-zA-Z]*$/;

  for (let i = 0; i < lowStr1.length - 1; i++) {
    let tempStr = lowStr1.slice(i, i + 2);
    if (rex.test(tempStr)) {
      str1Arr.push(lowStr1.slice(i, i + 2));
    }
  }

  for (let i = 0; i < lowStr2.length - 1; i++) {
    let tempStr = lowStr2.slice(i, i + 2);
    if (rex.test(tempStr)) {
      str2Arr.push(lowStr2.slice(i, i + 2));
    }
  }

  for (let el of str1Arr) {
    if (str2Arr.indexOf(el) >= 0) {
      sectionArr.push(el);
      str2Arr.splice(str2Arr.indexOf(el), 1);
    }
  }

  if (str1Arr.length === 0 && str2Arr.length === 0) return 65536;
  answer = Math.floor((sectionArr.length / (str1Arr.length + str2Arr.length)) * 65536);

  return answer
}


/* 
대소문자를 구별하지 않는 조건을 위해 소문자로 전체 문자열 변경
각각의 문자열에서 2개씩 읽어가면서 조건 "알파벳으로만 이루어짐"에 따라 정규식만들고 아닌것은 쳐냄(각각 A, B 집합)
자카드 유사도를 위해 합집합과 교집합을 구하는데, A 기준으로 B에도 있는건 교집합(Intersection), 그리고 B에서 제거
자카드 유사도 식 ( 교집합 / 합집합)에 넣고 처리.
*/

let str1 = 'FRANCE';
let str2 = 'french';
console.log(solution(str1, str2));