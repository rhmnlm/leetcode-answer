/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const obstacleSet = new Set(
        obstacles.map(([x, y]) => `${x},${y}`)
    );

    // directions: up, right, down, left
    const dirs = [
        [0, 1],   // U
        [1, 0],   // R
        [0, -1],  // D
        [-1, 0]   // L
    ];

    let dir = 0; // start facing up
    let x = 0, y = 0;
    let max = 0;

    for (let cmd of commands) {
        if (cmd === -1) {
            dir = (dir + 1) % 4; // turn right
        } else if (cmd === -2) {
            dir = (dir + 3) % 4; // turn left
        } else {
            for (let i = 0; i < cmd; i++) {
                const nx = x + dirs[dir][0];
                const ny = y + dirs[dir][1];

                if (obstacleSet.has(`${nx},${ny}`)) break;

                x = nx;
                y = ny;
                max = Math.max(max, x*x + y*y);
            }
        }
    }

    return max;
};