/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0, mult = 1;

    n.toString().split("").forEach((digit)=> {
        sum += Number(digit);
        mult *= Number(digit)
    })

    return mult - sum;
};