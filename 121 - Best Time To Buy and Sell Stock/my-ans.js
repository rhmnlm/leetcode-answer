 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_profit = 0;
    let a = prices[0];
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < a){
            a = prices[i];
            continue;
        } else {
            max_profit = Math.max(max_profit, prices[i] - a);
        }
    }

    return max_profit;
};