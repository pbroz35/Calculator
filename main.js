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
let entry1=[]; //first entry A ex. A + B, this entry is 'A'
let entry2=[];
let entryOperator;
let entryStored1=false; //true/false if entry 1 is complete 1=true 0=false

//store first entry
function storeNumber1(keyPressed)
{
    entry1.push(keyPressed.textContent);
    display.textContent=`${entry1.join('')}`;
}

//store operator
function storeOperator(keyPressed)
{
    entryOperator=(keyPressed.textContent);
    //display.textContent=`${entryOperator}`;
}

function storeNumber2(keyPressed)
{
    entry2.push(keyPressed.textContent);
    if(keyPressed.textContent=='+' || keyPressed.textContent=='-' || keyPressed.textContent=='*' || keyPressed.textContent=='/')
    {
        entry2.pop();
    }
    else{
        display.textContent=`${entry2.join('')}`;
        }
}

//populates calculator screen
function populateDisplay(keyPressed)
{
    if(keyPressed.textContent=='+' || keyPressed.textContent=='-' || keyPressed.textContent=='*' || keyPressed.textContent=='/')
    {
        if(entryStored1==false)
        {
            console.log('operator detected!');
            entryStored1=true;
            display.textContent=`${keyPressed.textContent}`;
            storeOperator(keyPressed);
        }
    }

    if(entryStored1==false)
    {
    display.textContent=`${keyPressed.textContent}`;
    storeNumber1(keyPressed); //send entries to first entry storage
    }

    if(entryStored1==true)
    {
    storeNumber2(keyPressed);
    }
    

}


//listen for calculator button clicks
const keys=document.querySelectorAll('.btn');
keys.forEach(key=>key.addEventListener('click', function(){
    populateDisplay(key)}));

