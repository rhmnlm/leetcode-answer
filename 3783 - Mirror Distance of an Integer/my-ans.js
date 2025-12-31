/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let _n = n, r = 0;

    while(_n>0){
        r*=10;
        r+=_n%10;
        _n = Math.floor(_n/10)
    }
    // console.log(r)
    return Math.abs(n-r)
};