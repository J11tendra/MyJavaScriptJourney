function findLongestWordLength(str) {
    let LongestLength = 0;
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= LongestLength) {
            LongestLength = arr[i].length;
        }
    }
    return console.log(LongestLength);
}