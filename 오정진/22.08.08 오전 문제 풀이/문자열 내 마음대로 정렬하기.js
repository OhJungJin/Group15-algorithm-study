function solution(strings, n) {
	return strings.sort((a, b) => {
		if (a.charCodeAt(n) > b.charCodeAt(n)) return 1;
		if (a.charCodeAt(n) < b.charCodeAt(n)) return -1;
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	});
}
