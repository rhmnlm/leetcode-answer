/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let curr = nums[0];

    if(target <= curr)
        return 0;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] == target) 
            return i;

        if(target > curr && target < nums[i]) 
            return i;

        curr = nums[i]
    }

    return nums.length;
};