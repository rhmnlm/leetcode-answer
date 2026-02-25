import "cmp"
import "slices"
import "math/bits"

func sortByBits(arr []int) []int {
    slices.SortFunc(arr, func (a,b int) int {
        if bits.OnesCount(uint(a)) == bits.OnesCount(uint(b)) {
            return cmp.Compare(a, b)
        } else {
            return cmp.Compare(bits.OnesCount(uint(a)), bits.OnesCount(uint(b)))
        }
    })

    return arr
}
