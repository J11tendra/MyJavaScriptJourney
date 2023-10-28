function myReplace(str, before, after) {
    const upperRegex = /^[A-Z]/;
    
    if (upperRegex.test(before)) {
        after = after[0].toUpperCase() + after.substring(1);
    }
    else {
        after = after[0].toLowerCase() + after.substring(1);
    }

    return str.replace(before, after);
};