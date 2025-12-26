/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    //determine max
    for(let i=0; i<candies.length; i++){
        max = Math.max(max, candies[i])
    }

    let ans = [];
    for(let k=0; k<candies.length; k++){
        if(candies[k] + extraCandies >= max){
            ans.push(true);
        } else {
            ans.push(false);
        }
    }

    return ans;
};