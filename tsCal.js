"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function myCalculator() {
    var firstStr = (0, readline_sync_1.question)('enter first number\n');
    var operator = (0, readline_sync_1.question)('enter operator\n');
    var secondStr = (0, readline_sync_1.question)('enter second number\n');
    var isValidExpression = (isNum(firstStr) && isOperator(operator) && isNum(secondStr));
    if (isValidExpression) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        switch (operator) {
            case "+": return "The sum is ".concat(firstNum + secondNum);
            case "-": return "The subtraction is ".concat(firstNum - secondNum);
            case "*": return "The product is ".concat(firstNum * secondNum);
            case "/": return "The division is ".concat(firstNum / secondNum);
        }
    }
    return "Invalid expression";
}
function isNum(num) {
    return !isNaN(parseInt(num));
}
function isOperator(operator) {
    switch (operator) {
        case "+": return true;
        case "-": return true;
        case "*": return true;
        case "/": return true;
        default: return false;
    }
}
console.log(myCalculator());
