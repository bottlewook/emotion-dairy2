function solution(a, b, c) {
  let answer = "Yes",
    sum = a + b + c,
    max;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  if (sum - max <= max) {
    answer = "No";
  }
  return answer;
}

console.log(solution(13, 11, 2));
