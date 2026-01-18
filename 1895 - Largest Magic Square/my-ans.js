/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
    let k = Math.min(grid.length, grid[0].length);
    if(k == 1) return 1;

    const isMagicSquare = (width, row, col) => {
        let point = 0;
        console.log("width", width, "row", row, "col", col);
        for(let j=0; j < width; j++){
            point+= grid[row][col+j]
        }

        console.log("point", point);

        //check each row
        for(let n=row+1; n < row+width; n++){
            let rowSum = 0
            for(let m=0; m < width; m++){
                rowSum+= grid[n][col+m]
            }
            if(rowSum !== point) return false;
        }

        // check each column
        for(let m=0; m < width; m++){
            let colSum = 0
            for(let n=row; n < row+width; n++){
                colSum += grid[n][col+m]
            }
            if(colSum !== point) return false;
        }

        // check diagonally
        let topLeftBottomRight = 0, bottomLeftTopRight = 0;
        for(let p=0; p < width; p++){
            topLeftBottomRight+= grid[row + p][col + p];
            bottomLeftTopRight+= grid[row + width - p - 1][col+p];
        }

        if(topLeftBottomRight !== point || bottomLeftTopRight !== point) return false;

        return true;
    }

    while(k>0){
        console.log("k", k)
        for(let j=0; j <= grid.length - k; j++){
            for(let h=0; h <= grid[j].length - k; h++){
                // console.log(`width ${k}, row ${j} col ${h}`)
                if(isMagicSquare(k, j, h)) return k;
            }
        }
        k--;
    }

    return 0;
};

console.log(largestMagicSquare([[8,1,6],[3,5,7],[4,9,2],[7,10,9]]));