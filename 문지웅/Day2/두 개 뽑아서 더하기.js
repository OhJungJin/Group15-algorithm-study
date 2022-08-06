function solution(numbers) {
  var answer = [];

  //이중 반복문으로 모든 경우의 수 answer[] 에 저장
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  //set() 으로 중복 제거
  answer = [...new Set(answer)];
  //오름차순으로 리턴
  return answer.sort((a, b) => a - b);
}
