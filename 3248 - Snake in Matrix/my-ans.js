/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let i = 0, j = 0;
    const map = {
        "UP": [-1, 0],
        "DOWN": [1, 0],
        "RIGHT": [0, 1],
        "LEFT": [0, -1]
    }

    for(let k=0; k < commands.length; k++){
        let move = map[commands[k]];
        i+= move[0];
        j+= move[1];
    }

    return (i*n)+j;
};