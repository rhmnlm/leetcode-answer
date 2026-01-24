/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const map = {
        1 : 'a', 2: 'b', 3: 'c', 4 : 'd', 5: 'e', 6: 'f',
        7: 'g', 8: 'h', 9: 'i', '10#': 'j', '11#': 'k', '12#': 'l',
        '13#': 'm', '14#': 'n', '15#': 'o', '16#': 'p', '17#': 'q',
        '18#': 'r', '19#': 's', '20#': 't', '21#': 'u', '22#': 'v',
        '23#': 'w', '24#': 'x', '25#': 'y', '26#': 'z'
    }

    let ans = '', pointer = 0;

    while(pointer < s.length){
        if(s[pointer+2] == '#'){
            ans += map[`${s[pointer]}${s[pointer+1]}${s[pointer+2]}`];
            pointer +=3;
        } else {
            ans += map[s[pointer]];
            pointer++;
        }
    }

    return ans;
};