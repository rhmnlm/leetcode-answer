/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let isInGrouping = false;
    let count = 0;

    for(const c of s){
        if(c === "|") isInGrouping = !isInGrouping;
        if(c === "*" && !isInGrouping) count++;
    }

    return count;
};