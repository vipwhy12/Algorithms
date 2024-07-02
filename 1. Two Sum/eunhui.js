/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    return nums.reduce((acc, cur, i) => {
        const sum = cur + nums[i + 1];

        if (sum === target) {
            acc = [i, i + 1];
        }

        return acc;
    }, []);
};

var twoSum = function (nums, target) {
    let result = [];

    nums.forEach((num, i) => {
        const sum = num + nums[i + 1];

        if (sum === target) {
            result = [i, i + 1];
        }
    });

    return result;
};
