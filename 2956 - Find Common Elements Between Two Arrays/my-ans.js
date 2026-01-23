/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let left = new Set(nums1);
    let right = new Set(nums2);

    let l = 0, r = 0;

    for(let i=0; i < nums1.length; i++){
        if(right.has(nums1[i])) l++;
    }

    for(let i=0; i < nums2.length; i++){
        if(left.has(nums2[i])) r++;
    }

    return [l,r];
};