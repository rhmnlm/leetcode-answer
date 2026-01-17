/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const dp = new Array(10).fill(false);

    const words = s.split(" ");
    for(const word of words){
        dp[word[word.length - 1]] = word.replace(/[1-9]/, "");
    }

    let ans = ""
    for(let i = 1; i < dp.length; i++){
        if(!dp[i]) break;
        ans+= dp[i] + " ";
    }

    return ans.trim();
};