/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let tempMatrix = structuredClone(matrix);

    for(let row = 0; row < tempMatrix.length; row++){
        for(let col = 0; col < tempMatrix[row].length; col++){
            if(tempMatrix[row][col] == 0){
                // update every el in row to 0
                for(let i=0; i < tempMatrix[row].length; i++){
                    matrix[row][i] = 0;
                }
                // update every el in col to 0
                for(let j=0; j < tempMatrix.length; j++){
                    matrix[j][col] = 0;
                }
            }
        }
    }
};