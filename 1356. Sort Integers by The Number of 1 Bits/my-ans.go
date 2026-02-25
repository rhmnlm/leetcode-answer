import (
    "strconv"
    "strings"
)

func sortByBits(arr []int) []int {
    counters := make([][]int, len(arr))

    for i := 0; i < len(arr); i++ {
        bin := strconv.FormatInt(int64(arr[i]), 2)
        removedzeros := strings.Split(bin, "0")
        onesonly := strings.Join(removedzeros, "")

        counters[i] = []int{arr[i], len(onesonly)}
    }

    sort.Slice(counters, func(i, j int) bool {
        if counters[i][1] == counters[j][1] {
            return counters[i][0] < counters[j][0]
        }
        return counters[i][1] < counters[j][1]
    })

    result := make([]int, len(counters))
    for i := 0; i < len(counters); i++ {
        result[i] = counters[i][0]
    }

    return result
}