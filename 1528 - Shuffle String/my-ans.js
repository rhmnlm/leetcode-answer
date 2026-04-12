/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const ans = new Array(s.length);

    for(let i = 0; i < s.length; i++){
        ans[indices[i]] = s[i];
    }

    return ans.join('');
};