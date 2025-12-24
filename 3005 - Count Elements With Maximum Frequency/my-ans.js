/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let dp = new Array(101).fill(0);

    for(let i=0; i < nums.length; i++){
        dp[nums[i]]++
    };

    let maxFreq = dp[1];
    let ans = maxFreq; 
    for(let j = 2; j < dp.length; j++){
        // console.log(`maxFreq ${maxFreq}, round ${j} with freq ${dp[j]}`)
        if(dp[j] == maxFreq){
            ans+=maxFreq;
        } else if(dp[j] > maxFreq){
            maxFreq = dp[j];
            ans = maxFreq;
        }
    }

    return ans;
};