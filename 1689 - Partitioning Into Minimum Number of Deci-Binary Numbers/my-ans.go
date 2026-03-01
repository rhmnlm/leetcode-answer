import (
    "strings"
    "strconv"
)

func minPartitions(n string) int {
    for i:= 9; i > 0; i-- {
        if strings.Contains(n, strconv.Itoa(i)) {
            return i
        }
    }

    return 0
}