#include <studio.h>
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr, int divisor) {
    vector<int> answer;

    // 나누어 떨어지는 수 구분
    for(int i=0; i < arr.size(); i++){
        if(arr[i] % divisor == 0){
            answer.push_back(arr[i]);
        }
    }
    // 나누어 떨어지는 수가 없을 경우 -1
    if(answer.size() <= 0){
        answer.push_back(-1);
    }
    // 정렬
    for(int i=0; i < answer.size() - 1; i++){
        for(int q= i + 1; q < answer.size(); q++){
            if(answer[i] > answer[q]){
                int temp = answer[q];
                answer[q] = answer[i];
                answer[i] = temp;
            }
        }
    }
    return answer;
}
//.