func countDigits(num int) int {
    count:= 0

    _num := num

    for num > 0 {
        divider := num % 10

        if _num % divider == 0 {
            count++
        }

        num = num / 10
    }

    return count
}