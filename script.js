const operationChar = document.querySelectorAll(".op-char");
const displayScreen = document.querySelector("#display-screen");
const equalBtn = document.querySelector("#equal-btn");
const clearBtn = document.querySelector("#clear-btn");
let firstNum, secondNum, operand;

function add(num1,num2){
    return num1 + num2
}
function subtract(num1,num2){
    return num1 - num2
}
function multiply(num1,num2){
    return num1 * num2
}
function divide(num1,num2){
    return num1 / num2
}
function operate(firstNum,secondNum,operand){
    switch(operand){
        case "+":
            return add(firstNum,secondNum)
            break;
        case "-":
            return subtract(firstNum,secondNum)
            break;
        case "*":
            return multiply(firstNum,secondNum)
            break;
        case "/":
            return divide(firstNum,secondNum)
            break;
        default:
            
    }
}

function operandReco(char){
    switch (char) {
        case "+":
            return true
            break;
        case "-":
            return true
            break;
        case "*":
            return true
            break;
        case "×":
            return true
            break;
        case "/":
            return true
            break;
        case "÷":
            return true
            break;
        default:
            return false
            break;
    }
}

operationChar.forEach(
    operationChar => operationChar.addEventListener(
        "click", () => {displayScreen.value = `${displayScreen.value + operationChar.innerHTML}`}
    )
);

equalBtn.addEventListener(
    'click', () => {
        // convert the input from string to an array so i can recognize the first, second number and the operator through array methods
        let expression = displayScreen.value.split("");
        operand = expression.find(operandReco);
        // convert the string to an integer through parseInt()
        firstNum = parseInt(expression.slice(0,expression.findIndex(operandReco)).join(""));
        secondNum = parseInt(expression.slice(expression.findIndex(operandReco) + 1 , expression.length).join(""));
        displayScreen.value = operate(firstNum,secondNum,operand);
        }
);