var minimumSumSubarray = function(nums, l, r) {
    let min = Infinity;
    const n = nums.length;

    for (let i = l; i <= r; i++) {
        let sum = 0;

        // Calculate the first window
        for (let k = 0; k < i; k++) {
            sum += nums[k];
        }

        if (sum > 0) {
            min = Math.min(min, sum);
        }

        // Slide the window
        for (let j = 1; j <= n - i; j++) {
            sum = sum - nums[j - 1] + nums[j + i - 1];

            if (sum > 0) {
                min = Math.min(min, sum);
            }
        }
    }

    return min === Infinity ? -1 : min;
};
