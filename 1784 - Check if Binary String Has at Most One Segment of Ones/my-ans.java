class Solution {
    public boolean checkOnesSegment(String s) {
        if(s.length() <= 2){
            return true;
        }
        
        char curr = '1';

        for(int i = 1; i < s.length(); i++){
            if(s.charAt(i) == '0'){
                curr = '0';
            }

            if(s.charAt(i) == '1' && curr == '0'){
                return false;
            }
        }

        return true;
    }
}
