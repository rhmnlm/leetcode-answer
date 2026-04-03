/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let bal = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === 'L') bal++;
        if(s[i] === 'R') bal--;
        if(bal === 0) count++;
    }

    return count;
};