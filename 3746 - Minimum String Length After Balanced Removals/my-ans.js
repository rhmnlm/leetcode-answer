/**
 * @param {string} s
 * @return {number}
 */
var minLengthAfterRemovals = function(s) {
    // const n = s.length;
    let a = 0, b = 0;

    for(const c of s){
        if(c === 'a') a++;
        if(c === 'b') b++;
    }

    return Math.abs(a - b);
};