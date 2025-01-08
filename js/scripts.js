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

// Equal button functionality
buttonEqual.addEventListener("click", equal);

function equal() {
    if (lowerDisplay.textContent !== '') {
        let operator = getOperator(lowerDisplay.textContent);
        if (operator) {
            let operatorIndex = lowerDisplay.textContent.indexOf(operator);
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

            // Display the result
            upperDisplay.textContent = `${numberOne} ${operator} ${numberTwo} = ${result}`;
            lowerDisplay.textContent = result;
        }
    }
}

// Event listeners for operators
buttonMultiply.addEventListener("click", multiply);
function multiply() {
    performOperation(multiplySign);
}

buttonSubtract.addEventListener("click", subtract);
function subtract() {
    performOperation(minusSign);
}

buttonSum.addEventListener("click", sum);
function sum() {
    performOperation(plusSign);
}

buttonDivide.addEventListener("click", divide);
function divide() {
    performOperation(divideSign);
}

// Generalized function to handle operators and calculation
function performOperation(operator) {
    if (lowerDisplay.textContent !== '') {
        if (lowerDisplay.textContent.includes(plusSign) || lowerDisplay.textContent.includes(minusSign) ||
            lowerDisplay.textContent.includes(multiplySign) || lowerDisplay.textContent.includes(divideSign)) {

            // If there's already an operator, calculate the previous operation before adding the new operator
            let lastOperator = getOperator(lowerDisplay.textContent);
            let coords = lowerDisplay.textContent.indexOf(lastOperator);
            let firstNumber = parseFloat(lowerDisplay.textContent.slice(0, coords));
            let secondNumber = parseFloat(lowerDisplay.textContent.slice(coords + lastOperator.length));
            equal(firstNumber, secondNumber, lastOperator);
        }
        // Now, add the new operator after the calculation
        lowerDisplay.textContent = lowerDisplay.textContent + operator;
    }
}

// Utility function to get the operator from the display
function getOperator(display) {
    if (display.includes(multiplySign)) return multiplySign;
    if (display.includes(plusSign)) return plusSign;
    if (display.includes(minusSign)) return minusSign;
    if (display.includes(divideSign)) return divideSign;
    return null;
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
    // Prevent adding a period if the last character is already a period
    // Also prevent adding more than one period in a number
    if (!lowerDisplay.textContent.includes('.') || lowerDisplay.textContent.includes(plusSign) || lowerDisplay.textContent.includes(minusSign) || lowerDisplay.textContent.includes(multiplySign) || lowerDisplay.textContent.includes(divideSign)) {
        // Check if the current number part (before an operator or at the end) already has a period
        if (!getLastNumber(lowerDisplay.textContent).includes('.')) {
            lowerDisplay.textContent += ".";
        }
    }
});

// Helper function to get the last number (part before the operator)
function getLastNumber(expression) {
    let operator = getOperator(expression);
    let numberPart = expression;
    if (operator) {
        numberPart = expression.split(operator).pop();  // Get part after the operator
    }
    return numberPart;
}

// Event listeners for numbers
[button0, button1, button2, button3, button4, button5, button6, button7, button8, button9].forEach((button, index) => {
    button.addEventListener("click", () => {
        lowerDisplay.textContent += index.toString();
    });
});
