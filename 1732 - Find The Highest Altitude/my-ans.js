/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0, alt = 0;

    for(const g of gain){
        alt+= g;
        max = Math.max(alt, max);
    }

    return max;
};