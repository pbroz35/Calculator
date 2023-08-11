//declare variables
let userInput1,
userInput2,
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

const display=document.querySelector('#display');
let entry1=[];

function storeNumber1(keyPressed)
{
    entry1.push(keyPressed.textContent);
}


//populates calculator screen
function populateDisplay(keyPressed)
{
    display.textContent=`${keyPressed.textContent}`;
    storeNumber1(keyPressed);
}


//listen for calculator button clicks
const keys=document.querySelectorAll('.btn');
keys.forEach(key=>key.addEventListener('click', function(){
    populateDisplay(key)}));

