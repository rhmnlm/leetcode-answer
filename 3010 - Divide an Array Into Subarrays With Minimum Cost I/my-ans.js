/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let first = nums[0];
    let low = Math.min(nums[1], nums[2]);
    let high = Math.max(nums[1], nums[2]);

    // console.log("first", first, "low", low, "high", high);

    for(let i = 3; i < nums.length; i++){
        if(nums[i] <= low){
            high = low;
            low = nums[i];
        } else if( low < nums[i] && nums[i] < high){
            high = nums[i];
        }

        // console.log("first", first, "low", low, "high", high);
    }

    return first + low + high;
};