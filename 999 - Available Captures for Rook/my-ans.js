/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let r = [];
    const _n = board.length - 1;
    let count = 0;

    for(let row=0; row < board.length; row++){
        let found = false;
        for(let col=0; col < board[row].length; col++){
            if(board[row][col] == 'R'){
                r = [row, col];
                found = true;
                break;
            }
        }
        if(found) break;
    }

    let dir = [[0,1, _n], [0,-1, 0], [1,0, _n], [-1,0, 0]]

    for(const d of dir){
        let [x, y, boundary] = d;
        let [row, col] = r;
        if(x != 0){
            while( row != boundary){
                row += x;
                if(board[row][col] == 'p'){
                    count++;
                    break;
                }
                if(board[row][col] == 'B'){
                    break;
                }
            }
        } else {
            while( col != boundary){
                col += y;
                if(board[row][col] == 'p'){
                    count++;
                    break;
                }
                if(board[row][col] == 'B'){
                    break;
                }
            }
        }
    }

    return count;
};