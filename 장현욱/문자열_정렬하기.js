function solution(strings, n) {
    //일단은 사전순으로 정렬
    strings.sort()
    // n번째 인덱스 기준으로 정렬
    const answer = strings.sort((a, b) => {
        if(a[n] > b[n])return 1;
        else if(a[n] < b[n])return -1;
    })
    return answer;
}