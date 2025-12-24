/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let version1Chunks = version1.split('.');
    let version2Chunks = version2.split('.');
    let maxComparison = Math.min(version1Chunks.length, version2Chunks.length);

    let longerVersion = version1Chunks.length > version2Chunks.length ?
                            1
                            : version1Chunks.length < version2Chunks.length ?
                                -1
                                : 0
    
    for(let i = 0; i < maxComparison; i++){
        if(Number(version1Chunks[i]) > Number(version2Chunks[i])) return 1;
        if(Number(version1Chunks[i]) < Number(version2Chunks[i])) return -1
    }

    if(longerVersion == 0) return 0;

    if(longerVersion == 1){
        for(let i = version2Chunks.length; i < version1Chunks.length; i ++){
            console.log(version1Chunks[i]);
            if(Number(version1Chunks[i]) > 0) return 1;
        }
        return 0;
    }

    if(longerVersion == -1){
        for(let i = version1Chunks.length; i < version2Chunks.length; i ++){
            if(Number(version2Chunks[i])>0) return -1
        }
        return 0;
    }

    return 0;
};