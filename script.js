const display = document.getElementById('display');
const divideButton = document.getElementById('divide-button');
const multiplyButton = document.getElementById('multiply-button');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const operatorButtons = document.querySelectorAll('.operators');
const numberButtons = document.querySelectorAll('.numbers');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const periodButton = document.getElementById('period');

let a = '';
let b = '';
let o = '';
let result = '';

function add(a, b) {
    return a + b; 
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        alert("Number can't be divided by 0")
        return 'ERROR'
    }
}

function operate() {
    if (o === '+') {
        result = add(parseFloat(a), parseFloat(b));
    } else if (o === '-') {
        result = subtract(parseFloat(a), parseFloat(b));
    } else if (o === '*') {
        result = multiply(parseFloat(a), parseFloat(b)); 
    } else if (o === '/') {
        result = divide(parseFloat(a), parseFloat(b));
    }
    result = parseFloat(result.toFixed(3));
}

function updateDisplay() {
    if (a === '' && o === '' && b === '' && result === '') {
        display.textContent = '';
    } else if (a !== '' && o === '' && b === '' && result === '') {
        display.textContent = a;
    } else if (a !== '' && o !== '' && b === '' && result === '') {
        display.textContent = a + o;
    } else if (a !== '' && o !== '' && b !== '' && result === '') {
        display.textContent = a + o + b;
    } else if (a !== '' && o !== '' && b !== '' && result !== '') {
        a = result;
        result = '';
        b = '';
        display.textContent = a + o;
    } else if (a !== '' && o === '' && b !== '' && result !== '') {
        a = result;
        result = '';
        b = '';
        display.textContent = a;
    }
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const numberText = button.textContent;
        if (o === '') {
            a += numberText;
        } else if (o !== '') {
            b += numberText;
        }  
        updateDisplay();
    });
});

divideButton.addEventListener('click', () => {
    if (a !== '' && o === '' && b === '') {
        o = '/';
    } else if (a !== '' && o !== '' && b !== '') {
        operate();
        o = '/';
    }
    updateDisplay();
});

multiplyButton.addEventListener('click', () => {
    if (a !== '' && o === '' && b === '') {
        o = '*';
    } else if (a !== '' && o !== '' && b !== '') {
        operate();
        o = '*';
    }
    updateDisplay();
})

addButton.addEventListener('click', () => {
    if (a !== '' && o === '' && b === '') {
        o = '+';
    } else if (a !== '' && o !== '' && b !== '') {
        operate();
        o = '+'
    }
    updateDisplay();
})

subtractButton.addEventListener('click', () => {
    if (a === '' && o ==='' && b === '') {
        a = '-';
    } else if (a !== '' && o === '' && b === '') {
        o = '-';
    } else if (a !== '' && o !== '' && b !== '') {
        operate(); 
        o = '-';
    }
    updateDisplay();
})

clearButton.addEventListener('click', () => {
    a = '';
    b = '';
    o = '';
    result = '';
    updateDisplay();
});

deleteButton.addEventListener('click', () => {
    if (a !== '' && o === '' && b === '') {
        a = a.slice(0, -1);
    } else if (a !== '' && o !== '' && b === '') {
        o = '';
    } else if (a !== '' && o !== '' & b !== '') {
        b = b.slice(0, -1);
    }
    updateDisplay();
});

equalsButton.addEventListener('click', () => {
    if (a !== '' && o !== '' && b !== '') {
        operate();
        o = '';
        updateDisplay();
    }
});

periodButton.addEventListener('click', () => {
    if (a === '' && o === '' && b === '') {
        a += '.';
    } else if ((a !== '' && !a.includes('.')) && o === '' && b === '') {
        a += '.';
    } else if (a !== '' && o !== '' && (b !== '' && !b.includes('.'))) {
        b += '.';
    }
    updateDisplay();
});    

