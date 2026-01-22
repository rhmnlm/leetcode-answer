/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let count = 0;

    const isSorted = (arr) => {
        for(let i=1; i < arr.length; i++){
            if(arr[i] < arr[i-1]) return false;
        }
        return true;
    }

    while(!isSorted(nums)){
        let idx = 0, minSum = Infinity;
        for(let i = 0; i < nums.length - 1; i++){
            let sum = nums[i] + nums[i+1];
            if(sum < minSum){
                minSum = sum;
                idx = i;
            }
        }
        nums[idx] = minSum;
        nums.splice(idx + 1, 1);
        count++;
    }
    return count;
};