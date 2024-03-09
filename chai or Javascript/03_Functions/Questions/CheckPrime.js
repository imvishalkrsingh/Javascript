function checkPrime(num, div=2) {
    // Base case
    if (num <= 2){
      return (num == 2) ? true : false;
    }
  
    // No Divisor case
    if (div * div > num){
      return true;
    }
      
    // Number is not prime if divisible
    if (num % div == 0){
      return false;
    }   
    // Recursive call with next divisor
    return checkPrime(num, div+1);
  }
  
  console.log(checkPrime(27)) // false
  console.log(checkPrime(19)) // true