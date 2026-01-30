/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    const ss = s.split("");
    let reversed = '';

    for(let i=0; i < k; i++){
        reversed = ss.shift() + reversed;
    }

    return reversed + ss.join("");
};