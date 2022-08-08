function solution(lottos, win_nums) {
  var answer = [];
  let corrects = 0;
  let zeros = 0;

  let rank_max = 0;
  let rank_min = 0;

  corrects = lottos.filter((num) => win_nums.includes(num)).length;

  zeros = lottos.filter((num) => num === 0).length;

  rank_min = 7 - corrects >= 6 ? 6 : 7 - corrects;

  rank_max = rank_min - zeros < 1 ? 1 : rank_min - zeros;

  answer = [rank_max, rank_min];

  return answer;
}
