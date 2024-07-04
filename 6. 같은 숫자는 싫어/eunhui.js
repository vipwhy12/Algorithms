function solution(arr) {
    let answer = [];

    arr.reduce((acc, cur, i) => {
        if (arr[i + 1] !== cur) {
            acc.push(cur);
        }

        return acc;
    }, answer);

    return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]);
solution([4, 4, 4, 3, 3]);
