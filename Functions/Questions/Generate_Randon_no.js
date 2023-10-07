function genRandom(start, end) {
    return Math.floor(Math.random() * end) + start
  }
  
  console.log(genRandom(1,10)) // random int between 1 to 10
  console.log(genRandom(80,90)) // random int between 80 to 90