/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let found = false;
    let curr = 1
    while(curr <= n){
        // console.log(curr);
        if(curr == n) return true;
        curr *= 3;
    }

    return found;
};