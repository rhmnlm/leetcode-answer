/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let min = Infinity;
    for(let i = start; i < nums.length; i++){
        if(nums[i] === target){
            min = Math.min( min, Math.abs(i - start));
        }
    }

    for(let i = start; i >= 0; i--) {
        if(nums[i] === target){
            min = Math.min( min, Math.abs(i - start));
        }
    }

    return min;
};