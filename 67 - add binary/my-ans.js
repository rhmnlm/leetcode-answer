/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    if(a.length > b.length) b = b.padStart(a.length, "0");
    if(b.length > a.length) a = a.padStart(b.length, "0");

    // console.log(`a ${a}, b ${b}`)

    let ans = ""
    let carry = "0"
    
    for(let index = a.length-1; index >=0; index--){
        // console.log("carry", carry);
        // XOR
        // console.log(`xor for ${a.at(index)} ${b.at(index)}`)
        ans += a.at(index) ^ b.at(index) ^ carry;

        // console.log(`current iteration has ${`${carry}${a.at(index)}${b.at(index)}`.match(/[1]/).length} one(s)`)
        if(`${carry}${a.at(index)}${b.at(index)}`.match(/[1]/gm) !== null && `${carry}${a.at(index)}${b.at(index)}`.match(/[1]/gm).length>=2){
            carry = "1"
        } else {
            carry = "0"
        }
            
    }

    // console.log("final carry", carry)

    if(carry == "1") ans += carry;

    // console.log("ans", ans);

    return ans.split('').reverse().join('');
};