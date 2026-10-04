/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const lb = [];
    const ast = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            lb.push(i)
        } else if (s[i] == '*'){
            ast.push(i)
        } else {
            if(lb.length > 0){
                lb.pop();
            } else if (ast.length > 0){
                ast.pop();
            } else {
                return false;
            }
        }
    }

    while(lb.length > 0 && ast.length > 0){
        if(lb.pop() > ast.pop()) return false;
    }

    return lb.length == 0;
} 
