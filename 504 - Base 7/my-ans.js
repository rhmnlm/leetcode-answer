/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let ans = 0, mult = 1, sign = num < 0 ? -1 : 1;
    num = Math.abs(num);
    while(num>0){
        ans+= (num % 7) * mult;
        num = Math.floor(num/7);
        mult *=10;
    }

    return String(ans * sign);
};