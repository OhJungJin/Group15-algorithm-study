function solution(d, budget) {
  var answer = 0;
  //총합 초기화
  let total = 0;

  //작은 순서대로 더하기 위해 오름차순으로 정렬
  d = d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    //예산 넘어가기 전까지
    if (total + d[i] <= budget) {
      //토탈에 i번째 값 더하기
      total += d[i];
      //더할 때마다 카운트 증가
      answer++;
    }
  }
  return answer;
}
