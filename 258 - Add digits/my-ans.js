/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return num == 0 ? 
                    0 
                    : num % 9 == 0 ?
                        9
                        : num % 9
};

// when doing multiple cases, can see that this is basically just a modulo 9 operation