/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let min = Math.abs(matrix[0][0]), negCount = 0;
    let n = matrix.length;
    let sum = 0;
    let hasZero = false;

    // console.log(col);

    for(let row=0; row<n; row++){
        for(col=0; col<n; col++){
            // console.log(`adding ${matrix[row][col]}`)
            sum += Math.abs(matrix[row][col]);
            min = Math.min(min, Math.abs(matrix[row][col]));
            if(matrix[row][col] < 0){
                negCount++;
            }
            if(matrix[row][col] == 0) hasZero = true;
            // console.log(sum);
        }
    }

    // console.log(min);

    return (negCount % 2 == 0 || hasZero) ? sum : sum - min - min;
};