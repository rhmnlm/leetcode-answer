/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {

    const calcDistance = (i, j, k) => {
        return Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i);
    }

    if(nums.length < 3) return - 1;

    let min = Infinity;
    let found = false;

    for(let i=0; i < nums.length - 2; i++){
        const a = nums[i];
        for(let j = i+1; j < nums.length - 1; j++){
            if(nums[j] === a){
                for(let k = j+1; k < nums.length; k++){
                    if(nums[k] === a){
                        found = true;
                        min = Math.min(min, calcDistance(i, j, k));
                    }
                }
            }
        }
    }

    return found ? min : -1;
};
