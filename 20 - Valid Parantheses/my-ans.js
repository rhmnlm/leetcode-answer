/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const p = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    let stack = [];

    for(const a of s){
        if(p[a]){
            stack.push(a)
        } else {
            let el = stack.pop();
            if(!el) return false;
            if(p[el] != a) return false;
        }
    }

    if(stack.length > 0) return false;
    return true;
};
