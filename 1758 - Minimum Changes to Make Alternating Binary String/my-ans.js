var minOperations = function(s) {
    let startZero = 0, startOne = 0;

    for(let i = 0; i < s.length; i++){
        if(i % 2 == 0){
            if(s[i] == '1') startZero++;
            if(s[i] == '0') startOne++;
        }

        if(i % 2 == 1){
            if(s[i] == '1') startOne++;
            if(s[i] == '0') startZero++;
        }
        // 110010
    }

    return Math.min(startOne, startZero);
};