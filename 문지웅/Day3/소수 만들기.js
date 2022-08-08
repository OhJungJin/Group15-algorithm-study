function solution(nums) {
  var answer = 0;

  let sum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (j = i + 1; j < nums.length - 1; j++) {
      for (k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        let count = 0;
        for (let l = 1; l <= sum; l++) {
          if (sum % l === 0) count++;
          console.log("count :", count);
        }
        if (count == 2) answer++;
      }
    }
  }
  console.log("result :", answer);
  return answer;
}

solution([1, 2, 3, 4]);
