function solution(new_id) {
	var answer = "";
	var able = "abcdefghijklmnopqrstuvwxyz0123456789-_.";
	new_id = new_id.toLowerCase().replace();
	var dot_count = 0;
	for (var i of new_id) {
		if (able.indexOf(i) != -1) {
			if (i != ".") {
				answer += i;
				dot_count = 0;
			} else if (answer != "" && dot_count == 0) {
				answer += i;
				dot_count++;
			}
		}
	}
	if (answer.length != 0)
		if (answer[answer.length - 1] == ".")
			answer = answer.slice(0, answer.length - 1);
	if (answer == "") answer = "a";
	if (answer.length > 15) answer = answer.slice(0, 15);
	if (answer.length != 0)
		if (answer[answer.length - 1] == ".")
			answer = answer.slice(0, answer.length - 1);
	while (answer.length < 3) answer += answer[answer.length - 1];
	return answer;
}
