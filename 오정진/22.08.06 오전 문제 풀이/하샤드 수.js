function solution(x) {
	let answer = true;
	const Harshad = (x + "")
		.split("")
		.map((n) => +n)
		.reduce((acc, curr) => acc + curr);
	if (x % Harshad !== 0) {
		answer = false;
	}

	return answer;
}
