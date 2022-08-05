function solution(arr) {
    var answer = [];
    if(arr.length <= 1) answer.push(-1);
    else{
        let min = arr[0];
        for(let i=1; i< arr.length;i++ ){
            min = arr[i] < min ? arr[i] : min;
        }
        answer = arr.filter((data)=>{return data != min})
    }
    return answer;
}