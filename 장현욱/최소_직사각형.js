function solution(sizes) {

        let x = 0,y = 0;
    for(let i=0; i < sizes.length;i++){
        //일단은 [작은수,큰수]형태로 정렬
        sizes[i].sort((a,b)=>{
            return a-b;
        })
        //가로/세로 제일 큰 수 가져오기
        x = x < sizes[i][0] ? sizes[i][0] : x;
        y =  y < sizes[i][1] ? sizes[i][1] : y;
    }
    return x * y;
}