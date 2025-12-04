/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {

    const wordDict = {};

    const words = paragraph.toLowerCase().replace(/[!?',;.]/g, " ").split(/\s+/g);
    // console.log(words);
    let mostCommonWord = "";

    for(word of words){
        if(banned.includes(word)) continue;

        if(wordDict[word] != null){
            wordDict[word] +=1;
            mostCommonWord = wordDict[word] > wordDict[mostCommonWord] ? word : mostCommonWord
            continue;    
        }

        wordDict[word] = 1;
        if(mostCommonWord == ""){
            mostCommonWord = word;
        } else {
            mostCommonWord = wordDict[word] > wordDict[mostCommonWord] ? word : mostCommonWord;
        }
    }

    return mostCommonWord;
};