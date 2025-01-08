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

// Event listeners for operators
buttonMultiply.addEventListener("click", () => performOperation(multiplySign));
buttonSubtract.addEventListener("click", () => performOperation(minusSign));
buttonSum.addEventListener("click", () => performOperation(plusSign));
buttonDivide.addEventListener("click", () => performOperation(divideSign));

// Generalized function to handle operators and calculation
function performOperation(operator) {
    if (lowerDisplay.textContent !== '') {
        if (lowerDisplay.textContent.includes(plusSign) || lowerDisplay.textContent.includes(minusSign) ||
            lowerDisplay.textContent.includes(multiplySign) || lowerDisplay.textContent.includes(divideSign)) {

            let lastOperator = getOperator(lowerDisplay.textContent);
            let coords = lowerDisplay.textContent.indexOf(lastOperator);
            let beforeOperator = lowerDisplay.textContent.slice(0, coords).trim(); // Number before operator
            let afterOperator = lowerDisplay.textContent.slice(coords + lastOperator.length).trim(); // Number after operator

            if (afterOperator === '' || isNaN(afterOperator)) {
                lowerDisplay.textContent = beforeOperator + operator; // Replace the operator
                return;
            } else {
                let numberOne = parseFloat(beforeOperator.replace(/,/g, ''));
                let numberTwo = parseFloat(afterOperator.replace(/,/g, ''));
                let result = calculate(numberOne, numberTwo, lastOperator);

                upperDisplay.textContent = `${formatNumber(numberOne)} ${lastOperator} ${formatNumber(numberTwo)} = ${formatNumber(result)}`;
                lowerDisplay.textContent = `${formatNumber(result)}${operator}`;
            }
        } else {
            lowerDisplay.textContent += operator;
        }
    }
}

// Calculation logic
function calculate(numberOne, numberTwo, operator) {
    switch (operator) {
        case plusSign: return numberOne + numberTwo;
        case minusSign: return numberOne - numberTwo;
        case multiplySign: return numberOne * numberTwo;
        case divideSign: return numberTwo !== 0 ? numberOne / numberTwo : "Error";
        default: return null;
    }
}

// Helper function to get the operator in the expression
function getOperator(expression) {
    if (expression.includes(plusSign)) return plusSign;
    if (expression.includes(minusSign)) return minusSign;
    if (expression.includes(multiplySign)) return multiplySign;
    if (expression.includes(divideSign)) return divideSign;
    return null;
}

// Helper function to format numbers with commas
function formatNumber(number) {
    if (isNaN(number)) return number; // Return non-numeric values as-is (e.g., "Error")
    return number.toLocaleString('en-US');
}

// Equal button functionality
buttonEqual.addEventListener("click", () => {
    if (lowerDisplay.textContent !== '') {
        let operator = getOperator(lowerDisplay.textContent);
        if (operator) {
            let operatorIndex = lowerDisplay.textContent.indexOf(operator);
            let numberOne = parseFloat(lowerDisplay.textContent.slice(0, operatorIndex).trim().replace(/,/g, ''));
            let numberTwo = parseFloat(lowerDisplay.textContent.slice(operatorIndex + operator.length).trim().replace(/,/g, ''));

            let result = calculate(numberOne, numberTwo, operator);

            upperDisplay.textContent = `${formatNumber(numberOne)} ${operator} ${formatNumber(numberTwo)} = ${formatNumber(result)}`;
            lowerDisplay.textContent = formatNumber(result);
        }
    }
});

// Clear button functionality
clearButton.addEventListener("click", () => {
    lowerDisplay.textContent = '';
    upperDisplay.textContent = '';
});

// Delete button functionality
deleteButton.addEventListener("click", () => {
    lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1); // Remove last character
});

// Point button functionality
buttonPoint.addEventListener("click", () => {
    if (!lowerDisplay.textContent.includes('.') || lowerDisplay.textContent.includes(plusSign) || lowerDisplay.textContent.includes(minusSign) || lowerDisplay.textContent.includes(multiplySign) || lowerDisplay.textContent.includes(divideSign)) {
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
        numberPart = expression.split(operator).pop();
    }
    return numberPart;
}

// Event listeners for number buttons
[button0, button1, button2, button3, button4, button5, button6, button7, button8, button9].forEach((button, index) => {
    button.addEventListener("click", () => {
        lowerDisplay.textContent = formatNumber(lowerDisplay.textContent.replace(/,/g, '') + index.toString());
    });
});