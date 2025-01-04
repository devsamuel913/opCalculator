//display references
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





// Equal button
buttonEqual.addEventListener("click", operate);
function operate() {
    const lowerDisplayText = lowerDisplay.textContent;

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
    let result;
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

    // Update the calculator display with the result
    lowerDisplay.textContent = result;

    // Optional: Log the updated display for debugging
    console.log("Updated Display:", lowerDisplay.textContent);
}









//clear button functionality
clearButton.addEventListener("click", clearDisplays);

function clearDisplays(){
    if (lowerDisplay.textContent != "" || upperDisplay.textContent != ""){
        lowerDisplay.textContent = '';
        upperDisplay.textContent ='';
    }
}

//delete button functionality
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
            lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1); } } }




///Operator buttons event listeners//
// Helper function to check if the last character is an operator
function endsWithOperator() {
    const operators = [" ÷ ", " + ", " × ", " - "];
    return operators.some(op => lowerDisplay.textContent.endsWith(op));
}

// Divide
buttonDivide.addEventListener("click", divide);
function divide() {
    if (lowerDisplay.textContent !== '' && !endsWithOperator()) {
        lowerDisplay.textContent += " ÷ ";
    }
}

// Sum
buttonSum.addEventListener("click", sum);
function sum() {
    if (lowerDisplay.textContent !== '' && !endsWithOperator()) {
        lowerDisplay.textContent += " + ";
    }
}

// Multiply
buttonMultiply.addEventListener("click", multiply);
function multiply() {
    if (lowerDisplay.textContent !== '' && !endsWithOperator()) {
        lowerDisplay.textContent += " × ";
    }
}

// Subtract
buttonSubtract.addEventListener("click", subtract);
function subtract() {
    if (lowerDisplay.textContent !== '' && !endsWithOperator()) {
        lowerDisplay.textContent += " - ";
    }
}

// Point
buttonPoint.addEventListener("click", addingPoint);
function addingPoint() {
    if (lowerDisplay.textContent !== '' && !lowerDisplay.textContent.slice(0,-1).includes(".")) {
        lowerDisplay.textContent += ".";
    }
}



///Number button event listeners//

// Number 0 functionality
button0.addEventListener("click", () => lowerDisplay.textContent += 0);
// Number 1 functionality
button1.addEventListener("click", () => lowerDisplay.textContent += 1);

// Number 2 functionality
button2.addEventListener("click", () => lowerDisplay.textContent += 2);

// Number 3 functionality
button3.addEventListener("click", () => lowerDisplay.textContent += 3);

// Number 4 functionality
button4.addEventListener("click", () => lowerDisplay.textContent += 4);

// Number 5 functionality
button5.addEventListener("click", () => lowerDisplay.textContent += 5);

// Number 6 functionality
button6.addEventListener("click", () => lowerDisplay.textContent += 6);

// Number 7 functionality
button7.addEventListener("click", () => lowerDisplay.textContent += 7);

// Number 8 functionality
button8.addEventListener("click", () => lowerDisplay.textContent += 8);

// Number 9 functionality
button9.addEventListener("click", () => lowerDisplay.textContent += 9);
