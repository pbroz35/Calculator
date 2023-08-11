//listen for calculator button clicks
const keys=document.querySelectorAll('.btn');
keys.forEach(key=>key.addEventListener('click', function(){
    populateDisplay(key)}));

//addition
function add(num1, num2){
    display.textContent=`${num1+num2}`;
}

//subtraction
function subtract(num1, num2){
    display.textContent=`${num1-num2}`;
}

//multiplication
function multiply(num1, num2){
    display.textContent=`${num1*num2}`;
}

//divide
function divide(num1, num2){
    display.textContent=`${num1/num2}`;
}
//declare variables
let userInput1,
userInput2,
operator;

const display=document.querySelector('#display');
let entry1=[]; //first entry A ex. A + B, this entry is 'A'
let entry2=[];
let entryOperator;
let entryStored1=false; //true/false if entry 1 is complete 1=true 0=false
let haveOperator=false;

//clear calculator entries
function cleanCalculator(){
    entry1.splice(0,100);
    entry2.splice(0,100)
    entryStored1=false;
    haveOperator=false;
    display.textContent='-- Cleared --';
}


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
    if(keyPressed.textContent=='+' || keyPressed.textContent=='-' || keyPressed.textContent=='*' || keyPressed.textContent=='/' || keyPressed.textContent=='=')
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
    if(keyPressed.textContent=='+' || keyPressed.textContent=='-' || keyPressed.textContent=='*' || keyPressed.textContent=='/' )
    {
        if(entryStored1==false)
        {
            console.log('operator detected!');
            entryStored1=true;
            display.textContent=`${keyPressed.textContent}`;
            haveOperator=true;
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
    
    if(haveOperator==true && entryStored1==true && keyPressed.textContent=='=')
    {
        if(entryOperator=='+')
        {
            add(parseFloat(entry1.join('')), parseFloat(entry2.join('')));
        }
        else if(entryOperator=='-')
        {
            subtract(parseFloat(entry1.join('')), parseFloat(entry2.join('')));
        }
        else if(entryOperator=='*')
        {
            multiply(parseFloat(entry1.join('')), parseFloat(entry2.join('')));
        }
        else if(entryOperator=='/')
        {
            divide(parseFloat(entry1.join('')), parseFloat(entry2.join('')));
        }
    }

    if(keyPressed.textContent=='clr')
    {
        cleanCalculator();
    }



}

