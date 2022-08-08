function solution(new_id) {
  let answer = "";

  //level1
  answer = new_id.toLowerCase();

  //level2
  answer = answer.replace(/[^\w-_.]/g, "");

  //level3
  answer = answer.replace(/\.{2,}/g, ".");

  //level4
  answer = answer.replace(/^\.|\.$/g, "");

  //level5
  answer = answer.replace(/^$/, "a");

  //level6
  answer = answer.slice(0, 15).replace(/\.$/, "");

  //level7
  let len = answer.length;
  answer = len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);

  return answer;
}
