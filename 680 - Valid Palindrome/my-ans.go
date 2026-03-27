func validPalindrome(s string) bool {
    IsPalindrome := func(left int, right int) bool {
        for left < right {
            if s[left] != s[right] {
                return false;
            }

            left++;
            right--;
        }

        return true
    }

    start:= 0
    end:= len(s) - 1

    for start < end {
        if s[start] != s[end] {
            return IsPalindrome(start + 1, end) || IsPalindrome(start, end - 1)
        }

        start++
        end--
    }

    return true
}