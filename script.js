const buttonSection = document.querySelector(".button_section");
const textBox = document.querySelector(".text_box");

// This will store the number on display
let currentValue = '0';

// These will store the numbers for our calcs
let firstNum = 0;
let lastNum = 0;

// Save the current operation
let currOperation = 'none';

// We need this so that after an operation
// We can type in a new number
let reset = false;

// Have the operator buttons in a list if needed
let opButtons = [];

// Set the textbox to 0 by default
textBox.textContent = currentValue;

function createButtons(){
    
    for(let i = 0; i < 24; i++){
        let button = document.createElement("button");
        button.className = 'button';
        
        // Don't forget to use inline JS for width / height
        // offsetWidth/Height gives you actual width/height
        button.style.width = `${(buttonSection.offsetWidth) / 4 - 10}px`;
        button.style.height = `${(buttonSection.offsetHeight) / 6 - 10}px`;
        button.addEventListener("click", buttonInput);

        indexToSymbol(i, button);
    
        buttonSection.appendChild(button);
    }
    
}

function buttonInput(button){
    console.log("A button was CLICKED!");
    console.log(`It was ${button.target.textContent}`);

    if(textBox.textContent.length > 12 && !isNaN(button.target.textContent)){
        // Do nothing when the number is too long
    }else{
        // !NaN means it is a number
        // This code handles entering any of the normal numbers
        if( (textBox.textContent == '0' && !isNaN(button.target.textContent)) || (reset == true && !isNaN(button.target.textContent)) ){
            textBox.textContent = button.target.textContent;
            reset = false;
        }else if(!isNaN(button.target.textContent)){
            textBox.textContent += button.target.textContent;
        }
    }

    // Handles Clear
    if(button.target.textContent == 'C'){
        textBox.textContent = '0';
        currOperation = 'none';
        firstNum = 0;
        lastNum = 0;

        for(let i = 0; i < opButtons.length; i++){
            opButtons[i].className = 'button';
        }
    }


    // Handles backspace
    if(textBox.textContent != '0' && button.target.textContent == '←'){
        textBox.textContent = textBox.textContent.slice(0,-1);
    }

    if(textBox.textContent.length == 0 && button.target.textContent == '←'){
        textBox.textContent = '0';
    }

    // Handles operations
    if(button.target.textContent == '÷'){
        // If we're coming from another operation, solve that first
        if(currOperation !== 'none'){
            lastNum = textBox.textContent;
            textBox.textContent = operation(parseInt(firstNum), parseInt(lastNum), currOperation).toString().slice(0,12);
            reset = true;
            currOperation = 'divide';
        }
        
        firstNum = textBox.textContent;
        currOperation = 'divide';
        button.target.className = 'button_alt';
        reset = true;
    }

    if(button.target.textContent == '+'){
        if(currOperation !== 'none'){
            lastNum = textBox.textContent;
            textBox.textContent = operation(parseInt(firstNum), parseInt(lastNum), currOperation).toString().slice(0,12);
            reset = true;
            currOperation = 'add';
        }
        
        firstNum = textBox.textContent;
        currOperation = 'add';
        button.target.className = 'button_alt';
        reset = true;
        
        
    }

    if(button.target.textContent == 'X'){
        if(currOperation !== 'none'){
            lastNum = textBox.textContent;
            textBox.textContent = operation(parseInt(firstNum), parseInt(lastNum), currOperation).toString().slice(0,12);
            reset = true;
            currOperation = 'multiply';
        }
        
        firstNum = textBox.textContent;
        currOperation = 'multiply';
        button.target.className = 'button_alt';
        reset = true;
        
    }

    if(button.target.textContent == '-'){
        if(currOperation !== 'none'){
            lastNum = textBox.textContent;
            textBox.textContent = operation(parseInt(firstNum), parseInt(lastNum), currOperation).toString().slice(0,12);
            reset = true;
            currOperation = 'subtract';
        }
        
        firstNum = textBox.textContent;
        currOperation = 'subtract';
        button.target.className = 'button_alt';
        reset = true;
        
        
    }

    // parseInt turns a string into an Int
    // var.toString() turns an Int into a string
    if(button.target.textContent == '='){
        lastNum = textBox.textContent;
        textBox.textContent = operation(parseInt(firstNum), parseInt(lastNum), currOperation).toString().slice(0,12);
        reset = true;

        currOperation = 'none';
        
    }




}

function operation(num1, num2, type){
    // Everytime we do an operation
    // We no longer need the last operation highlighted
    for(let i = 0; i < opButtons.length; i++){
        opButtons[i].className = 'button';
    }


    if(type == 'add'){
        return num1 + num2;
    }

    if(type == 'subtract'){
        return num1 - num2;
    }

    if(type == 'multiply'){
        return num1 * num2;
    }

    if(type == 'divide'){
        return num1 / num2;
    }
}














function indexToSymbol(index, button){
    if(index == 2){
        button.textContent = 'C';
        button.style.fontSize = '30px';
    }
    
    if(index == 3){
        button.textContent = '←';
        button.style.fontSize = '50px';
    }

    if(index == 7){
        button.textContent = '÷';
        button.style.fontSize = '50px';
        opButtons.push(button);
    }

    if(index == 8){
        button.textContent = '7';
        button.style.fontSize = '50px';
    }

    if(index == 9){
        button.textContent = '8';
        button.style.fontSize = '50px';
    }

    if(index == 10){
        button.textContent = '9';
        button.style.fontSize = '50px';
    }

    if(index == 11){
        button.textContent = 'X';
        button.style.fontSize = '30px';
        opButtons.push(button);
    }

    if(index == 12){
        button.textContent = '4';
        button.style.fontSize = '50px';
    }

    if(index == 13){
        button.textContent = '5';
        button.style.fontSize = '50px';
    }

    if(index == 14){
        button.textContent = '6';
        button.style.fontSize = '50px';
    }

    if(index == 15){
        button.textContent = '-';
        button.style.fontSize = '50px';
        opButtons.push(button);
    }

    if(index == 16){
        button.textContent = '1';
        button.style.fontSize = '50px';
    }

    if(index == 17){
        button.textContent = '2';
        button.style.fontSize = '50px';
    }

    if(index == 18){
        button.textContent = '3';
        button.style.fontSize = '50px';
    }

    if(index == 19){
        button.textContent = '+';
        button.style.fontSize = '50px';
        opButtons.push(button);
    }

    if(index == 21){
        button.textContent = '0';
        button.style.fontSize = '50px';
    }

    if(index == 23){
        button.textContent = '=';
        button.style.fontSize = '50px';
    }
}

createButtons();