/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let row = 0, finalRow = grid.length;
    let finalCol = grid[0].length;
    let ans=0;

    while(row < finalRow){
        let col = 0;
        // console.log("row", row)
        while(col < finalCol){
            // console.log(grid[row][col])
            if(grid[row][col] < 0){
                ans+=finalCol - col;
                // console.log("ans", ans)
                break;
            }
            col++
        }
        row++;
    }
    return ans;
};