function solution(s, n) {
    const str = s.split("");

    return str.map((v)=>{
        if(v != " "){
            const temp = v.charCodeAt();        //아스키 코드 번호로 변환
            return v.toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(temp+n -26) : String.fromCharCode(temp+n);
        }else return v;
    }).join("");

}