/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    grid = grid.map((row) => row.sort((a,b) => a - b));
    let ans = 0;
    
    console.log(grid);

    for(let i = 0; i < grid[0].length; i++){
        let max = -Infinity;
        for(const g of grid){
            max = Math.max(g[i], max)
        }
        // console.log(max);
        ans += max
    }

    return ans;
};