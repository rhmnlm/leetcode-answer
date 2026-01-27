/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let map = {};

    for(const c of s){
        map[c] = map[c] ? map[c] + 1 : 1;
    }

    const arr = Object.entries(map);
    // console.log(arr);
    const len = arr[0][1];

    for(const [key, value] of arr){
        if(value !== len) return false;
    }

    return true;
};