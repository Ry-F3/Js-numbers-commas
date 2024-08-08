# JS-Numbers-Commas

This project provides a basic HTML template to showcase automatic comma formatting for user-inputted numbers using JavaScript. The script formats numbers to include commas as thousands separators and performs simple arithmetic operations.

## Live Demo

You can view and test the live version of this project on GitHub Pages [here](https://5500-ryf3-jsnumberscommas-0fz6r0acz9t.ws-eu115.gitpod.io/).

## Features

- **Comma Formatting**: Automatically formats numbers with commas as thousands separators when the user exits the input field.
- **Input Validation**: Validates and formats user inputs to ensure they are properly formatted numbers.
- **Simple Arithmetic**: Computes the sum of two user-provided numbers and displays the result with comma formatting.

## How It Works

1. **Number Formatting**:

   - The `formatNumberInput` function applies formatting to specified input fields. It listens for the `blur` event (when the input field loses focus) to format the number using `toLocaleString()` which includes commas as thousands separators.

   ```javascript
   function formatNumberInput(inputElementIds) {
       inputElementIds.forEach((inputElementId) => {
           let inputElement = document.getElementById(inputElementId);
           if (inputElement) {
               inputElement.addEventListener('blur', function () {
                   let inputValue = inputElement.value.replace(/[^\d.]/g, '');
                   let formattedNumber = Number(inputValue).toLocaleString();
                   inputElement.value = formattedNumber;
               });
           }
       });
   }
   ```
