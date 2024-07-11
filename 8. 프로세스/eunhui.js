function solution(priorities, location) {
    let proccessCount = 0;

    const qeue = priorities.map((item, i) => {
        return {
            priority: item,
            index: i,
        };
    });

    while (qeue.length > 0) {
        const current = qeue.shift();

        if (current) {
            if (qeue.some((item) => item.priority > current.priority)) {
                qeue.push(current);
            } else {
                proccessCount++;

                if (location === current.index) {
                    return proccessCount;
                }
            }
        }
    }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
