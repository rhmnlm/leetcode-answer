/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let row = grid.length, col = grid[0].length;

    if(row < 3 || col < 3) return 0;

    let count = 0;
    
    for(let c=2; c<col;c++){
        for(let r=2; r<row;r++){
            //check if distinct
            let dict = new Set([1,2,3,4,5,6,7,8,9])
            for(let r2=r; r2>=r-2; r2--){
                for(let c2=c; c2>=c-2; c2--){
                    if(dict.has(grid[r2][c2])) dict.delete(grid[r2][c2])
                }
            }
            if(dict.size>0) continue;

            let sum = grid[r][c] + grid[r][c-1] + grid[r][c-2];
            // console.log(`${grid[r][c]} ${grid[r][c-1]} ${grid[r][c-2]} = ${sum}`);
            //check row by row
            if(sum!= grid[r-1][c] + grid[r-1][c-1] + grid[r-1][c-2]) continue;
            if(sum!= grid[r-2][c] + grid[r-2][c-1] + grid[r-2][c-2]) continue;
            //check col by col
            if(sum!= grid[r][c-2] + grid[r-1][c-2] + grid[r-2][c-2]) continue;
            if(sum!= grid[r][c-1] + grid[r-1][c-1] + grid[r-2][c-1]) continue;
            if(sum!= grid[r][c] + grid[r-1][c] + grid[r-2][c]) continue;
            // check for each diagonal
            if(sum!= grid[r][c] + grid[r-1][c-1] + grid[r-2][c-2]) continue;
            if(sum!= grid[r][c-2] + grid[r-1][c-1] + grid[r-2][c]) continue;

            count++
        }
    }

    return count;
};