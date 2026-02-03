/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    if(nums.length < 4) return false;

    let curr = nums[0];
    let round = 1;
    let pointer = 1;

    while(pointer < nums.length){
        // the requirement is `strictly` increase or decrease. no compromise for equal
        if(nums[pointer] == curr) return false;

        // check only for increase
        if(round == 1 || round == 3){
            if(nums[pointer] < curr){
                // since p should be > 0 and nums[0...p], it should increasing from start
                if(pointer == 1) return false;

                round++
            }
        } else if (round == 2){
            // only check decrease
            if(nums[pointer] > curr){
                round++
            }
        }
        curr = nums[pointer]
        pointer++;
    }

    return round === 3;
};