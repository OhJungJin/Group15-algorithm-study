function solution1(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}

function solution2(arr) {
  return arr.filter((num, index) => num != arr[index + 1]);
}
