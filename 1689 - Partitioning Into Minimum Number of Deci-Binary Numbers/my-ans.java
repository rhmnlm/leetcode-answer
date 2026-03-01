class Solution {
    public int minPartitions(String n) {
        for(int i = 9; i > 0; i--){
            if(n.indexOf(Integer.toString(i)) != -1){
                return i;
            }
        }

        return 0;
    }
}