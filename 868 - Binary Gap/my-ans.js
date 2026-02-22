/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let max = 0, gap = 1;

    let s = n.toString(2);

    for(let i=1; i < s.length; i++){
        if(s[i] == '0'){
            gap++
        } else {
            max = Math.max(gap, max);
            gap = 1
        }
    }

    return max;
};