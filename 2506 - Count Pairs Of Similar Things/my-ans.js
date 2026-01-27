/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let count = 0;

    for(let i=0; i < words.length - 1; i++){
        const set = new Set(words[i])
        for(let j = i+1; j < words.length; j++){
            const set2 = new Set(words[j]);
            if(set.size !== set2.size) continue;
            if(set.intersection(set2).size !== set2.size) continue;
            count++;
        }
    }

    return count;
};