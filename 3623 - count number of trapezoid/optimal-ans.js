/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
    
    const map = new Map(), mod = BigInt(10 ** 9 + 7);


    for(const [x, y] of points) {
        map.set(y, (map.get(y) || 0n) + 1n);
    }

    let ans = 0n, totalPairs = 0n;

    for(const points of map.values()) {
       const horPairs = points * (points - 1n) / 2n;
       const count = (horPairs * totalPairs) % mod;
       ans = (ans + count) % mod;
       totalPairs = (totalPairs + horPairs) % mod;
    }

    return Number(ans);
}