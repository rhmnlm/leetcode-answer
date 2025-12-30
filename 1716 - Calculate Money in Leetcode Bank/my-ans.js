/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let k=0;
    let ans = 0;
    for(let i=1; i<=n; i++){
        ans+=k + (i % 7 === 0 ? 7 : i%7)
        if(i%7 == 0) k++;
    }

    return ans;
};