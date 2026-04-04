/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    if(rows===1)
    {
        return encodedText;
    }
    let column=encodedText.length/rows;

    let array=[]
    for(let i=0;i<column;i++)
    {
        for(let j=0;j<rows;j++)
        {
            let col=i+j;
            if(col>=column) break;
            let index=j*column+col;
            array.push(encodedText[index])
        }
    }  
    return array.join("").trimEnd();
};