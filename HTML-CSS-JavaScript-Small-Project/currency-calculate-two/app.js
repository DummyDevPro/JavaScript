let fromInput = document.getElementById('from-id');
let toInput = document.getElementById('to-id');

// function calculateDollarToYen() {
//     toInput.value = fromInput.value * 137.71;
// }

// function calculateDollarToRupe() {
//     toInput.value = fromInput.value * 131.94;
// }

// function calculateDollarToKyat() {
//     toInput.value = fromInput.value * 2098.74;
// }

function calculateCurrency(key) {
    
    if (key == 'yen') {
        toInput.value = fromInput.value * 137.71;
    } else if (key == 'rupe') {
        toInput.value = fromInput.value * 131.94;
    } else {
        toInput.value = fromInput.value * 2098.74;
    }

    // switch (key) {
    //     case 'yen':
    //         toInput.value = fromInput.value * 137.71;
    //         break;

    //     case 'rupe':
    //         toInput.value = fromInput.value * 131.94;
    //         break;

    //     case 'kyat':
    //         toInput.value = fromInput.value * 2098.74;
    //         break;
    // }

}