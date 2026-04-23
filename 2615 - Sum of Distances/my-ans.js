/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    let ans = new Array(nums.length);

    let index_map = {}

    for(let i = 0; i < nums.length; i++){
        if(!index_map[nums[i]]){
            index_map[nums[i]] = [i]
        } else {
            index_map[nums[i]].push(i)
        }
    }

    for (const [number, indexes] of Object.entries(index_map)) {
    const n = indexes.length;
    
    // prefix sum of indexes
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + indexes[i];
    }

    for (let i = 0; i < n; i++) {
        const idx = indexes[i];

        const leftSum = prefix[i];           // sum of indexes to the left
        const rightSum = prefix[n] - prefix[i + 1]; // sum of indexes to the right

        const leftCount = i;
        const rightCount = n - i - 1;

        ans[idx] = (idx * leftCount - leftSum) + (rightSum - idx * rightCount);
    }
}

    return ans;
};