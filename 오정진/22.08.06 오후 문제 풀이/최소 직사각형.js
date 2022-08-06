function solution(sizes) {
	let [min, max] = sizes.reduce(
		(p, c) => {
			p[0].push(Math.min(c[0], c[1]));
			p[1].push(Math.max(c[0], c[1]));
			return p;
		},
		[[], []]
	);

	return Math.max(...min) * Math.max(...max);
}

let sizes = [
	[60, 50],
	[30, 70],
	[60, 30],
	[80, 40],
];

console.log(solution(sizes));
