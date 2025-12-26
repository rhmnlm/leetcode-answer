/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let map = {}, ans = [];

    for(let i=0; i<nums.length;i++){
        map[nums[i]] = (map[nums[i]]+1 || 1);
        // console.log(`we have ${map[nums[i]]} of ${nums[i]}`)
        if(map[nums[i]] == 2){
            ans.push(nums[i])
        }
    }

    return ans;
};