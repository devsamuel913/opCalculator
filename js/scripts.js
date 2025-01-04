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

// Variable to keep track if an operation has been performed
let operationInProgress = false;
let result = null;
let lastOperator = null;

// Equal button
buttonEqual.addEventListener("click", operate);

function operate() {
    const lowerDisplayText = lowerDisplay.textContent;

    // If no operator or two operators are found, just return
    if (!lowerDisplayText.includes(" ")) {
        return;
    }

    // Array of operators to check
    const operators = [" ÷ ", " + ", " × ", " - "];
    let operatorCoordinates = null;
    let operator = null;

    // Find the coordinates of the first occurrence of any operator
    for (const op of operators) {
        const startIndex = lowerDisplayText.indexOf(op);
        if (startIndex !== -1) {
            operatorCoordinates = {
                start: startIndex,
                end: startIndex + op.length
            };
            operator = op.trim(); // Save operator without extra spaces
            break;
        }
    }

    // If no operator is found, return early
    if (!operatorCoordinates) {
        console.error("No operator found in the display text.");
        return;
    }

    // Isolate the numbers
    const numberOne = parseFloat(lowerDisplayText.slice(0, operatorCoordinates.start).trim());
    const numberTwo = parseFloat(lowerDisplayText.slice(operatorCoordinates.end).trim());

    // Log results for debugging
    console.log("Number One:", numberOne);
    console.log("Operator:", operator);
    console.log("Number Two:", numberTwo);

    // Perform the operation
    if (operator === '+') {
        result = numberOne + numberTwo;
    } else if (operator === '-') {
        result = numberOne - numberTwo;
    } else if (operator === '×') {
        result = numberOne * numberTwo;
    } else if (operator === '÷') {
        if (numberTwo === 0) {
            result = "Error"; // Handle divide by zero
        } else {
            result = numberOne / numberTwo;
        }
    }

    // Show result on the upper display
    upperDisplay.textContent = `${numberOne} ${operator} ${numberTwo} = ${result}`;

    // Update the calculator display with the result
    lowerDisplay.textContent = result;

    // Mark operation as completed
    operationInProgress = true;
    console.log("Updated Display:", lowerDisplay.textContent);
}

// clear button functionality
clearButton.addEventListener("click", clearDisplays);

function clearDisplays() {
    if (lowerDisplay.textContent !== "" || upperDisplay.textContent !== "") {
        lowerDisplay.textContent = '';
        upperDisplay.textContent = '';
        operationInProgress = false;  // Reset operation flag
    }
}

// delete button functionality
deleteButton.addEventListener("click", eraseChars);

function eraseChars() {
    if (lowerDisplay.textContent !== '') {
        // Check if the last three characters match " + ", " - ", " ÷ ", or " × "
        const lastThreeChars = lowerDisplay.textContent.slice(-3);
        if ([" + ", " - ", " ÷ ", " × "].includes(lastThreeChars)) {
            // Remove the last three characters
            lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -3);
        } else {
            // Remove only the last character
            lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1);
        }
    }
}

// Operator buttons event listeners
function endsWithOperator() {
    const operators = [" ÷ ", " + ", " × ", " - "];
    return operators.some(op => lowerDisplay.textContent.endsWith(op));
}

// Divide
buttonDivide.addEventListener("click", divide);
function divide() {
    if (lowerDisplay.textContent !== '' && !endsWithOperator()) {
        if (operationInProgress) {
            operate();  // Perform the operation before entering a new operator
        }
        lowerDisplay.textContent += " ÷ ";
        operationInProgress = false;  // Reset flag when starting a new operation
    }
}

// Sum
buttonSum.addEventListener("click", sum);
function sum() {
    if (lowerDisplay.textContent !== '' && !endsWithOperator()) {
        if (operationInProgress) {
            operate();  // Perform the operation before entering a new operator
        }
        lowerDisplay.textContent += " + ";
        operationInProgress = false;
    }
}

// Multiply
buttonMultiply.addEventListener("click", multiply);
function multiply() {
    if (lowerDisplay.textContent !== '' && !endsWithOperator()) {
        if (operationInProgress) {
            operate();  // Perform the operation before entering a new operator
        }
        lowerDisplay.textContent += " × ";
        operationInProgress = false;
    }
}

// Subtract
buttonSubtract.addEventListener("click", subtract);
function subtract() {
    if (lowerDisplay.textContent !== '' && !endsWithOperator()) {
        if (operationInProgress) {
            operate();  // Perform the operation before entering a new operator
        }
        lowerDisplay.textContent += " - ";
        operationInProgress = false;
    }
}

// Point
buttonPoint.addEventListener("click", addingPoint);
function addingPoint() {
    // Check if there's no dot already in the last number segment (i.e., between the last operator or start of the input)
    const currentNumber = lowerDisplay.textContent.split(/[\+\-\×\÷]/).pop();
    
    // Only allow adding a dot if the current number doesn't already have one
    if (currentNumber.indexOf('.') === -1) {
        lowerDisplay.textContent += ".";
    }
}


// Number button event listeners
button0.addEventListener("click", () => lowerDisplay.textContent += 0);
button1.addEventListener("click", () => lowerDisplay.textContent += 1);
button2.addEventListener("click", () => lowerDisplay.textContent += 2);
button3.addEventListener("click", () => lowerDisplay.textContent += 3);
button4.addEventListener("click", () => lowerDisplay.textContent += 4);
button5.addEventListener("click", () => lowerDisplay.textContent += 5);
button6.addEventListener("click", () => lowerDisplay.textContent += 6);
button7.addEventListener("click", () => lowerDisplay.textContent += 7);
button8.addEventListener("click", () => lowerDisplay.textContent += 8);
button9.addEventListener("click", () => lowerDisplay.textContent += 9);
