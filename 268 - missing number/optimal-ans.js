var missingNumber = function (nums) {
    const n = nums.length;
    const numsSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
    const expectedSum = (n * (n + 1)) / 2;

    return expectedSum - numsSum;
};