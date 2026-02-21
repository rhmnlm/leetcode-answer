import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

class Solution {
    public int countPrimeSetBits(int left, int right) {
        Set<Integer> primeset = Set.of(2, 3, 5, 7, 11, 13, 17, 19);
        int count = 0;

        for(int i = left; i <= right; i++){
            if(primeset.contains(
                     Arrays.stream( Integer.toBinaryString(i).split("0") )
                            .collect(Collectors.joining(""))
                            .length()
                    )
            ){
                count++;
            }
        }
        
        return count;
    }
}