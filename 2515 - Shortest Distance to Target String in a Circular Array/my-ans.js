/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    let min = Infinity;
    let upper = words.length;
    let lower = 0;

    for(let i = 0; i < words.length; i++){
        if(words[i] === target){
            // 1. i > startIndex
            if(i > startIndex){
                min = Math.min(min, i - startIndex)
                min = Math.min(min, upper - i + startIndex)
            // 2. i < startIndex
            } else if(i < startIndex) {
                //2.1 normal diff
                min = Math.min(min, startIndex - i);

                //2.2 cyclic diff
                min = Math.min(min, upper - startIndex + i)
            
            // 3. i == startIndex
            } else {
                min = 0;
            }
        }
    }

    return min === Infinity ? - 1 : min;
};