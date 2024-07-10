function solution(progresses, speeds) {
    let answer = [];
    let previousDays = 0;

    progresses.forEach((progress, index) => {
        const remainingProgress = 100 - progress;
        const currentDays = Math.ceil(remainingProgress / speeds[index]);

        if (answer.length === 0) {
            answer.push(1);
            previousDays = currentDays;
        } else {
            if (currentDays > previousDays) {
                answer.push(1);
                previousDays = currentDays;
            } else {
                answer[answer.length - 1]++;
            }
        }
    });

    return answer;
}

solution([93, 30, 55], [1, 30, 5]);
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
