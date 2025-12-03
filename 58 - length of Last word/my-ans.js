/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.trim().split(/\s+/);
    // console.log(arr[arr.length - 1])
    return arr[arr.length - 1].length;
};