/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const set = new Set(nums);
    let found = true;
    let target = original;

    while(found){
        if(set.has(target)){
            target *= 2;
        } else {
            found = false;
        }
    }

    return target;
};