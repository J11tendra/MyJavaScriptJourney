function remove(array, element) {

    const index = array.indexOf(element);
    
    if (index > -1 & index < array.length) {
      array.splice(index, 1);
    }
    
    return array;
}
  
//Calling the function:
console.log(remove([1,2,3,4,5,6,7,8,9,10], 12));