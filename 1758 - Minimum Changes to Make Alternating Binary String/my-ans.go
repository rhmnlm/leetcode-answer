func minOperations(s string) int {
    startWithZero := 0
    startWithOne := 0

    for i := 0; i < len(s); i++ {
        expectedZero := byte('0' + i%2)
        expectedOne := byte('1' - i%2)

        if s[i] != expectedZero {
            startWithZero++
        }
        if s[i] != expectedOne {
            startWithOne++
        }
    }

    if startWithZero < startWithOne {
        return startWithZero
    }
    return startWithOne
}