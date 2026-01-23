/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    // start with 1 ends with n;
    this.pointer = 1;
    this.stream  = new Array(n);
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey - 1] = value;
    if(idKey !== this.pointer) return []
    let chunk = [];
    while(this.pointer <= this.stream.length && this.stream[this.pointer-1]!=null){
        chunk.push(this.stream[this.pointer-1]);
        this.pointer++;
    }
    return chunk;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */