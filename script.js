document.addEventListener('DOMContentLoaded', function () {
    // Apply the number input formatting to selected input ids
    formatNumberInput(["numberInput", "valueOne", "valueTwo", "valueResult"]);
});

// Function to format number input for specific input elements
function formatNumberInput(inputElementIds) {
    // Add 'input' event listener to each specified input element
    inputElementIds.forEach((inputElementId) => {
        let inputElement = document.getElementById(inputElementId);
        if (inputElement) {
            inputElement.addEventListener('input', function () {
                // Remove all non-digit characters from the input value
                let inputValue = inputElement.value.replace(/\D/g, '');

                // Convert the cleaned input value to a number and format it using toLocaleString()
                let formattedNumber = Number(inputValue).toLocaleString();

                // Update the input element value with the formatted number
                inputElement.value = formattedNumber;
            });
        }
    });
}



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
    let inputOne = valueOne.value.replace(/,/g, ''); // Remove commas from the input value
    let inputTwo = valueTwo.value.replace(/,/g, ''); // Remove commas from the input value

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
  // Remove commas from the input values and parse them as numbers
let numberOne = parseFloat(num1);
let numberTwo = parseFloat(num2);

let total = numberOne + numberTwo;
resultInput.value = total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Update the result input field with the calculated price
    
}

function validInputCheck(event) {
    // Get the key from the event
    let key = event.key;

    // Get the input value and the current cursor position in the input field
    let input = event.target.value;
    let cursorPosition = event.target.selectionStart;

    // If the dot is pressed and it's at the beginning or there's already a dot in the sequence, prevent the input
    if (key === "." && (cursorPosition === 0 || input.indexOf(".") !== -1)) {
        event.preventDefault();
        return;
    }

    // Prevent the input if the key is not a number or a dot
    if (!/[\d.]/.test(key)) {
        event.preventDefault();
    }
}


