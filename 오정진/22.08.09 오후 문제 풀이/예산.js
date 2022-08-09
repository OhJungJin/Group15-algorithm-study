function solution(d, budget) {
	var answer = 0;
	d.sort((a, b) => a - b);
	console.log(d);
	for (let i = 0; i < d.length; i++) {
		if (d[i] <= budget) {
			budget -= d[i];
			answer++;
		}
	}
	return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
