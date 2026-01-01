// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function(digits) {
//     let carry = 1;
//     for(let i = digits.length-1; i >= 0; i--){
//         if(digits[i] == 9){
//             digits[i] = 0;
//             carry = 1;
//             continue;
//         } else if(carry == 1){
//             digits[i]++;
//             carry = 0;
//             break;
//         }
//     }

//     if(carry == 1) digits.unshift(1);

//     return digits;
// };

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length, carry = 0;

    for(let i=n-1; i>= 0; i--){
        if(digits[i]==9){
            carry = 1;
            digits[i] = 0
        } else {
            carry = 0;
            digits[i]++;
            break;
        }
        if(carry == 1 && i==0) digits.unshift(1);
    }

    return digits;
};