import (
    "strconv"
)

func binaryGap(n int) int {
    var _max, gap int = 0, 1

    s:= strconv.FormatInt(int64(n), 2)

    for i:= 1; i < len(s); i++ {
        if s[i] == '0' {
            gap++
        } else {
            _max = max(gap, _max)
            gap = 1
        }
    }

    return _max
}