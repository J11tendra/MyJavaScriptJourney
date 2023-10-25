function groupArray(arr, size) {
    const updatedArr = [];
    for (let i = 0; i < arr.length; i += size) {
        updatedArr.push(arr.slice(i, i + size));
    }
    return updatedArr;
};