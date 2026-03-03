import (
    "math"
    "fmt"
)

func findKthBit(n int, k int) byte {
    if n == 1 {
        return '0'
    }

    len := int(math.Pow(float64(2), float64(n))) - 1

    mid := math.Floor(float64(len) / 2) + 1

    if k == int(mid) {
        return '1'
    }

    if k < int(mid) {
        return findKthBit( n - 1, k)
    }

    if findKthBit(n-1, int(len)-k+1) == '0' {
        return '1'
    } else {
        return '0'
    }
}