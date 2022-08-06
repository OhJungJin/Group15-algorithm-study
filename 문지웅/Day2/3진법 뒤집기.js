function solution(n) {
  //   let temp = n.toString(3); // 3진법 변환
  //   console.log(temp);
  //   temp = temp.split(""); // 쪼개기
  //   console.log(temp);
  //   temp = temp.reverse(); // 뒤집기
  //   console.log(temp);
  //   temp = temp.join(""); //합치기
  //   console.log(temp);
  //   temp = parseInt(temp, 3); // 10진법 변환
  //   console.log(temp);
  return parseInt(n.toString(3).split("").reverse().join(""), 3); // 한줄로 압축
}

console.log(solution(45));
