function getFactorial(num) {
    if(num==1){
      return 1; // Termination condition
    }
    if(num==0 || num<0){
      return 0; // Termination condition
    }
    return num*getFactorial(num-1);
  }
  
  console.log(getFactorial(5)) // 120
  console.log(getFactorial(12)) // 479001600