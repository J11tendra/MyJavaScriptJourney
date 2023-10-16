
let operator = prompt("What calculation do you wanna perform?");
let a = prompt("enter num one");
let b = prompt("enter num two");

function calculator(a, operator, b) {

    if (operator === "+") {
        return result = a+b;
    }
    else if (operator === "-") {
        return result = a-b;
    }
    else if (operator === "*") {
        return result = a*b;
    }
    else if (operator === "/") {
        return result = a/b;
    }
}
