/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealthiest = 0;
    for(let i=0; i<accounts.length;i++){
        let wealth = accounts[i].reduce((acc, curr) => acc+curr);

        wealthiest = Math.max(wealth, wealthiest);
    }
    return wealthiest;
};