if (!isNaN(inputOne) && !isNaN(inputTwo)) {
    let total = inputOne + inputTwo;
    resultInput.value = total; // Update the result input field with the total

} else {
    resultInput.value = ""; // If the inputs are not valid numbers, clear the result input field
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