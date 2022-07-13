function solution(s) {
  let answer = s[0].length;
  for (let x of s) {
    if (answer < x.length) {
      answer = x;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
