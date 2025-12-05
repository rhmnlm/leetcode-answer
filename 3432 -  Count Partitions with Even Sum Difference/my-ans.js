/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    return nums.reduce((acc = 0, num) => acc + num ) % 2 == 0 ? nums.length - 1 : 0 
};