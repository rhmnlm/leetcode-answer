/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const MAX = 100;
    let h = 1;

    // find highest
    for(const n of nums){
        if(n == MAX){
            h = MAX;
            break;
        }

        h = Math.max(h, n);
    }

    let turn = 0;
    for(const n of nums){
        turn+= h - n;
    }

    return turn;
};
