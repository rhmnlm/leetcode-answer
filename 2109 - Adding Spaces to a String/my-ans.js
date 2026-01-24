/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let ans = "";
    let spacePointer = 0;
    for(let i = 0; i < s.length; i++){
        if(i == spaces[spacePointer]){
            ans += " "
            spacePointer++;
        }
        ans += s[i];
    }
    return ans;
};