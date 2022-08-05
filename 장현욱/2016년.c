#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(int a, int b) {
    //2016년 1월 1일은 목요일 (표준시간기준)
    char *DayOfTheWeek[] = { "THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED" };
    int DayOfMonth[12] = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
    int Total = 0;

//인덱스 조정
    a--;
    while(a > 0){
    //입력값이 5월일 경우 4월까지 일수를 다 더함
        Total += DayOfMonth[--a];
    }
//    입력된 일 수 더함
    Total += b;

    // 리턴할 값은 메모리를 동적 할당해주세요.
    char* answer = (char*)malloc(sizeof(char)  * 4);
//    총 일수 % 7으로 입력된 날의 요일을 구함
    answer = DayOfTheWeek[Total % 7];

    return answer;
}
