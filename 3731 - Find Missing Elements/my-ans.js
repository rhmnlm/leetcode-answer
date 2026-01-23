/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    nums.sort((a, b) => a-b);
    const set = new Set(nums);

    let ans = [];

    for(let i = nums[0]; i <= nums[nums.length-1]; i++){
        if(!set.has(i)) ans.push(i);
    }

    return ans;
};