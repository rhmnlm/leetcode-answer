const moves = [
    [0, 1],   // North
    [1, 0],   // East
    [0, -1],  // South
    [-1, 0]   // West
];

const directionSet = ['North', 'East', 'South', 'West'];

/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {

    this.maxY = height - 1;
    this.maxX = width - 1;
    this.pos = [0,0];
    this.dir = 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {

    const cycle = 2 * (this.maxX + this.maxY);
    const originalNum = num;
    num %= cycle;

    if (num === 0) {
        if (originalNum > 0 && this.pos[0] === 0 && this.pos[1] === 0) {
            this.dir = 2; // South
        }
        return;
    }

    // console.log(currPos);

    while(num > 0){
        const facing = this.dir;
        const [x, y] = moves[facing];
        // console.log(directionSet[facing]);

        if(x){
            if(this.pos[0] + x > this.maxX || this.pos[0] + x < 0){
                this.dir = (this.dir + 3) % 4;
                continue;
            } else {
                this.pos[0] += x;
                num--;
            }
        } else {
            if(this.pos[1] + y > this.maxY || this.pos[1] + y < 0){
                this.dir = (this.dir + 3) % 4;
                continue;
            } else {
                this.pos[1] += y;
                num--;
            }
        }
        // console.log(this.pos);
    }
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    return this.pos;
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    return directionSet[this.dir];
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */

 // border: 19, 13
 // move 32 steps
 // currpos: 19, 13
 // move 18 steps
 // 1, 13
