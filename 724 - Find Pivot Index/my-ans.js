/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length <= 1) return 0;

    let mostLeftSum = nums.slice(1).reduce((curr, acc=0) => curr + acc);
    if(mostLeftSum == 0) return 0;

    let leftSum = nums[0];
    for(let i=1; i< nums.length; i++){
        let rightSum = 0;
        for(let j=nums.length-1; j>i; j--){
            // console.log(`j is ${j}`)
            rightSum+=nums[j]
            if(rightSum == leftSum && j-1 == i){
                return j-1
            }
            if(j==i) break;
            // console.log(`leftSum ${leftSum}, rightSum ${rightSum}`)
        }
        leftSum += nums[i]
    }

    let mostRightSum = nums.slice(0,-1).reduce((curr, acc=0) => curr + acc);
    if(mostRightSum == 0) return nums.length-1;

    return -1
};