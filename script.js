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

operationChar.forEach(
    operationChar => operationChar.addEventListener(
        "click", () => {displayScreen.value = `${displayScreen.value + operationChar.innerHTML}`}
    )
);
