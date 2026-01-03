/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    //alt => R Y G, R G Y, G Y R, G R Y, Y R G, Y G R = 6
    //sandwich  => R Y R, R G R, G R G, G Y G, Y R Y, Y G Y = 6
    //stacking case:
    //top is alt => R Y G => G R Y | Y G R = 2 alt, YRY, YGY, = 2 sndwich
    //top is sandwich => R Y R => YRG, GRY = 2 alt. GRG, YGY, YRY = 3 sndwch
    // let ans = 0;
    const MOD = 1e9 + 7
    const dpAlt = new Array(n).fill(0);
    const dpSndwch = new Array(n).fill(0);

    dpAlt[0] = 6;
    dpSndwch[0] = 6;

    for(let i=1; i<n; i++){
        dpAlt[i] = (dpAlt[i-1] * 2 + dpSndwch[i-1] * 2) % MOD;
        dpSndwch[i] = (dpAlt[i-1] * 2 + dpSndwch[i-1] * 3) % MOD;
    }

    return (dpAlt[n-1] + dpSndwch[n-1]) % MOD;
};