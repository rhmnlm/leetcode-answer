/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    // 97 - 96
    // charCodeAt
    // fromCharCode
    let t1 = '';
    for(let i = 0; i < s.length; i++){
        t1+= `${s.charCodeAt(i) - 96}`
    }
    
    let round = 0;
    while(round < k){
        t2 = 0;
        for(const d of String(t1)){
            t2+= Number(d);
        }
        t1 = t2;
        round++;
    }

    return Number(t1);
};