/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const set = new Set(nums);
    // console.log(set);
    for(let i = 0; i <= nums.length; i++){
        if(!set.has(i)) return i;
    }
};