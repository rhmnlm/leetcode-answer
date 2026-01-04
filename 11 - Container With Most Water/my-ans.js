/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1;
    let max_area = 0;
    while(l < r){
        let min_height = Math.min(height[l], height[r]);
        let width = r - l;
        max_area = Math.max(max_area, min_height * width);

        if(height[l] < height[r]){
            l++;
        } else {
            r--;
        }
    }

    return max_area;
};