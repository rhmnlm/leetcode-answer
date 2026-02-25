/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const _arr = Array.from({length: arr.length}, ()=> new Array(2))
    
    for(let i=0; i < arr.length; i++){
        _arr[i][0] = arr[i];
        _arr[i][1] = arr[i].toString(2).split('0').join('').length;
    }

    _arr.sort((a, b) => a[1] - b[1] || a[0] - b[0])

    const ans = _arr.map((el) => el[0])

    return ans;
};