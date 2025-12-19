/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = [];

    for(let i=left; i <= right; i++){
        let num = i, allowedToPush = true;

        for(const d of num.toString()){
            if(Number(d)===0 || i % Number(d) !== 0){
                allowedToPush = false;
                break;
            };
        }

        if(!allowedToPush) continue;
        
        ans.push(i);
    }

    return ans;
};