let num1 = 1;
let num2 = 2;
let opt = 'a';

function add(num1, num2) {
    return num1 + num2; 
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(opt, num1, num2) {
    let result;
    if (opt === 'a') {
        result = add(num1, num2);
    } else if (opt === 's') {
        result = subtract(num1, num2);
    } else if (opt === 'm') {
        result = multiply(num1, num2);
    } else if (opt === 'd') {
        result = divide(num1, num2);
    } else {
        console.log('ERROR')
    }
    return result;
}

const result = operate(opt, num1, num2);
console.log(result);