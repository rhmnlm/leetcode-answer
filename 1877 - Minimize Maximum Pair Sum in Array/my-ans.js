/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums = nums.sort((a,b)=> a-b);
    
    let max = 0;

    for(let i = 0; i < nums.length/2; i++){
        const pairSum = nums[i] + nums[nums.length - (i+1)]
        max = Math.max(max, pairSum);
    }

    return max;
};