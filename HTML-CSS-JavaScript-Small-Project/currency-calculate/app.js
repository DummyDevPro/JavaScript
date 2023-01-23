function calculate(){
    // get dollar input element by id
    let dollarInput = document.getElementById('dollar-id');
    // get yen input element by id
    let yenInput = document.getElementById('yen-id');

    let result = dollarInput.value * 137.71;

    // get value from dollar input
    // and calculate with today curency
    // the result display in yen input

    yenInput.value = result;
}