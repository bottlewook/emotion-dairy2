function solution(s) {
  let answer = "";
  if (s.length % 2 === 1) {
    answer = s.substr(Math.floor(s.length / 2), 1);
  } else {
    answer = s.substr(Math.floor(s.length / 2 - 1), 2);
  }
  return answer;
}
console.log(solution("choo"));
