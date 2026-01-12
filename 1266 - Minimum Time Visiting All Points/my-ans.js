/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let ans = 0;

    for(let point = 0; point < points.length - 1; point++){
        let curr = points[point];
        let next = points[point+1];
        ans+= Math.max(Math.abs(curr[0]-next[0]), Math.abs(curr[1]-next[1]));
    }
    return ans;
};