# odin-calculator
ref: https://www.theodinproject.com/lessons/foundations-calculator
## Requirements
- can add, subtract, multiply, divide
- only two numbers are operated at one time
- answers with long decimals must be rounded so they don't overflow the screen 
## Steps
1. Decide what components to have
    - display: main, sub
    - clear, delete 
    - numbers: 0-9, ., =
    - operators: +, -, x, ÷
    - copyright footer
2. Structure the HTML 
3. Make it work
    - create functions for add, subtract, multiply, divide
    - create variables for first number, second number, operator
    - create a function called 'operate' that takes two numbers and an operator, and calls one of the above functions on the numbers 
4. Make it look nice