function solution(n, m) {
  var answer = [];
  let G = 0;
  let L = 0;

  let max = n - m > 0 ? n : m;
  for (let i = 1; i < max; i++) {
    if (n % i === 0 && m % i === 0) G = i;
  }
  // 두 수의 곱 = 최대공약수 * 최소공배수
  // A = a* G , B = b* G , L = a*b*G
  // A * B = L * G
  L = (n * m) / G;

  answer = [G, L];

  return answer;
}
