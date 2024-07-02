/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = [];

    nums.forEach((num) => {
        if (!result.includes(num)) {
            result.push(num);
        } else {
            result = result.filter((item) => num !== item);
        }
    });

    return result;
};
