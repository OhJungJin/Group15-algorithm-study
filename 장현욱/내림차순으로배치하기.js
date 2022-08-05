function solution(n) {
    var answer = 0;


    let arrTemp = [];
    const transStr = String(n);

    //숫자 형태로 인덱스에 하나씩 푸쉬 하는 과정
    for(let i=0; i  < transStr.length; i++){
        arrTemp.push(Number(transStr[i]));
    }

    //정렬
    //js sort함수를 이용한 방법
    // arrTemp.sort((a,b)=>{
    //     //결과값이 음수면 오름차순, 양수면 내림차순 정렬된다고 생각하면 편합니다.
    //     return b-a;
    // })
    //함수없이 하는 법
    for(let i=0; i < arrTemp.length - 1;i++){
        for(let q=i + 1; q< arrTemp.length; q++){
            if(arrTemp[i] < arrTemp[q]){
                const temp = arrTemp[i];
                arrTemp[i] = arrTemp[q];
                arrTemp[q] = temp;
            }
        }
    }
    for (let i = 0; i < arrTemp.length; i++) {
        answer += String(arrTemp[i]);
    }
    answer = Number(answer)
    return answer;
}