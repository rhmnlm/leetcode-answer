/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {

    let ans = 0;

    for(let i = 0; i < nums.length; i++){
        const d = new Set();
        for(let j = i; j >=0; j--){
            d.add(nums[j])
            ans+= d.size * d.size;
        }
    }

    return ans;
};
