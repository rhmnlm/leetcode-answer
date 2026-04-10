package main

import "math"

func minimumDistance(nums []int) int {
	calcDistance := func(i, j, k int) int {
		return abs(i-j) + abs(j-k) + abs(k-i)
	}

	if len(nums) < 3 {
		return -1
	}

	min := math.MaxInt64
	found := false

	for i := 0; i < len(nums)-2; i++ {
		a := nums[i]
		for j := i + 1; j < len(nums)-1; j++ {
			if nums[j] == a {
				for k := j + 1; k < len(nums); k++ {
					if nums[k] == a {
						found = true
						dist := calcDistance(i, j, k)
						if dist < min {
							min = dist
						}
					}
				}
			}
		}
	}

	if found {
		return min
	}
	return -1
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
