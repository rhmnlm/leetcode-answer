import java.util.Arrays;

class Solution {
    public int[] sortByBits(int[] arr) {
        int[][] counters = new int[arr.length][2];

        for(int i = 0; i < arr.length; i++){
            String[] ones = Integer.toBinaryString(arr[i]).split("0");
            int one_count = String.join("", ones).length();
            counters[i][0] = arr[i];
            counters[i][1] = one_count;
        }

        Arrays.sort(counters, (a, b) -> {
            if (a[1] != b[1]) {
                return Integer.compare(a[1], b[1]);
            } else {
                return Integer.compare(a[0], b[0]);
            }
        });

        int[] ans = Arrays.stream(counters)
                    .mapToInt(row -> row[0])
                    .toArray();

        return ans;
    }
}