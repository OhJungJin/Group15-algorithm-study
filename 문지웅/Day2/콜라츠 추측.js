function solution(num) {
  var answer = 0;
  while (num != 1) {
    num = num % 2 == 0 ? num / 2 : num * 3 + 1;
    answer++;
  }
  answer >= 500 ? (answer = -1) : answer;

  return answer;
}

let result = solution(6);
console.log("result: ", result);
