/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const n = s.length;
    const countA = new Array(n);
    const countB = new Array(n);

    let bCount = 0;
    for(let i=0; i < n; i++){
        countB[i] = bCount;
        if(s[i] == 'b') bCount++;
    }

    let aCount = 0;
    for(let i=n-1; i >= 0; i--){
        countA[i] = aCount;
        if(s[i] == 'a') aCount++;
    }

    let minDeletions = n;
    for(let i=0; i < n; i++){
        minDeletions = Math.min(minDeletions, countA[i] + countB[i]);
    }

    return minDeletions;
    
};