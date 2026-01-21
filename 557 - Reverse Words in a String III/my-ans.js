/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = "", word = "";
    let pointer = 0;
    while(pointer < s.length){
        if(s[pointer] === " "){
            ans+= word + " ";
            word = ""
        } else if((pointer+1) === s.length){
            word = s[pointer] + word;
            ans+= word;
        } else {
            word = s[pointer] + word;
        }
        pointer++;
    }

    return ans;
};