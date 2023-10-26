// 1st method;
function sumAll(arr) {
    let minNum = arr[0];
    let maxNum = arr[1];
    let numCount = Math.abs(minNum - maxNum) + 1;
    let sum = ((minNum + maxNum) * numCount) / 2;
    return sum;
}

// 2nd method;
function sumRange(arr) {
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    sum = 0;
    for (let i = minNum; i <= maxNum; i++) {
        sum += i; 
    }
    return sum;
};