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
