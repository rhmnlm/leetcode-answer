/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = n;
    while(sum != 1 && sum!=7){
        if(sum < 10)
            return false;

        let tempSum = 0;
        for(const c of sum.toString()){
            tempSum += Math.pow(Number(c),2)
        }
        sum = tempSum;
    }
    return true;
};