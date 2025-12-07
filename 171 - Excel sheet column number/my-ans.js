/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let sum = 0;
    
    for (const c of columnTitle) {
        sum = sum * 26 + (c.charCodeAt(0) - 64);
    }
    
    return sum;
};