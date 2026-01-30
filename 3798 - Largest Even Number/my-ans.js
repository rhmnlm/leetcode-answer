/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
    const ss = s.split("");
    while(ss[ss.length-1] !== '2' && ss.length > 0){
        ss.pop();
    }

    return ss.join('');
};