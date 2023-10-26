function whatIsInAName(collection, source) {
    let matchObject = [];
    for (let i = 0; i < collection.length; i++) {
        let match = true;
        for (const property in source) {
            if (collection[i][property] !== source[property]) {
                match = false;
            }
        }
        if (match) {
            matchObject.push(collection[i])
        }
    }
    return matchObject;
};