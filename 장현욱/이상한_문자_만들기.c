#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
char* solution(const char* s) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    char* answer = (char*)malloc(sizeof(s));

    int up_case_counter = 0;
    for(int i=0; s[i]; i++){
printf("%d",up_case_counter);
        if(s[i] == " "){
            up_case_counter = 0;
            answer[i] = s[i];
            continue;
        }
//짝수일 경우 대문자로
        if(up_case_counter % 2 == 0 || i==0){
//소문자일 경우만 대문자로

		    	answer[i] = s[i] - 32;

        }else{
            answer[i] = s[i];
        }
        up_case_counter++;

    }
    return answer;
}
