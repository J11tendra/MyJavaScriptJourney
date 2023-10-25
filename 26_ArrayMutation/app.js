function mutation(arr) {
    const firstWord = arr[0].toLowerCase();
    const secondWord = arr[1].toLowerCase();
    for (let x = 0; x < secondWord.length; x++) {
        if (firstWord.indexOf(secondWord[x]) < 0) {
            return false;
        }
    }
    return true;
};