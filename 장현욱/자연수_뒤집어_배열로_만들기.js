function solution(n) {
    var answer = [];

    const transStr = String(n);

    for(let i=transStr.length - 1; i  >= 0; i--){
        answer.push(Number(transStr[i]));
    }
    return answer;
}