class Solution {
    public int minOperations(String s) {
        int startOne = 0;
        int startZero = 0;

        for(int i = 0; i < s.length(); i++){
            if(i % 2 == 0){
                if(s.charAt(i) == '1'){
                    startZero++;
                }

                if(s.charAt(i) == '0'){
                    startOne++;
                }
            }

            if(i % 2 == 1){
                if(s.charAt(i) == '1') {
                    startOne++;
                }
                if(s.charAt(i) == '0') {
                    startZero++;
                }
            }
        }

        return Math.min(startOne, startZero);
    }
}