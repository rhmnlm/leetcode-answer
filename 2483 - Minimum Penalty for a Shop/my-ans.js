/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {

    let bestTimeToClose = 0, maxProfit = 0, currProfit=0;

    for(let i=0; i<customers.length; i++){
        if(customers[i] == 'Y') currProfit++;
        if(customers[i] == 'N') currProfit--;

        if(currProfit > maxProfit){
            maxProfit = currProfit;
            bestTimeToClose = i;
        }
    }

    return maxProfit <= 0 ? 0 : bestTimeToClose + 1;
};