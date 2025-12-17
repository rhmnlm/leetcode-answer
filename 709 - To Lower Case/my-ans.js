/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    // A-Z = 65-90, a-z = 97-122
    // 32
    let ans = ""

    for(let c=0; c < s.length; c++){
        if(s.charCodeAt(c) <= 90 && s.charCodeAt(c) >= 65){
            ans = ans + String.fromCharCode(s.charCodeAt(c) + 32);
        } else {
            ans = ans + s[c];
        }
    }

    return ans;
};