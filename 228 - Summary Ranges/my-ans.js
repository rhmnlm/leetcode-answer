/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length == 0) return [];
    let ans = [];
    let a = nums[0];
    let b = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(nums[i]-b == 1){
            b = nums[i];
            continue;
        } else {
            ans.push( a == b ? a.toString() : `${a}->${b}`);
            a = nums[i]; b = nums[i];
        }
    }
    ans.push( a == b ? a.toString() : `${a}->${b}`);

    return ans;
};