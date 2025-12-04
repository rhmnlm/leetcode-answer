/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let tempArr = nums1.slice(0, m).concat(nums2).sort((a,b)=>a-b)
    for(const index in nums1){
        nums1[index] = tempArr[index]
    }
};

// complexity for this is O((m+n)log(m+n)) due to sort function