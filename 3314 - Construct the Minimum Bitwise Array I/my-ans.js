/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    // console.log(1 | 2);
    let OR_Map = {}, ans = []
    for(let i=0; i<nums.length; i++){
        let k=0; let minAns = -1;
        while(k <= nums[i]){
            if(!OR_Map[k]){
                OR_Map[k] = (k | (k+1))
            }

            if(OR_Map[k] == nums[i]){
                minAns = k;
                break;
            }
            k++;
        }
        ans.push(minAns);
    }
    return ans;
};