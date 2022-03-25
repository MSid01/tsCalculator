import { question } from "readline-sync";

function myCalculator(): string {
    const firstStr: string= question('enter first number\n');
    const operator: string= question('enter operator\n');
    const secondStr: string= question('enter second number\n');
    const isValidExpression=(isNum(firstStr) && isOperator(operator) && isNum(secondStr));
    if(isValidExpression){
        const firstNum= parseInt(firstStr);
        const secondNum= parseInt(secondStr);
        switch(operator){
            case "+":return `The sum is ${firstNum + secondNum}`;
            case "-":return `The subtraction is ${firstNum - secondNum}`;
            case "*":return `The product is ${firstNum * secondNum}`;
            case "/":return `The division is ${firstNum / secondNum}`;
        }
    }
    return "<<<<___Invalid expression___>>>>";
    
}

function isNum(num: string):boolean{
    return !isNaN(parseInt(num));
}

function isOperator(operator: string):boolean{
    switch(operator){
        case "+":return true;
        case "-":return true;
        case "*":return true;
        case "/":return true;
        default: return false;
    }
}
console.log(myCalculator());