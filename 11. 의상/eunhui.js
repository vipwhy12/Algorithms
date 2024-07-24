function solution(clothes) {
    const categoryCount = {};

    for (const [name, category] of clothes) {
        if (categoryCount[category]) {
            categoryCount[category]++;
        } else {
            categoryCount[category] = 1;
        }
    }

    let combinations = 1;

    for (const count of Object.values(categoryCount)) {
        combinations *= count + 1;
    }

    return combinations - 1;
}
