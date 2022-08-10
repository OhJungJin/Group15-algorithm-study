function solution(nums) {
	const maxSel = nums.length / 2;

	const filter = nums.filter((item, idx, array) => {
		return array.indexOf(item) === idx;
	});

	return filter.length < maxSel ? filter.length : maxSel;
}
