/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let top = cost.length;
    let dp = new Array(top+1).fill(0);

    for(let i=2; i<=top; i++){
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]);
    }

    return dp[top];
};