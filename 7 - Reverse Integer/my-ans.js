/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = ''
    if(x == 0) return 0;
    if(x < 0) sign = 'negative';
    if(x > 0) sign = 'positive'

    let temp = 0;
    x = Math.abs(x);

    while(x>0){
        temp = temp * 10 + (x%10);
        x = Math.floor(x/10);

        if(temp > Math.pow(2, 31)) return 0;
    }

    return sign == 'negative' ? -1 * temp : temp;
};