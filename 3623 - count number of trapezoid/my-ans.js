const factoMap = {
    '0': 1,
    '1': 1
}

const fact = (function () {
    return function facto(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        if (factoMap[n]) {
            // console.log("value from caeche")
            return factoMap[n];
        }
        factoMap[n] = n * facto(n - 1);
        return factoMap[n];
    };
})();

// choose k out of n. formula: n!/(k!*(n-k)!)
function permutation(k, n){
    // given 2, 3
    return factoMap[n] / (factoMap[k] * factoMap[n-k]); // 6 / (2 
}


// Not optimized. Can only cater for 2 longest x axis with multiple y points.
/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {

    const _Y_AxisMap = {

    }

    let longestXAxisMapLength = 0;
    let longestXAxisIndex = 'default';
    let secondLongestXAxis = 'default';

    for(let i = 0; i < points.length; i++){
        if(_Y_AxisMap[points[i][1]] != null){
            let y = _Y_AxisMap[points[i][1]];
            y.push(points[i]);
            _Y_AxisMap[points[i][1]] = y;
        } else {
            let y = [];
            y.push(points[i]);
            _Y_AxisMap[points[i][1]] = y;
        }

        if(_Y_AxisMap[points[i][1]].length > longestXAxisMapLength){
            const tempLongestIndex = longestXAxisIndex;
            longestXAxisIndex = points[i][1];

            if(tempLongestIndex != longestXAxisIndex){
                secondLongestXAxis = tempLongestIndex;
            }
        } else {
            if(points[i][1] !== longestXAxisIndex){
                if(secondLongestXAxis == "default"){
                    secondLongestXAxis = points[i][1]
                } else {
                    secondLongestXAxis = 
                        _Y_AxisMap[points[i][1]].length > _Y_AxisMap[secondLongestXAxis].length
                        ? points[i][1]
                        : secondLongestXAxis
                }
            }
        }
        longestXAxisMapLength = Math.max(longestXAxisMapLength, _Y_AxisMap[points[i][1]].length);
        
    }

    console.log(_Y_AxisMap);
    console.log(`longest x (multiple y point) axis: ${longestXAxisIndex}, length: ${longestXAxisMapLength}`);
    console.log("secondLongestXAxis", secondLongestXAxis);

    fact(_Y_AxisMap[longestXAxisIndex].length);
    if(secondLongestXAxis == "default" 
        || secondLongestXAxis == longestXAxisIndex 
        || _Y_AxisMap[secondLongestXAxis].length < 2) 
    {   console.log("no possible trapezoid");
        return 0;
    }

    _Y_AxisMapArray = Object.values(_Y_AxisMap);
    if(_Y_AxisMap[secondLongestXAxis].length > 1){
        let eligiblePointsCount = _Y_AxisMapArray.reduce((acc, curr) => { 
            if(curr.length >= 2){
                return acc + 1;
            }
            return acc;
        }, 0);

        const combinations = permutation(2, eligiblePointsCount);
        console.log(`${combinations} combinations (selecting 2, 2) found with eligible points count: ${eligiblePointsCount}`);

        return combinations * _Y_AxisMapArray.reduce((acc, curr) => {
            if(curr.length >= 2){
                return acc == 0 ? acc + permutation(2, curr.length) : acc * permutation(2, curr.length);
            }
            return acc;
        }, 0);
    }


    return permutation(2, _Y_AxisMap[longestXAxisIndex].length) * permutation(2, _Y_AxisMap[secondLongestXAxis].length);
};




/**
[[1,0],[2,0],[3,0],[2,2],[3,2]]
mapY = {
    0: [1,0], [2,0], [3,0]
    2: [2,2], [3,2]
}

choose k out of n.
n!/(k!*(n-k)!)

trapezoid = 
- [1,0], [2,0], [2,2], [3,2]
- []

 */