func bitwiseComplement(n int) int {
    if n == 0 {
        return 1
    }

    k := 0

    for (1 << k) <= n {
        k++
    }

    return (1 << k) - 1 - n
}