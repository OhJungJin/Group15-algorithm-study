function solution(arr) {
  console.log(...arr);
  console.log(Math.min(...arr));
  console.log(arr.indexOf(Math.min(...arr)));
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}

let result = solution([4, 3, 2, 1]);
console.log(result);
