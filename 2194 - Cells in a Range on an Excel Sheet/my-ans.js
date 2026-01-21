/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    // charCodeAt
    // fromCharCode

    const [m, n] = s.split(":");
    const [mcol, mrow] = m.split("");
    const [ncol, nrow] = n.split("");

    let ans = []

    for(let i = mcol.charCodeAt(0); i <= ncol.charCodeAt(0); i ++){
        for(let j = Number(mrow); j <= Number(nrow); j++){
            ans.push(`${String.fromCharCode(i)}${j}`)
        }
    }

    return ans;
};