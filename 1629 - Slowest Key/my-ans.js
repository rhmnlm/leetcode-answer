/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let max = releaseTimes[0];
    let key = keysPressed[0];
    const n = releaseTimes.length;

    for(let i = 1; i < n; i++){
        if(releaseTimes[i] - releaseTimes[i-1] > max){
            max = releaseTimes[i] - releaseTimes[i-1];
            key = keysPressed[i]
        } else if (releaseTimes[i] - releaseTimes[i-1] == max){
            key = keysPressed[i] > key ? keysPressed[i] : key
        }
    }

    return key;
};