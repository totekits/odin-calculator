const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const periodButton = document.getElementById('period');

let num1 = '';
let num2 = '';
let opt = '';
let currentInput = 'num1';

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
        console.log('')
    }
    return result;
}

const result = operate(opt, num1, num2);

console.log(result);