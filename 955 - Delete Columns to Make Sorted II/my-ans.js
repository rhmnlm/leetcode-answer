/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let ans = 0;
    let tempStrs = [...strs]

    ans = makeLexical(ans, tempStrs);
    return ans;
};

function makeLexical(ans, tempStrs){
    // console.log(tempStrs);
    let needDeletion = false, indexToDelete = -1, m = tempStrs[0].length;
    let nextStr = "", prevStr = "";
    // 1. check if current iteration is lexical, increment count if not
    for(let i=1; i <= tempStrs.length; i++){
        if(tempStrs[i] < tempStrs[i-1]){
            needDeletion = true;
            nextStr = tempStrs[i];
            prevStr = tempStrs[i-1];
            ans++;
            break;
        }
    }

    // 2. if length of str[0] is 1, return the count
    if(m==1 && needDeletion) return ans;

    // 3. create a copy of strs with deleted char
    if(needDeletion){
        for(let i=0; i < nextStr.length; i++){
            if(nextStr[i] < prevStr[i]){
                indexToDelete = i;
                tempStrs = tempStrs.map((str)=> {return str.slice(0, indexToDelete) + str.slice(indexToDelete+1);})
                break;
            }
        }
        ans = makeLexical(ans, tempStrs);
    }

    return ans;
}