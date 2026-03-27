/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function isPalindrome(left, right){
        while(left < right){
            if(s[left] !== s[right]) return false;

            left++;
            right--;
        }

        return true;
    }

    let start = 0, end = s.length - 1;

    while(start < end){
        if(s[start] !== s[end]){
            return isPalindrome(start + 1, end) || isPalindrome(start, end - 1);
        }

        start++;
        end--;
    }

    return true;
};
