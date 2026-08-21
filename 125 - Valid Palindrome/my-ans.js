/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    // console.log(s);
    let alphabet = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '9',
    '8', '0']);

    let forward = '';
    let reverse = '';

    for(let i = 0; i < s.length; i++){
        if(alphabet.has(s[i])) forward += s[i];
        if(alphabet.has(s[s.length-1-i])) reverse += s[s.length-1-i];
    }

    // console.log(forward, reverse);

    return forward === reverse;
};