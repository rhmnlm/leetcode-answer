// instead of recreating subarrays, we can count frequency of each element in subarrays.
// this way, we only loop n times instead of n*n-2 times.
var sumOddLengthSubarrays = function(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
            i == 0
        const left = i + 1; // 1
        const right = arr.length - i; // 5
        const subarrays = left * right; // 1 * 5 = 5
        const oddSubarrays = Math.ceil(subarrays / 2); // 5/2 = 2.5 = 3

        result += arr[i] * oddSubarrays; // 2
    }; 

    return result;
};