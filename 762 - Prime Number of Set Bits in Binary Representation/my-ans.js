/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const primeset = new Set([2, 3, 5, 7, 11, 13, 17, 19]);

    let count = 0;

    for(let i = left; i <= right; i++){
        if(primeset.has(i.toString(2).split("0").join("").length)) count++
    }

    return count;
};