/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numSet = new Set();

    for(const num of nums){
        if(numSet.has(num)){
            numSet.delete(num);
        } else {
            numSet.add(num);
        }
    }

    return numSet.values().next().value;
};