// Q.  9. Write a function to check if an input string is a palindrome


function findPalindrome(str) {
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)!=str.charAt(str.length-i-1)){ // Comparison fail
        return false;
      }
    }
    return true;
  }
  
  console.log(findPalindrome("bannana")) //false
  console.log(findPalindrome("racecar")) //true
  console.log(findPalindrome("madam")) //true