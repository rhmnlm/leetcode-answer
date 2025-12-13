/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function(complexity) {
    const MOD = 1e9 + 7
    let rootPwStr = complexity[0];

    for(let i = 1; i < complexity.length; i++){
        if(complexity[i] <= rootPwStr){
            return 0;
        }
    }

    return factorial(complexity.length - 1, MOD)
};

function factorial(num, MOD) {
  if (num < 0) return undefined; // Factorials for negative numbers are undefined
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num = (num * x) % MOD;
    x--;
  }
  return num;
}
