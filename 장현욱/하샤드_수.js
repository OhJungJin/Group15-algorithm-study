function solution(x) {

    const transStr = String(x);
    let sum = 0;
    for (let i = 0; i < transStr.length; i++) {
        sum += Number(transStr[i]);
    }
    return !(x % sum);
}