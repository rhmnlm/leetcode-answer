import (
    "math"
)

func getMinDistance(nums []int, target int, start int) int {
    _min := math.MaxInt16

    for i:= start; i < len(nums); i++ {
        if target == nums[i] {
            _min = min(_min, abs(i - start))
        }
    }

    for i:= start; i >= 0; i-- {
        if target == nums[i] {
            _min = min(_min, abs(i - start))
        }
    }

    return _min
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}


func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}