/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {};

    for(const c of magazine){
        map[c] = (map[c] || 0) + 1
    }

    for(const c of ransomNote){
        if(!map[c]) return false;

        map[c]--

        if(map[c] < 0) return false;
    }

    return true;
};