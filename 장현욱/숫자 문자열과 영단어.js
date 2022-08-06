function solution(s) {
    const str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = s;
    for(let i=0; i < str.length;i++){
        answer = answer.replace(str[i],i);
    }
    return Number(answer);
}