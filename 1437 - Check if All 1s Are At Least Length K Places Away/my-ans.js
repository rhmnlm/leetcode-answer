/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let foundone = false, index = 0;
    for(let i=0; i < nums.length; i++){
        if(nums[i] == 1){
            if(!foundone){
                foundone = true;
                index = i;
            } else {
                console.log("i", i, "index", index)
                if((i - (index + 1)) < k) return false;
                index = i;
            }
        }
    }

    return true;
};