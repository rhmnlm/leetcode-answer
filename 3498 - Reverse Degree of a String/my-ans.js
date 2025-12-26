/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    // console.log(Math.abs("a".charCodeAt(0) - 123));
    // console.log(Math.abs("z".charCodeAt(0) - 123));
    let ans = 0;

    for(let i=1; i<=s.length; i++){
        ans+= i * Math.abs(s.charCodeAt(i-1) - 123)
    }

    return ans;
};