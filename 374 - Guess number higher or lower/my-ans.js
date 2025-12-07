/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let res = - 1, low = 1, top = n;
    ans = 1;

    while(res!= 0){
        res = guess(Math.floor((low+top)/2));

        console.log(`guessed ${Math.floor((low+top)/2)}, res ${res}`);
        if(res == 0) ans = Math.floor((low+top)/2)

        if(res == - 1){
            top = Math.floor((low+top)/2) - 1
        }

        if(res == 1){
            low = Math.floor((low+top)/2) + 1
        }
    }

    return ans;
};