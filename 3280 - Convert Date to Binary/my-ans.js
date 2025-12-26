/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date
            .split('-')
            .map((num) => Number(num).toString(2))
            .join('-');
};