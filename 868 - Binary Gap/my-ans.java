class Solution {
    public int binaryGap(int n) {
        int gap = 1, max = 0;

        String s = Integer.toBinaryString(n);

        for(int i = 1; i < s.length(); i++){
            if(Character.compare(s.charAt(i), '0') == 0){
                gap++;
            } else {
                max = Math.max(gap, max);
                gap = 1;
            }
        }

        return max;
    }
}