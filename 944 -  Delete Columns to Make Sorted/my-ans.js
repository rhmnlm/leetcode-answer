/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let indexMap = {};
    let set = new Set();

    for(let i = 0; i < strs.length; i++){
        for(let j=0; j < strs[i].length; j++){
            if(!indexMap[j]){
                indexMap[j] = strs[i][j];
            } else {
                if(indexMap[j] > strs[i][j]){
                    set.add(j);
                }
                indexMap[j] = strs[i][j];
            }
        }
    }

    return set.size;
};