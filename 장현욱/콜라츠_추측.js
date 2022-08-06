function solution(num) {
    let temp = num;

    if(num ==1) return 0;
    for(let i=0; i < 500; i++){
        if(temp % 2 == 0) temp = temp / 2;
        else temp = (temp * 3) + 1;
        if(temp ==1) {
            return i + 1;
        }
    }

    return -1;
}