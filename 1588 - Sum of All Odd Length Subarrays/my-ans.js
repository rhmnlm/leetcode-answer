/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;

    const getOddSubArraySum = (n, arr) => {
        for(let i=0; i<=arr.length-n; i++){
            for(let j=0; j<n;j++){
                sum+=arr[i+j]
            }
        }
    }

    for(let k=1; k <= arr.length; k+=2){
        getOddSubArraySum(k, arr);
    }

    return sum;
};