const buttonSection = document.querySelector(".button_section");
const textBox = document.querySelector(".text_box");

let currentValue = '0';
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

    // !NaN means it is a number
    // This code handles entering any of the normal numbers
    if(textBox.textContent == '0' && !isNaN(button.target.textContent)){
        textBox.textContent = button.target.textContent;
    }else if(!isNaN(button.target.textContent)){
        textBox.textContent += button.target.textContent;
    }

    // Handles CLear
    if(button.target.textContent == 'C'){
        textBox.textContent = '0';
    }


    // Handles backspace
    if(textBox.textContent != '0' && button.target.textContent == '←'){
        textBox.textContent = textBox.textContent.slice(0,-1);
    }

    if(textBox.textContent.length == 0 && button.target.textContent == '←'){
        textBox.textContent = '0';
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