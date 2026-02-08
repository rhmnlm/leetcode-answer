/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    const letterSet = new Set('abcdefghijklmnopqrstuvwxyz'.split(''));
    const specSet = new Set('!@#$%^&*()'.split(''));

    const lettersQ = [];
    const specQ = [];

    for(const c of s){
        if(letterSet.has(c)) lettersQ.push(c);
        if(specSet.has(c)) specQ.push(c);
    }

    let ans = '';

     for(const c of s){
        if(letterSet.has(c)) ans+= lettersQ.pop(c);
        if(specSet.has(c)) ans += specQ.pop(c);
    }

    return ans;
};