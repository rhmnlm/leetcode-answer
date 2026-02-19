/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count = 0, prevCount = 0, streak = 1;

    for(let i = 1; i < s.length; i++){
        if(s[i] == s[i-1]){
            streak++
        } else {
            prevCount = streak;
            streak = 1;
        }

        if(streak <= prevCount) count++;
    }

    return count;
};

// count length of same char.
// on differ, store the length of last count.
// repeat count.
// on each count, whenever it's less than previous count, we can confirm that it's a valid substring.
// 1 1 1 <- count 3
// 1 1 1 0 <- group changed. we store count of 3. now count is 1. valid substr + 1
// 1 1 1 0 0 <- count is 2, since it's less than prev count of 3, substr + 1
// 1 1 1 0 0 1 <- group changed. we store count of 2. now count is 1. valid substr + 1