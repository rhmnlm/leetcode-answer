/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let max = 0;

    for(const num of nums){
        max = Math.max(max, num);
    }

    return (max * k) + (k * k - k) / 2;
};