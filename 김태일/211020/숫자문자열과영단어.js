const solution = (s) => {
  let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  // for (let i = 0; i < words.length; i++) {
  //   s = s.replace(words[i], i)
  // }
  
  // return Number(s);

  for (let i = 0; i < words.length; i++) {
    let regex = new RegExp(words[i], 'g');
    s = s.replace(regex, i);
  }
  return Number(s);
}

let s = "oneoneoneone";
console.log(solution(s))