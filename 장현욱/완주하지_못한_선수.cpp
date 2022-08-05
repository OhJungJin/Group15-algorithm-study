#include <string>
#include <vector>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    string answer = "";
    for(int i=0; i < participant.size(); i++){
        for(int q=0; q< completion.size(); q++){
            if(participant[i] == completion[q]) {
                completion[q] = "";
                participant[i] = "";
                }
        }
    }
    for(int i=0; i < participant.size(); i++){
        if(participant[i] != ""){
            answer = participant[i];
        }
    }
    return answer;
}