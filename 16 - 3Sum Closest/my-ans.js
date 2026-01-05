/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b);

    let sum = nums[0] + nums[1] + nums[2]
    let distance = Math.abs(target - sum);

    for(let i=0; i < nums.length - 2; i++){
        let l = i+1, r = nums.length - 1;

        while(l < r){
            let tmp = nums[i] + nums[l] + nums[r];
            if(tmp == target) return target;
            let tmpDistance = Math.abs(target - tmp);
            if(tmp > target){
                r--;
            } else {
                l++;
            }

            if(tmpDistance < distance){
                distance = tmpDistance;
                sum = tmp;
            }
        }
    }

    return sum;
};