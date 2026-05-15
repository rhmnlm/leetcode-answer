/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lower = 0;
    let upper = nums.length - 1;

    while (lower < upper) {
        let mid = Math.floor((lower + upper) / 2);

        if (nums[mid] > nums[upper]) {
            lower = mid + 1;
        } else {
            upper = mid;
        }
    }

    return nums[lower];
};