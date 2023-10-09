function sumAll(numOne, numTwo) {
  
    sum = 0;
    
    for (x = numOne; x <= numTwo; x++) {
      
      sum += x;
    }
    
    return sum;
  }
  
  console.log(sumAll(1,10));