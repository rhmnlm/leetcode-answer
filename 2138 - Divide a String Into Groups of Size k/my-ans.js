/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let ans = [], chunk = '';

    for(const c of s){
        if(chunk.length == k){
            ans.push(chunk);
            chunk = ''
        }
        chunk+=c;
    }

    while(chunk.length < k){
        chunk += fill;
    }

    ans.push(chunk);

    return ans;
};