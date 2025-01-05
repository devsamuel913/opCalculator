// Display references
const lowerDisplay = document.querySelector('.lower-disp');
const upperDisplay = document.querySelector('.upper-disp');

// References for control buttons
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');

// References for number buttons
const button7 = document.querySelector('.seven');
const button8 = document.querySelector('.eight');
const button9 = document.querySelector('.nine');
const button4 = document.querySelector('.four');
const button5 = document.querySelector('.five');
const button6 = document.querySelector('.six');
const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');
const button3 = document.querySelector('.three');
const button0 = document.querySelector('.zero');
const buttonPoint = document.querySelector('.point');

// References for operator buttons
const buttonDivide = document.querySelector('.divide');
const buttonMultiply = document.querySelector('.multiply');
const buttonSubtract = document.querySelector('.minus');
const buttonSum = document.querySelector('.plus');
const buttonEqual = document.querySelector('.equal');


let divideSign = "÷", plusSign = "+", minusSign = "-", multiplySign = "×";
buttonEqual.addEventListener("click", equal);

function equal() {
    if (lowerDisplay.textContent != '' && (lowerDisplay.textContent.includes(plusSign) || lowerDisplay.textContent.includes(minusSign) || lowerDisplay.textContent.includes(multiplySign) || lowerDisplay.textContent.includes(divideSign))) {
        let operator = null;
        let operatorIndex = -1;

        // Find the operator
        if (lowerDisplay.textContent.includes(multiplySign)) {
            operator = multiplySign;
            operatorIndex = lowerDisplay.textContent.indexOf(multiplySign);
        } else if (lowerDisplay.textContent.includes(plusSign)) {
            operator = plusSign;
            operatorIndex = lowerDisplay.textContent.indexOf(plusSign);
        } else if (lowerDisplay.textContent.includes(minusSign)) {
            operator = minusSign;
            operatorIndex = lowerDisplay.textContent.indexOf(minusSign);
        } else if (lowerDisplay.textContent.includes(divideSign)) {
            operator = divideSign;
            operatorIndex = lowerDisplay.textContent.indexOf(divideSign);
        }

        // Isolate the numbers based on the operator's position
        let numberOne = parseFloat(lowerDisplay.textContent.slice(0, operatorIndex).trim());
        let numberTwo = parseFloat(lowerDisplay.textContent.slice(operatorIndex + operator.length).trim());

        let result = null;
        // Perform the operation based on the operator
        if (operator === multiplySign) {
            result = numberOne * numberTwo;
        } else if (operator === plusSign) {
            result = numberOne + numberTwo;
        } else if (operator === minusSign) {
            result = numberOne - numberTwo;
        } else if (operator === divideSign) {
            if (numberTwo === 0) {
                result = "Error"; // Handle divide by zero
            } else {
                result = numberOne / numberTwo;
            }
        }

        // Display result on the upper display
        upperDisplay.textContent = `${numberOne} ${operator} ${numberTwo} = ${result}`;
       // Display result on the lower display
        lowerDisplay.textContent = result;
    }
}


// Event listeners for operators

buttonMultiply.addEventListener("click",multiply)
function multiply(){
    if(lowerDisplay.textContent != ''){
        if(!lowerDisplay.textContent.endsWith("÷") && !lowerDisplay.textContent.endsWith("×") && !lowerDisplay.textContent.endsWith("-") && !lowerDisplay.textContent.endsWith("+") && !lowerDisplay.textContent.endsWith("=")){
            lowerDisplay.textContent = lowerDisplay.textContent + '×';
        }else{
            if(lowerDisplay.textContent.endsWith("×")){
                let coords = lowerDisplay.textContent.indexOf("×");
                equal();    
                //if(lowerDisplay.textContent.length > coords){
                  //  let secondPortion = parseFloat(lowerDisplay.textContent.slice((coords+1),(lowerDisplay.textContent.length-1)))
                    //if(isNaN(secondPortion)){
                        

                    //}

                //}

            }else{
                let coords = lowerDisplay.textContent.indexOf("×");
                let firstNumber = lowerDisplay.textContent.slice(0,coords);
                lowerDisplay.textContent = firstNumber += "×";
            }
        }
        
    }
}



