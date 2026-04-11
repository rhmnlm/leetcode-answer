/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const tracker = new Map();
    for(let i = 0; i < nums.length; i++){
        if(!tracker.has(nums[i])){
            tracker.set(nums[i], [])
        }
        tracker.get(nums[i]).push(i)
    }

    let min = Infinity;

    for(const [num, indexes] of tracker.entries()){
        if(indexes.length >=3 ){
            for(let i = 0; i < indexes.length - 2; i++)
            min = Math.min(min, 2 * (indexes[i+2] - indexes[i]));
        }
    }

    return min === Infinity ? -1 : min;
};

// 0, 2, 3 => 2 + 1 + 3 = 6
// 2, 3, 4 => 1 + 1 + 2 = 6