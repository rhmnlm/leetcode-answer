/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {

    let count = 0;

    let _num = num;

    while(num > 0){
        let divider = num % 10;

        if(_num % divider === 0) count++;

        num = Math.floor(num / 10);
    }

    return count;
};