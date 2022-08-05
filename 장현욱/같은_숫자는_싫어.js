function solution(arr)
{
    return arr.filter((data, idx) => {
        if(idx < arr.length) {
            return arr[idx] != arr[idx+1] || idx == arr.length - 1;
        }
    });
}