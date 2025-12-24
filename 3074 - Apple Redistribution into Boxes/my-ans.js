/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let boxCount = capacity.length;
    let sortedCapacity = capacity.sort((a, b) => b - a);
    let minBox = 0, currBoxCapacity = sortedCapacity[minBox];

    // console.log(apple);
    // console.log(sortedCapacity);

    for(let i=0; i < apple.length; i++){
        let appleCount = apple[i];
        // console.log(`apple round: ${i}`)
        while(appleCount > 0){
            // console.log(`fitting appleCount ${appleCount} in box ${minBox} with capacity ${currBoxCapacity}`)
            if(currBoxCapacity == 0){
                minBox++;
                currBoxCapacity = sortedCapacity[minBox];
            }

            if(appleCount >= currBoxCapacity){
                appleCount -= currBoxCapacity
                currBoxCapacity = 0;
            } else if(currBoxCapacity > appleCount) {
                currBoxCapacity -= appleCount;
                appleCount = 0;
            }
        }
    }

    // minBox is index, so we return + 1.
    // and since the problem says guaranteed to package all apple into boxes,
    // we don't need to care for index out of bound for boxes
    return minBox + 1;
};