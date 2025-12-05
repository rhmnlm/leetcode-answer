/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let col = columnNumber;
    let ans = "";
    while(col != 0){
        // console.log(col);
        // console.log(ans);
        ans = String.fromCharCode((col % 26 == 0 ? 26 : col % 26) + 64) + ans;
        col -= col % 26 == 0 ?  26 : col % 26;
        col = Math.floor(col/26)
    }
    return ans;
};