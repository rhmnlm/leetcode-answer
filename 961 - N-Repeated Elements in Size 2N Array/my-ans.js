/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let set = new Set();

    for(let k of nums){
        if(set.has(k)) return k;

        set.add(k);
    }
};