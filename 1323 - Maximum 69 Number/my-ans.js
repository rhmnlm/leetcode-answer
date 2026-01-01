/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let _num = num.toString().split('');
    // console.log(_num);

    for(let i = 0; i< _num.length; i++){
        // console.log(_num[i])
        if(_num[i] === '6'){
            _num[i] = '9';
            break;
        }
    }

    return Number(_num.join(''))
};