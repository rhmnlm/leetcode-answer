/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
    const bin = n.toString(2);
    const mid = Math.ceil(bin.length/2);

    // 1 1 1 1 1 floor(5/2)

    let count = 0;
    for(let i=0; i < mid; i++){
        if(bin[i] !== bin[bin.length - 1 - i]) count+=2;
    }

    return count;
};