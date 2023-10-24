function titleCase(str) {
    let arr = str.split(" ");
    let updatedArr = [];
    for (let letter in arr) {
        updatedArr[letter] = arr[letter][0].toUpperCase() + arr[letter].slice(1).toLowerCase();
    }
    return updatedArr.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));