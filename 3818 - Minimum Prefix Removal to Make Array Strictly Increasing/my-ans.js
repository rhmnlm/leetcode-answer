/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPrefixLength = function(nums) {
    let count = 0;
    for(let i=1; i < nums.length; i++){
        if(nums[i] <= nums[i-1]){
            count = i;
        }
    }

    return count;
};