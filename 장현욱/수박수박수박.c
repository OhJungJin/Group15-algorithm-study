#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(int n) {
    char* su = "수";                              
    char* bak = "박";                            
    int len = strlen(su);                           
    // 리턴할 값은 메모리를 동적 할당해주세요.
    char* answer = (char*)malloc(sizeof(len)*n); 
    
    for(int i=0; i < n; i++){
        if(i%2 == 0) strcpy(answer+(i*len),su);
        else strcpy(answer+(i*len),bak);
    }
    return answer;
}