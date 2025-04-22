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

let firstNum, secondNum, operand;
