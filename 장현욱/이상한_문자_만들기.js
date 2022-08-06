function solution(s) {
    var answer = '';

    //공백을 기준으로 나눔
    const weak_str = String(s).split(" ");

    //각 단어별로 대소문자 처리
    for (let i = 0; i < weak_str.length; i++) {
        for (let q = 0; q < weak_str[i].length; q++) {
            answer += (q % 2 == 0) ? weak_str[i][q].toUpperCase() : weak_str[i][q].toLowerCase()
        }
        if (weak_str.length - 1 != i) answer += " ";
    }
    return answer;
}