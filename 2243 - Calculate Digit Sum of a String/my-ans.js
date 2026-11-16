/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const numMap = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9
}

const sum = (num) => {
    // console.log(num);
    let a = 0;
    for(const n of num){
        a+=numMap[n];
    }
    // console.log(a);
    return a;
}

var digitSum = function(s, k) {
    while(s.length > k){
        // console.log(s);
        let t = "";
        let i = 0;
        while(i < s.length){
            const start = i; const end = k;
            i+=k;
            t = t.concat(
                sum( s.substr(start,end))); 
        }
        s = t;
    }

    return s
};
