/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let min = 0; max = s.length;
    let ans = [];

    const push = (index) => {
        if(s[index] === "I"){
            ans.push(min);
            min++;
        } else {
            ans.push(max);
            max--;
        }
    }

    // push(0)

    for(let i=0; i < s.length; i++ ){
        push(i);
    }

    ans.push(min);
    return ans;
};