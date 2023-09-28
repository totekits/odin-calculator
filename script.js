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
let result = '';

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
    switch (opt) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            if (num2 !== 0) {
                return divide(num1, num2);
            } else {
                return 'ERROR'
            } 
        default:
            return '';
    }
}

function updateDisplay() {
    display.textContent = num1 + opt + num2;
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const numberText = button.textContent;
        if (currentInput === 'num1') {
            num1 += numberText;
        } else {
            num2 += numberText;
        }
        updateDisplay();
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const operatorText = button.textContent;
        if (currentInput === 'num1' && num1 !== '') {
            if (num2 !== '' && opt !== '') {
                result = operate(opt, parseFloat(num1), parseFloat(num2)).toString();
                num1 = result;
                num2 = '';
            }
            opt = operatorText;
            currentInput = 'num2';
            updateDisplay();
        }
    });
});

equalButton.addEventListener('click', () => {
    if (num1 !== '' && num2 !== '' && opt !== '') {
        result = operate(opt, parseFloat(num1), parseFloat(num2));
        display.textContent = result;
        num1 = result
        num2 = '';
        opt = '';
        currentInput = 'num1';
    }
});

clearButton.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    opt = '';
    currentInput = 'num1';
    display.textContent = '';
});

deleteButton.addEventListener('click', () => {
    if (currentInput === 'num1') {
        num1 = num1.slice(0, -1);
    } else {
        num2 = num2.slice(0, -1);
    }
    updateDisplay();
});

periodButton.addEventListener('click', () => {
    if (currentInput === 'num1') {
        if (!num1.includes('.')) {
            num1 += '.';
        }
    } else {
        if (!num2.includes('.')) {
            num2 += '.';
        }
    }
    updateDisplay();
});

