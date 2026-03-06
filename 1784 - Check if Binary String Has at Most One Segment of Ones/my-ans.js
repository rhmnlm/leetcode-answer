/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    
    if(s.length <= 2) return true;

    let curr = '1';

    for(let i = 1; i < s.length; i++){
        if(s[i] == '0'){
            curr = '0';
        }

        if(s[i] == '1' && curr == '0') return false;
    }

    return true;
};
