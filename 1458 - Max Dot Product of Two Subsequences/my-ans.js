/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    let dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(-Infinity));

    // console.log(Math.max(-Infinity, 0))

    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            let sum = nums1[i-1] * nums2[j-1] + Math.max(0, dp[i-1][j-1])

            dp[i][j] = Math.max(sum, dp[i-1][j], dp[i][j-1])
        }
    }

    console.log(dp);

    return dp[m][n];
};