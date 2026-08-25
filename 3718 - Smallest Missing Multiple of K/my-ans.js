/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let set = new Set(nums);

    const step = k;

    for(const num of set){
        if(!set.has(k)){
            return k;
        }
        k+=step;
    }

    return k;
};