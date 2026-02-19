class Solution {
    public int countBinarySubstrings(String s) {
        int count = 0, prevStreak = 0, streak = 1;

        for(int i = 1; i < s.length(); i++){
            if(s.charAt(i) == s.charAt(i-1)){
                streak++;
            } else {
                prevStreak = streak;
                streak = 1;
            }

            if(streak <= prevStreak){
                count++;
            }
        }

        return count;
    }
}