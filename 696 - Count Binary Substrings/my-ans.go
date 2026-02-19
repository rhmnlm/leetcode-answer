func countBinarySubstrings(s string) int {
    var count, prevStreak, streak int = 0, 0, 1

    for i := 1; i < len(s); i++ {
        if s[i] == s[i-1] {
            streak++
        } else {
            prevStreak = streak
            streak = 1
        }

        if streak <= prevStreak {
            count++
        }
    }

    return count
}