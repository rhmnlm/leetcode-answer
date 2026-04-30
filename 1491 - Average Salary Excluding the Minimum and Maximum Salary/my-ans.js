/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = 0, min = 10e6;
    let tot = 0;

    for(const s of salary){
        max = Math.max(s, max);
        min = Math.min(s, min);
        tot+= s;
    }

    return (tot - max - min)/(salary.length - 2);
};