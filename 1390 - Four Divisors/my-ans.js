/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let ans = 0;
    for(let i=0; i<nums.length; i++){
        // let divisors = new Set();
        let count = 0, sum = 0;
        let k=1;
        while(count <= 4 && k*k <= nums[i]){
            if(nums[i]%k == 0){
                count++;
                sum+= k;
                if(nums[i]/k!==k){
                    count++;
                    sum+= nums[i]/k;
                }
            }
            k++;
        }
        if(count == 4){
            ans+=sum;
        }
    }

    return ans;
};