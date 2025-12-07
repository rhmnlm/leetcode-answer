/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const counts = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
        counts[t.charCodeAt(i) - 97]--;
    }
    
    return counts.every(c => c === 0);
};

// explanation:
// if lengths differ, they can't be anagrams
// create an array of size 26 for each letter in the alphabet
// since anagram have same frequency of each letter, we increment for s and decrement for t. meaning for anagrams, they will cancel out
// finally, if all counts are zero, they are anagrams
