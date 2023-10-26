function diffArray(arr1, arr2) {
    const newArr = [];
    const sumOfArray = arr1.concat(arr2);
    for (let i = 0; i < sumOfArray.length; i++) {
        if (arr1.indexOf(sumOfArray[i]) < 0) {
            newArr.push(sumOfArray[i]);
        }
        else if (arr2.indexOf(sumOfArray[i]) < 0) {
            newArr.push(sumOfArray[i]);
        }
    }
    return newArr;
};