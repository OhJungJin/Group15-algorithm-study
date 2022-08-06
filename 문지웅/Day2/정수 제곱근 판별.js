function solution1(n) {
  for (let i = 1; i < n; i++) {
    if (i * i > n) break;
    if (i * i == n) {
      return (i + 1) * (i + 1);
    }
  }
  return -1;
}

function solution2(n) {
  let answer = 0;
  let num = Math.sqrt(n);
  num % 1 === 0 ? (answer = (num + 1) * (num + 1)) : (answer = -1);
  return answer;
}

a = solution1(144);
console.log(a);
// b = solution2(4);
// console.log(b);
