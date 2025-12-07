/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let benchmark = Math.floor(nums.length/2);
    let map = {};

    for(const num of nums){
        map[num] = (map[num] || 0) + 1

        if(map[num] > benchmark) return num;
    }
};