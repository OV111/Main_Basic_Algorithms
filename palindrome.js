function isPalindrome(str) {
    let left = 0, right = str.length - 1;
    while(left < right) {
        if(str[left] === str[right]) {
            left++;
            right--;
        } else {
            return false;         // Output - false
        }
    } 
    return true;
}
console.log(isPalindrome("racecar")); // Output - true

// Another Way!
function isPalindrome2(str){
   let result = str.split("").reverse().join("");
   return str === result;
}
console.log(isPalindrome2("racecar")); // Output - true

function isPalindromeRecurcisve(str,left = 0,right = str.length-1) {
    if(left >= right) {
        return true;
    } else if(str[left] !== str[right]) {
        return false;
    }
    return isPalindromeRecurcisve(str,left += 1,right -= 1);
}
console.log(isPalindromeRecurcisve("racecar"));
