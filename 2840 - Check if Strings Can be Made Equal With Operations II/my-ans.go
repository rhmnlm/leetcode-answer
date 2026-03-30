func checkStrings(s1 string, s2 string) bool {
    odd := [26]int{}
    even := [26]int{}

    // ch := int(s[0]) - 'a'

    for i:= 0; i < len(s1); i++ {
        if i % 2 == 0 {
            even[int(s1[i]) - 'a']++
            even[int(s2[i]) - 'a']--
        } else {
            odd[int(s1[i]) - 'a']++
            odd[int(s2[i]) - 'a']--
        }
    }

    for i := 0; i < 26; i++ {
        if odd[i] != 0 || even[i] != 0 {
            return false
        }
    }

    return true
}