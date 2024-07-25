function solution(nums) {
    const uniqueTypes = new Set(nums).size;
    const maxSelection = nums.length / 2;

    return Math.min(uniqueTypes, maxSelection);
}

solution([3, 1, 2, 3]);
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);
