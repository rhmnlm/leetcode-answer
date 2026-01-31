/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let ans = [];
    let num = 1;
    while(num <= Math.floor(n/2)){
        ans.push(num);
        ans.push(num*-1);
        num++;
    }

    if(n % 2 == 1) ans.push(0) 
    return ans;
};