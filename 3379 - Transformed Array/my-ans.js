/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    const result = nums.map((x)=> x);
    const n = nums.length;

    const move = (size, start, move) => {
        return (((start + move) % size) + size) % size
    }

    for(let i=0; i < nums.length; i++){
        result[i] = nums[move(n, i, nums[i])]
    }

    return result;
};