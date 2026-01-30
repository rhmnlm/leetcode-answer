/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const w = s.split(" ");
    // console.log(w);
    const vowel = new Set(["a", "e", "i", "o", "u"]);
    let firstwordvowelcount = w[0].split("").reduce(
        (acc, el) => {
            if(vowel.has(el)){
                return acc + 1;
            } else {
                return acc;
            }
        }, 0)

    for(let i = 1; i < w.length; i++){
        let _w = '', vcount = 0;
        for(const c of w[i]){
            _w = c + _w;
            if(vowel.has(c)) vcount++;
        }

        if(vcount == firstwordvowelcount) w[i] = _w;
    }

    return w.join(" ");
};