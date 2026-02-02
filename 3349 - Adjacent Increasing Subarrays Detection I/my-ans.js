/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    if(nums.length < 2 * k) return false;
    let queue = [];

    const checkNextK = (index, k) => {
        let curr = nums[index];
        for(let i = 1; i < k; i++){
            if(curr >= nums[index+i]) return false;
            curr = nums[index+i];
        }
        return true;
    }

    for(let i = 0; i < nums.length - k; i++){
        if(queue.length == 0 || (queue[queue.length - 1] >= nums[i] && queue.length < k)){
            queue = [];
            queue.push(nums[i]);
        } else if (queue.length < k){
            queue.push(nums[i]);
        }
        if(queue.length == k){
            // console.log(queue);
            const gg = checkNextK(i+1, k);
            if(gg) return true;
            queue.shift();
        }
    }

    return false;
};