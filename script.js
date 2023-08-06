
document.addEventListener('DOMContentLoaded', function(){
    let numberInput = document.getElementById('numberInput');

    numberInput.addEventListener('input', function() {
        let inputValue = numberInput.value.replace(/\D/g, '');

        let formattedNumber = Number(inputValue).toLocaleString();

        numberInput.value = formattedNumber;

    });
   
});



let valueOne = document.getElementById("valueOne");
let valueTwo = document.getElementById("valueTwo");
let resultInput = document.getElementById("valueResult")

valueOne.addEventListener("input", handleInput);
valueTwo.addEventListener("input", handleInput);

valueOne.addEventListener("keypress", validInputCheck);
valueTwo.addEventListener("keypress", validInputCheck);

let inputOne = 0;
let inputTwo = 0;

function handleInput(){
    let inputOne = valueOne.value.trim();
    let inputTwo = valueTwo.value.trim();

    // Check if the inputs have a valid number
    if (isValidNumber(inputOne) && isValidNumber(inputTwo)) {
        let numberOne = parseFloat(inputOne);
        let numberTwo = parseFloat(inputTwo);

        addition(numberOne, numberTwo);
    } else {
        resultInput.value = ''; // Clear the result input field for invalid inputs
    }

}

function isValidNumber (input){
    // Define a regex pattern to match valid numbers (including negative and decimal numbers)
    let numberPattern = /^-?\d+(\.\d+)?$/;
    return numberPattern.test(input);
}

function addition(num1, num2){
let total = num1 + num2;
resultInput.value = total; // Update the result input field with the calculated price
}

function validInputCheck(event){
    // Get the key from the event
    let key = event.key;

    // Define the allowed characters (numbers, decimal point, and minus sign)
    let allowedCharacters = "0123456789.";

     // Get the current cursor position in the input field
    let cursorPosition = event.target.selectionStart;

     // If the dot is pressed and it's at the beginning or there's already a dot in the sequence, prevent the input
     if (key === "." && (cursorPosition === 0 || input.indexOf(".") !== -1)) {
        event.preventDefault();
        return;
    }

    // Prevent the input if the key is not among the allowed characters
    if (!allowedCharacters.includes(key)) {
        event.preventDefault();
    }
}

