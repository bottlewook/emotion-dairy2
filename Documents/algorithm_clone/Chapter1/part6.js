function solution(arr) {
  let sum = 0;
  answer = [];
  min = arr[1];
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (min > x) {
        min = x;
      }
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
