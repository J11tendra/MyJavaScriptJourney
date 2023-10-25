function falsyVal() {
    let falsyVal = [];
    for (let i = 0; i < Array.length; i++) {
        if (arr[i]) {
            updatedArr.push(arr[i]);
        }
    }
    return updatedArr;
}