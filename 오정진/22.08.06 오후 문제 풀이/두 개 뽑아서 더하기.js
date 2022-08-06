function solution(numbers) {
	const temp = [];

	for (var i = 0; i < numbers.length; i++) {
		for (var j = i + 1; j < numbers.length; j++) {
			temp.push(numbers[i] + numbers[j]);
		}
	}
	const answer = [...new Set(temp)];
	return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
