/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if(n == 0) return 1;

    let k = 0;

    while(2 ** k <= n){
        k++;
    }

    return (2 ** k) - 1 - n;
};
