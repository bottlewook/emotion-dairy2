function solution(arr) {
  let answer = arr[0];
  for (let x of arr) {
    if (answer > x) {
      answer = x;
    }
  }
  return answer;
}

let arr = [5, 7, 11, 3, 2, 9, 11];
console.log(solution(arr));
