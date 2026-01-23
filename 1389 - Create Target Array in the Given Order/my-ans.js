/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    // months.splice(1, 0, "Feb");
    let ans = [];
    for(let i=0; i<nums.length; i++){
        ans.splice(index[i], 0, nums[i]);
    }

    return ans;
};