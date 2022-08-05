function solution(lottos, win_nums) {
    let correctCount = 0;
    let zeroCount = 0;
    for(let i=0; i < lottos.length;i++){
        if(lottos[i]==0) zeroCount++;
        else if(win_nums.includes(lottos[i]))correctCount++;
    }
    return [win_nums.length-(correctCount + zeroCount) + 1, (correctCount !=0 ) ? win_nums.length - correctCount + 1 : win_nums.length];
}