function repeat(string, multiple) {
    
    repeatedString = "";
    
    for (let x = 0; x < multiple; x++) {
        repeatedString += string;
    }
    
    return repeatedString;
}
 
// Calling the function:-
repeat("jitendra", 12);