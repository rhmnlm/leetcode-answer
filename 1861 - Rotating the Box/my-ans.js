var rotateTheBox = function(boxGrid) {
    const ROW_NUM = boxGrid.length;
    const COL_NUM = boxGrid[0].length;

    // Step 1: simulate gravity (stones fall to the right)
    for (let i = 0; i < ROW_NUM; i++) {
        let empty = COL_NUM - 1;

        for (let j = COL_NUM - 1; j >= 0; j--) {
            if (boxGrid[i][j] === '*') {
                empty = j - 1; // reset after obstacle
            } else if (boxGrid[i][j] === '#') {
                // move stone to "empty" position
                [boxGrid[i][j], boxGrid[i][empty]] = ['.', '#'];
                empty--;
            }
        }
    }

    // Step 2: rotate 90° clockwise
    const ans = Array.from({ length: COL_NUM }, () => Array(ROW_NUM));

    for (let i = 0; i < ROW_NUM; i++) {
        for (let j = 0; j < COL_NUM; j++) {
            ans[j][ROW_NUM - 1 - i] = boxGrid[i][j];
        }
    }

    return ans;
};