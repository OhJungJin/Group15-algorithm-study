function solution(s) {
  let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = s;

  for (let i = 0; i < words.length; i++) {
    let arr = answer.split(words[i]);
    console.log(arr);
    answer = arr.join(i);
  }
  return Number(answer);
}
