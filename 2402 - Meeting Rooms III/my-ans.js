/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    let sortedMeetings = meetings.sort((a, b) => a[0] - b[0]);
    // console.log(sortedMeetings);

    let usedCount = new Array(n).fill(0);
    let endTime = new Array(n).fill(0);

    for(let i=0; i < sortedMeetings.length; i++){
        let start = sortedMeetings[i][0];
        let end = sortedMeetings[i][1];
        let duration = end - start;

        let foundARoom = false, idx = 0, minEndTime = endTime[0];
        // console.log('minEndTime', minEndTime);
        for(let j=0; j<n;j++){
            if(endTime[j]<=start){
                foundARoom = true;
                idx = j;
                break;
            }
            if(endTime[j]<minEndTime){
                idx = j;
                minEndTime = endTime[j]
            }
        }

        // console.log("using room",idx);
        if(foundARoom){
            usedCount[idx]++;
            endTime[idx] = start > endTime[idx] ? start + duration : endTime[idx] + duration;
        } else {
            // console.log(idx);
            endTime[idx] += duration;
            usedCount[idx]++;
        }

        // console.log("endTime", endTime);
        // console.log("usedCount", usedCount);
    }

    let max = usedCount[0], maxRoomNo = 0;
    for(let k=1;k<usedCount.length;k++){
        if(usedCount[k]>max){
            max = usedCount[k];
            maxRoomNo = k;
        }
    }

    return maxRoomNo;

};