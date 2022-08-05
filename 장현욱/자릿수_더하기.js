function solution(n)
{
    var answer = 0;

    const transStr = String(n);

    for(let i=0; i < transStr.length; i++){
        answer += Number(transStr[i]);
    }

    return answer;
}