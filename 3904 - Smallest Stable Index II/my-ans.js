/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let score = Infinity;
    let a = nums[0];
    let b_min = new Array(nums.length);

    // pre calc b_min
    let b = nums[nums.length - 1];
    for(let i = nums.length - 1; i >= 0; i--){
        b = Math.min(b, nums[i]);
        b_min[i] = b;
    }

    // console.log(b_min);
    
    for(let i = 0; i < nums.length; i++){
        a = Math.max(a, nums[i]);
        if(a - b_min[i] <= k) return i;
    }

    return -1;
};