function solution(n) {
    var answer = 0;

    //제곱근 구하기
    //이걸 써도되고
    const sqrt = Math.sqrt(n);
    const sqrt1 = n / n;

    //정수형태인지 보기
    const isInteger = Number.isInteger(sqrt);
    const isInteger1 = sqrt % 1;


    answer = (isInteger) ? (sqrt+1) * (sqrt+1) : -1;
    return answer;
}