/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    if(n < 3) return 0;
    // 9 + 16 = 25
    let count = 0;
    let squaredSet = new Set()

    for(let i=1; i<=n; i++) squaredSet.add(Math.pow(i,2));

    for(let i = 3; i <= n; i++){
        for(let j = 1; j < i; j++){
            if(squaredSet.has(Math.pow(i,2) - Math.pow(j,2))) count++
        }
    }

    return count;
};