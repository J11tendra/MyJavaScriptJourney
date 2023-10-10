function leapYears(year) {
    // converting string to integer.
    Number(year);
    
    if (year%4 == 0) {
      return `Yes!, ${year} is a leap year.`;
    }
    else {
      return `${year} is not a leap year.`;
    }
}
 

//Calling the function:-
console.log(leapYears("783"));