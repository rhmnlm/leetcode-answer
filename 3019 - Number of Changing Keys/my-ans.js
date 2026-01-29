/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    // 97 - 65 a - A
    const keyshift = 97 - 65;

    let curr = s[0];

    let count = 0;

    for(let i = 1; i < s.length; i++){
        const diff = Math.abs(curr.charCodeAt(0) - s[i].charCodeAt(0));
        curr = s[i];
        if(diff == 0 || diff == keyshift) continue;
        count++;
    }

    return count;
};