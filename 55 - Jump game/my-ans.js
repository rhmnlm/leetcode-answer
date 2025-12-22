/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length <= 1) return true;

    let dp = new Array(nums.length).fill(-1);

    for(let i=0; i < nums.length; i++){
        // console.log(dp);
        if(nums[i] + i >= nums.length) return true;
        for(let j=1; j <= nums[i]; j++){
            dp[i+j]++;
        }
        if(dp[i+1] == -1) break;
    }

    return dp[nums.length - 1] !== -1
};

// we set an array of size nums.length and fill it with -1
// on each iteration, we simply increment value of the next n numbers of index by 1. which means that there is a valid step
// if the next index is -1, this means there is no more valid steps and we should stop the iteration.