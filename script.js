// function formatNumber() {
//     let addCommas = document.getElementById('numberInput');
//     let inputValue = numberInput.value.replace(/\D/g, '');


//     let formattedNumber = Number(inputValue).toLocaleString();

//     addCommas.value = formattedNumber;
// }

// formatNumber()

document.addEventListener('DOMContentLoaded', function(){
    let numberInput = document.getElementById('numberInput');

    numberInput.addEventListener('input', function() {
        let inputValue = numberInput.value.replace(/\D/g, '');

        let formattedNumber = Number(inputValue).toLocaleString();

        numberInput.value = formattedNumber;

    });
});