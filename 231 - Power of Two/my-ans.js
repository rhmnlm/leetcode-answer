/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let found = false;
    let curr = 1;
    while(curr <= n){
        if(curr == n) return true;
        curr *= 2;
    }

    return found;
};