if (!isNaN(inputOne) && !isNaN(inputTwo)) {
    let total = inputOne + inputTwo;
    resultInput.value = total; // Update the result input field with the total

} else {
    resultInput.value = ""; // If the inputs are not valid numbers, clear the result input field
}