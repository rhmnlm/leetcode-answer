var merge = function(nums1, m, nums2, n) {
    let i = m - 1;     // Last element in nums1's initial portion
    let j = n - 1;     // Last element in nums2
    let k = m + n - 1; // Last position in nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};
// Time: O(m+n), Space: O(1)