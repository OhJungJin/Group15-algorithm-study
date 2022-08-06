function solution(numbers) {
    const result = []
    for (let i = 0; i < numbers.length-1; i++) {
        for(let q=i + 1; q < numbers.length; q++){
            result.push(numbers[i] + numbers[q]);
        }
    }
    const answer = result.filter((val,idx)=>result.indexOf(val) === idx)
    answer.sort((a,b)=>a-b)
    return answer;
}