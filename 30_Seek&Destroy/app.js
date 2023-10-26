function destroyer(arr) {
    const removeItems = Object.values(arguments).slice(1);
    const filteredArray = [];
    for (let a = 0; a < arr.length; a++) {
        let removeElement = false;
        for (let b = 0; b < removeItems.length; b++) {
            if (arr[a] === removeItems[b]) {
                removeElement = true;
            }
        }
        if (!removeElement) {
            filteredArray.push(arr[a]);
        }
    }
    return filteredArray;
};