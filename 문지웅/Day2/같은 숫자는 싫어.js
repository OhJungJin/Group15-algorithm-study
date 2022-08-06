function solution(arr) {
  //필터 함수 이용해서 i번쨰와 i+1번째 변수의 값이 다른 경우만 남기기
  return arr.filter((num, index) => num != arr[index + 1]);
}
