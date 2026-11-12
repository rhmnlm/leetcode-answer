/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    if(nums.length == 1) return 1;

    let currNum = nums[0], currDes = 1, currInc = 1, maxDes = 1, maxInc = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > currNum){
            currInc++;
            maxInc = Math.max(maxInc, currInc);
            currDes = 1;
        } else if (nums[i] < currNum){
            currDes++;
            maxDes = Math.max(maxDes, currDes);
            currInc = 1;
        } else {
            currInc = 1;
            currDes = 1;
        }

        currNum = nums[i];
    }

    if(maxDes > maxInc) return maxDes;
    return maxInc;
};
