/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let ans = [];
    let min = Infinity;
    for(let i = 0; i < arr.length - 1; i++){
        const diff = Math.abs(arr[i] - arr[i+1]);
        if(diff < min){
            min = diff;
            while(ans.length > 0){
                ans.pop();
            }
        }
        if(diff > min) continue;
        ans.push([arr[i], arr[i+1]])
    }

    return ans;
};