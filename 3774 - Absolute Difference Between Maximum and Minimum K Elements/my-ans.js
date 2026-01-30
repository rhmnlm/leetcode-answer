/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    nums.sort((a,b) =>  a - b);
    let minArr = [], maxArr = [];
    for(let i=0; i < k; i++){
        minArr.push(nums[i]);
        maxArr.push(nums[nums.length - 1 - i]);
    }

    const maxSum = maxArr.reduce((acc, el) => acc + el, 0);
    const minSum = minArr.reduce((acc, el) => acc + el, 0);

    return Math.abs(maxSum - minSum);
};