buttonSubtract.addEventListener("click",subtract)
function subtract(){
    if(lowerDisplay.textContent != ''){
        if(!lowerDisplay.textContent.endsWith("÷") && !lowerDisplay.textContent.endsWith("×") && !lowerDisplay.textContent.endsWith("-") && !lowerDisplay.textContent.endsWith("+") && !lowerDisplay.textContent.endsWith("=")){
            lowerDisplay.textContent = lowerDisplay.textContent + '-';
        }else{
            if(lowerDisplay.textContent.endsWith("-")){
                let coords = lowerDisplay.textContent.indexOf("-");
                equal();    
                //if(lowerDisplay.textContent.length > coords){
                  //  let secondPortion = parseFloat(lowerDisplay.textContent.slice((coords+1),(lowerDisplay.textContent.length-1)))
                    //if(isNaN(secondPortion)){
                        

                    //}

                //}

            }else{
                let coords = lowerDisplay.textContent.indexOf("-");
                let firstNumber = lowerDisplay.textContent.slice(0,coords);
                lowerDisplay.textContent = firstNumber += "-";
            }
        }
        
    }
}


buttonSum.addEventListener("click",sum)
function sum(){
    if(lowerDisplay.textContent != ''){
        if(!lowerDisplay.textContent.endsWith("÷") && !lowerDisplay.textContent.endsWith("×") && !lowerDisplay.textContent.endsWith("-") && !lowerDisplay.textContent.endsWith("+") && !lowerDisplay.textContent.endsWith("=")){
            lowerDisplay.textContent = lowerDisplay.textContent + '+';
        }else{
            if(lowerDisplay.textContent.endsWith("+")){
                let coords = lowerDisplay.textContent.indexOf("+");
                equal();    
                //if(lowerDisplay.textContent.length > coords){
                  //  let secondPortion = parseFloat(lowerDisplay.textContent.slice((coords+1),(lowerDisplay.textContent.length-1)))
                    //if(isNaN(secondPortion)){
                        

                    //}

                //}

            }else{
                let coords = lowerDisplay.textContent.indexOf("+");
                let firstNumber = lowerDisplay.textContent.slice(0,coords);
                lowerDisplay.textContent = firstNumber += "+";
            }
        }
        
    }
}



buttonDivide.addEventListener("click",divide)
function divide(){
    if(lowerDisplay.textContent != ''){
        if(!lowerDisplay.textContent.endsWith("÷") && !lowerDisplay.textContent.endsWith("×") && !lowerDisplay.textContent.endsWith("-") && !lowerDisplay.textContent.endsWith("+") && !lowerDisplay.textContent.endsWith("=")){
            lowerDisplay.textContent = lowerDisplay.textContent + '÷';
        }else{
            if(lowerDisplay.textContent.endsWith("÷")){
                let coords = lowerDisplay.textContent.indexOf("÷");
                equal();    
                //if(lowerDisplay.textContent.length > coords){
                  //  let secondPortion = parseFloat(lowerDisplay.textContent.slice((coords+1),(lowerDisplay.textContent.length-1)))
                    //if(isNaN(secondPortion)){
                        

                    //}

                //}

            }else{
                let coords = lowerDisplay.textContent.indexOf("÷");
                let firstNumber = lowerDisplay.textContent.slice(0,coords);
                lowerDisplay.textContent = firstNumber += "÷";
            }
        }
        
    }
}






// Clear button
clearButton.addEventListener("click", () => {
    lowerDisplay.textContent = '';
    upperDisplay.textContent = '';
});

// Delete button
deleteButton.addEventListener("click", () => {
    lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1); // Remove last character
    
});

// Point button
buttonPoint.addEventListener("click", () => {
    lowerDisplay.textContent += ".";
    
});

// Event listeners for numbers
[button0, button1, button2, button3, button4, button5, button6, button7, button8, button9].forEach((button, index) => {
    button.addEventListener("click", () => {
        lowerDisplay.textContent += index.toString();
    });
});
