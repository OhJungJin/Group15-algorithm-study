// 원래 처음에 적은 답
function solution(n) {
	var answer = 0;
	answer += n.toString(3).split("").reverse().join("");
	return parseInt(answer, 3);
}

console.log(solution(45));

// 더 짧게 수정한 답.
function solution(n) {
	return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

console.log(solution(45));
