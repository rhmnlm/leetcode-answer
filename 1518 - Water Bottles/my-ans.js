/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let remainingBottles = numBottles;
    let maxBottle = numBottles;
    while(remainingBottles > 0){
        // console.log("remainingBottles", remainingBottles);
        // console.log("maxBottle", maxBottle)
        if(remainingBottles < numExchange){
            return maxBottle;
        }

        let remainder = remainingBottles % numExchange;
        maxBottle += Math.floor(remainingBottles/numExchange);
        remainingBottles = Math.floor(remainingBottles/numExchange) + remainder;
    }

    return maxBottle;
};