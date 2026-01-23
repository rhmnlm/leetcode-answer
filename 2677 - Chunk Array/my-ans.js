/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {

    if(arr.length == 0) return [];

    let chunk = [];
    let ans = [];

    for(let i = 0; i < arr.length; i++){
        if(chunk.length === size){
            ans.push(chunk);
            chunk = [];
        }
        chunk.push(arr[i]);
    }
    ans.push(chunk);

    return ans;
};
