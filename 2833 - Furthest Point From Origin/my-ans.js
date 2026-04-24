/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let r = 0; let l = 0; let em = 0;
    for(const move of moves){
        if(move === 'L') l++;
        if(move === 'R') r++;
        if(move === '_') em++;
    }

    if(l > r) return l + em - r;
    if(r > l) return r + em - l;
    
    return em;
};