/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    let ans = new Set();
    const WORD_LENGTH = queries[0].length;

    const countDiff = (w1, w2) => {
        let count = 0;
        for(let i = 0; i < WORD_LENGTH; i++){
            if(w1[i] !== w2[i]){
                count++;
            }
        }

        return count;
    }

    for(let i = 0; i < queries.length; i++){
        for(let j = 0; j < dictionary.length; j++){
            if(dictionary[j] === queries[i]){
                ans.add(i);
                continue;
            } else if(countDiff(dictionary[j], queries[i]) <=2){
                ans.add(i);
            }
        }
    }

    const arr = [...ans];
    let _ans = []
    for(const index of arr){
        _ans.push(queries[index])
    }
    
    return _ans;
};