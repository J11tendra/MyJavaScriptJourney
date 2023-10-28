function pairElement(str) {
    const dnaObj = {
        A: ["A", "T"],
        T: ["T", "A"],
        C: ["C", "G"],
        G: ["G", "C"],
    };
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(dnaObj[str[i]]);
    }
    return arr;
};