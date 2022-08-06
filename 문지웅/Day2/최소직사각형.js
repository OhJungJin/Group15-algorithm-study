function solution(sizes) {
  let rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h])); // [w,h] 에서 w 가 h 보다 항상 크도록 배열 정리

  let answer = [0, 0]; // 결과 값 초기화

  //배열 돌면서 가장 큰 값으로 변경
  rotated.forEach(([w, h]) => {
    if (w > answer[0]) answer[0] = w;
    if (h > answer[1]) answer[1] = h;
  });

  //넓이가 필요하므로 w * h
  return answer[0] * answer[1];
}

let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
solution(sizes);

let result = solution(sizes);
console.log(result);
