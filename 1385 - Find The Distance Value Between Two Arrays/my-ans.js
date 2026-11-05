/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = arr1.length;

    for(const n of arr1){
        for(const m of arr2){
            if(Math.abs(n-m) <= d){
                count--;
                break;
            }
        }
    }

    return count;
};
