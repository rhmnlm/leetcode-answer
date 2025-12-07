/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {}
    for(const num of nums){
        map[num] = (map[num] || 0) + 1;
        if(map[num]>1)
            return true;
    }
    return false;
};