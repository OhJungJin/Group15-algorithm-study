function solution(answers) {
    const num_1_pattern = [1, 2, 3, 4, 5];
    const num_2_pattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const num_3_pattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let num1 = 0, num2 = 0, num3 = 0;
    let score = [0,0,0];
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == num_1_pattern[num1]) score[0]++;
        if (answers[i] == num_2_pattern[num2]) score[1]++;
        if (answers[i] == num_3_pattern[num3]) score[2]++;

        num1 = (++num1 >= num_1_pattern.length) ? 0 : num1;
        num2 = (++num2 >= num_2_pattern.length) ? 0 : num2;
        num3 = (++num3 >= num_3_pattern.length) ? 0 : num3;
    }
    let high_score = Math.max(score[0],score[1],score[2]);
    const answer = [];
    for(let i=0; i < score.length; i++){
        if(score[i] == high_score) answer.push(i + 1);
    }
    return answer;
}