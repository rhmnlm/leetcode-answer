/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = "", temp = "";
    let queue = [];

    for(let c of s){
        // console.log("q", queue.join(''));
        // console.log("tmp", temp);
        if(c == ")"){
            if(queue.length>1) temp = temp + c
            queue.pop();
        } else {
            queue.push(c);
            if(queue.length>1) temp = temp + c
        }

        if(queue.length == 0){
            ans = ans + temp;
            temp = ""
        }
    }
    // console.log(ans);
    return ans;
};