function solution(array, commands) {
  var answer = [];
  let sArray = [];

  for (let i = 0; i < commands.length; i++) {
    // i부터 j만큼 배열 자르기
    sArray = array.slice(commands[i][0] - 1, commands[i][1]);
    // 자른 배열 정렬
    sArray = sArray.sort((a, b) => a - b);
    // k번 째 값 저장
    answer.push(sArray[commands[i][2] - 1]);
  }
  return answer;
}
