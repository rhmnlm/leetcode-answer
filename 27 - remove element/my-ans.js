/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = nums.length;
    let numsMutated = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            k--;
            nums[i] = 51
        }
    }

    nums.sort((a, b) => a - b);
    return k;
};

// since the constraint of nums[i] is between 0 and 50, we can use 51 as a placeholder for removed elements
// return sort, as they want the first k elements to be the ones that are not removed