function solution(strings, n) {
  // var answer = [];
  // return strings.sort((s1, s2)=> s1[n]===s2[n]? s1.localeCompare(s2): s1[n].localeCompare(s2[n]))
  // return answer;

  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (b[n] > a[n]) return -1;

    if (a > b) return 1;
    if (b > a) return -1;

    return 0;
  });

  return strings;
}
