function solution(N, stages) {
	var answer = [];
	var fail_arr = [];
	var total = stages.length;

	for (var i = 1; i <= N; i++) {
		var cnt = 0;
		for (var j = 0; j < stages.length; j++) {
			if (i == stages[j]) {
				cnt++;
			}
		}
		fail_arr.push({ per: cnt / total, idx: i });
		total -= cnt;
	}

	fail_arr.sort(function (a, b) {
		return b["per"] - a["per"];
	});

	for (var i = 0; i < fail_arr.length; i++) {
		answer.push(fail_arr[i].idx);
	}

	return answer;
}
