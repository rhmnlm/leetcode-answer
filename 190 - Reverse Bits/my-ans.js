/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
//     console.log((2).toString(2));
// console.log(Number("0b"+ (2).toString(2)));
    // console.log(n.toString(2).padStart(32, '0').split('').reverse().join(''))
    return Number("0b" + n.toString(2).padStart(32, '0').split('').reverse().join(''));
};