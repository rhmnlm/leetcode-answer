import (
    "strconv"
    "strings"
)

func countPrimeSetBits(left int, right int) int {
    count := 0

    isPrime := map[int]struct{} {
        2: {}, 3: {}, 5: {}, 7: {}, 11: {}, 13: {}, 17: {}, 19: {},
    }

    for i:= left; i <= right; i++ {

        strBin := strconv.FormatInt( int64(i), 2 )
        onesOnly := strings.ReplaceAll( strBin, "0", "" )

        if _, ok := isPrime[len(onesOnly)]; ok {
            count++
        }
    }

    return count
}