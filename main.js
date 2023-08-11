//declare variables
let userInput1
userInput2
operator;


//addition
function add(num1, num2){
return num1+num2;
}

//subtraction
function subtract(num1, num2){
    return num1-num2;
}

//multiplication
function multiply(num1, num2){
    return num1*num2;
}

//divide
function divide(num1, num2){
    return num1/num2;
}

//operate function

function operate(userInput1, operator, userInput2){
    if (operator=='+')
    {
        add(userInput1,userInput2);
    }
    if(operator=='-')
    {
        subtract(userInput1,userInput2);
    }
    if(operator=='*'){
        multiply(userInput1,userInput2);
    }
    if(operator=='/')
    {
        divide(userInput1,userInput2);
    }

}
