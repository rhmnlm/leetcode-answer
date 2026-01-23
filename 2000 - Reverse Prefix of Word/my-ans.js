/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let toReplace = "", replacement = "";

    for(const c of word){
        toReplace += c;
        replacement = c + replacement;
        if(c == ch){
            word = word.replace(toReplace, replacement);
            break;
        }
    }

    return word;
};