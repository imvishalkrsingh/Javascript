function letterCount(str, c) {
    var count=0;
    str=str.toLowerCase(); //Case insensitive
    for(var i=0;i<str.length;i++){
       if(str.charAt(i)==c){ 
         count++; //Increment count
       }
    }
    return count;
  }
  
  console.log(letterCount("Connect",'c')) // 2
  console.log(letterCount("first person",'s')) // 2