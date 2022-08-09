function solution(n, m) {
	let answer = [];

	let gcd = 0;
	let lcm = 0;

	let num = n > m ? n : m;
	for (let i = 1; i <= num; i++) {
		if (n % i == 0 && m % i == 0) {
			gcd = i;
		}
	}

	lcm = (n * m) / gcd;
	answer = [gcd, lcm];

	return answer;
}

// 두 수의 곱 = 최대공약수 * 최소공배수
// n * m = gcd *lcmL
