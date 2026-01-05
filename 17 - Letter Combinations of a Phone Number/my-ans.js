/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const num_dict = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    let ans = []

    const generate = (index, base = '') => {
        // console.log(`index ${index} and base is ${base}`)
        while(index < digits.length){
            let rotation = num_dict[digits[index]];
            // console.log("rotation", rotation);
            for(let i=0; i < rotation.length; i++){
                let tmpBase = base + rotation[i];
                generate(index+1, tmpBase);
                if(tmpBase.length == digits.length){
                    ans.push(tmpBase);
                }
            }
            index++
        }
    }

    generate(0);

    // loop through, keep index, add combination, on exhaust, exit.
    return ans;
};
