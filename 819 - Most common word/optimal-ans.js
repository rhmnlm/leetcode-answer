var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned); // O(m)
    const wordDict = {};
    
    const words = paragraph.toLowerCase().replace(/[!?',;.]/g, " ").split(/\s+/g);
    let mostCommonWord = "";

    for(word of words){
        if(bannedSet.has(word)) continue; // O(1) instead of O(m)
        
        wordDict[word] = (wordDict[word] || 0) + 1;
        
        if(mostCommonWord === "" || wordDict[word] > wordDict[mostCommonWord]){
            mostCommonWord = word;
        }
    }

    return mostCommonWord;
};
// Time: O(n + m + p), Space: O(n + m)