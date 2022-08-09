function cntNum(num) {
  let cnt = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      cnt++;
    }
  }
  return cnt;
}

function solution(left, right) {
  var answer = 0;
  let temp = 0;
  for (let i = left; i <= right; i++) {
    temp = cntNum(i);
    temp % 2 == 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
