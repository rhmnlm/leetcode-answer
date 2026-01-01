/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let dih = ['999', '888', '777', '666', '555', '444', '333', '222', '111', '000'];
    let ans = ''
    for(let i=0; i<dih.length; i++){
        if(num.indexOf(dih[i])>-1){
            ans = dih[i];
            break;
        }
    }

    return ans;
};