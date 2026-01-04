/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s;

    let dp = new Array(numRows).fill('');
    let i = 0, row = 1, rev = false;
    while(i < s.length){
        // console.log(s[i]);
        // console.log(`row ${row}`)
        dp[row-1] += s[i];
        if(row == numRows){
            rev = true;
        }
        if(row == 1){
            rev = false;
        }
        if(rev) row--;
        if(!rev) row++;
        i++;
    }

    // console.log(dp);

    return dp.join('')
};