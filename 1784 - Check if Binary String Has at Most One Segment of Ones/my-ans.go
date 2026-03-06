func checkOnesSegment(s string) bool {
    if len(s) <= 2 {
        return true
    }
    
    c := '1'

    for i := 1; i < len(s); i++ {
        if s[i] == '0'{
            c = '0'
        }
        
        if s[i] == '1' && c == '0' {
            return false
        }
    }

    return true;
}
