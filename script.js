let firstNum = 1;
let secondNum = 2;
let operator = 'a';

function add(firstNum, secondNum) {
    return firstNum + secondNum; 
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
    let result;
    if (operator === 'a') {
        result = add(firstNum, secondNum);
    } else if (operator === 's') {
        result = subtract(firstNum, secondNum);
    } else if (operator === 'm') {
        result = multiply(firstNum, secondNum);
    } else if (operator === 'd') {
        result = divide(firstNum, secondNum);
    } else {
        console.log('ERROR')
    }
    return result;
}

const result = operate(operator, firstNum, secondNum);
console.log(result);