/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    let sortedHappiness = happiness.sort((a,b) => b - a);
    let maxSum = 0;

    for(let i = 0; i < k; i++){
        maxSum += sortedHappiness[i] - i <= 0 ? 0 : sortedHappiness[i] - i;
    }

    return maxSum;
};