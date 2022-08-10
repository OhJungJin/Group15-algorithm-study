// 소수 찾기

// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.

// 입출력 예
// n	result
// 10	4
// 5	3

// 입출력 예 설명

// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

function isPrime(n) {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;

  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= parseInt(sqrt); i += 2) {
    if (n % i == 0) return false;
  }

  return true;
}

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) answer++;
  }

  return answer;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3

// function solution(n) {
//   const s = new Set();
//   for (let i = 1; i <= n; i += 2) {
//     s.add(i);
//   }
//   s.delete(1);
//   s.add(2);
//   for (let j = 3; j < Math.sqrt(n); j++) {
//     if (s.has(j)) {
//       for (let k = j * 2; k <= n; k += j) {
//         s.delete(k);
//       }
//     }
//   }
//   return s.size;
// }
