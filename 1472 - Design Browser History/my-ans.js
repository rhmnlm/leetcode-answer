/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.checkpoint = 0;
    this.histories = [homepage];
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.checkpoint++;
    this.histories.splice(this.checkpoint, this.histories.length - this.checkpoint);
    this.histories.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    const backward = this.checkpoint - steps;
    if(backward < 0){
        this.checkpoint = 0;
        return this.histories[this.checkpoint];
    }

    this.checkpoint = backward;
    return this.histories[this.checkpoint];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    const forward = this.checkpoint + steps;
    if(forward >= this.histories.length){
        this.checkpoint = this.histories.length - 1;
        return this.histories[this.checkpoint];
    }

    this.checkpoint = forward;
    return this.histories[this.checkpoint];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */