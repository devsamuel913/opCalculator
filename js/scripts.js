// Calculator Display Elements
const upperDisplay = document.querySelector(".upper-disp");
const lowerDisplay = document.querySelector(".lower-disp");

// Clear and Delete Buttons
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

// Number Buttons
const button0 = document.querySelector(".zero");
const button1 = document.querySelector(".one");
const button2 = document.querySelector(".two");
const button3 = document.querySelector(".three");
const button4 = document.querySelector(".four");
const button5 = document.querySelector(".five");
const button6 = document.querySelector(".six");
const button7 = document.querySelector(".seven");
const button8 = document.querySelector(".eight");
const button9 = document.querySelector(".nine");

// Special Buttons
const pointButton = document.querySelector(".point");
const equalButton = document.querySelector(".equal");

// Operation Buttons
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");

//sum button 
plusButton.addEventListener("click", summing);
function summing(){
    if(lowerDisplay.textContent != ""){
        let contentPlus = lowerDisplay.textContent + " + ";
        lowerDisplay.textContent = contentPlus;
}}

//sum button 
minusButton.addEventListener("click", subtracting);
function subtracting(){
    if(lowerDisplay.textContent != ""){
        let contentMinus = lowerDisplay.textContent + " - ";
        lowerDisplay.textContent = contentMinus;
}}

//multiply button
multiplyButton.addEventListener("click", multiplying);
function multiplying(){
    if(lowerDisplay.textContent != ""){
        let contentTimes = lowerDisplay.textContent + " × ";
        lowerDisplay.textContent = contentTimes;
}}

//multiply button
divideButton.addEventListener("click", dividing);
function dividing(){
    if(lowerDisplay.textContent != ""){
        let contentDivided = lowerDisplay.textContent + " ÷ ";
        lowerDisplay.textContent = contentDivided;
}}

//point button
pointButton.addEventListener("click", decimal);
function decimal(){
    if(lowerDisplay.textContent != ""){
        let contentPoint = lowerDisplay.textContent + ".";
        lowerDisplay.textContent = contentPoint;
}}
//equal button
equalButton.addEventListener("click", () => lowerDisplay.textContent += "=")

//clear button
clearButton.addEventListener("click", clearDisplay)
function clearDisplay(){
    lowerDisplay.textContent = "";}


//delete button
deleteButton.addEventListener("click",deleteItems)
function deleteItems(){
    if(lowerDisplay.textContent != ""){
        lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1);
    }

}

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

