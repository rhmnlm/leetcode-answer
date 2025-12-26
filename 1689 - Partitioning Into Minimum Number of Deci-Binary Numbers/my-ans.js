/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    for(let i=9;i>0;i--){
        if(n.includes(i)) return i
    }
    return 0;
};