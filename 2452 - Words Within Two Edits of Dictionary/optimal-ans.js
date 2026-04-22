/**
 * Instead of storing index and then rebuild the array of ans,
 * Loop only on queries, and check against word. If match within 2 diffs, early return
 */


/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    const res = [], n = queries[0].length;

    for (const q of queries) {
        if (helper(q)) res.push(q)
    }
    return res;

    function helper(q_word) {
        for (const w of dictionary) {
            if (diffLessThanTwo(q_word, w)) return true;
        }
        return false;
    }

    function diffLessThanTwo(w1, w2) {
        let cnt = 0;
        for (let i = 0; i<n; i++) {
            if (cnt > 2) return false;
            if (w1[i]!==w2[i]) cnt++;
        }
        return cnt <= 2;
    }
};