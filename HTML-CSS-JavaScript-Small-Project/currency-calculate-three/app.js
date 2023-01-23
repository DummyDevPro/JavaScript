function calculateCurrency() {
    // get dollar input
    let dollarInput = document.getElementById('dollar-id');
    // get yen input
    let yenInput = document.getElementById('yen-id');
    // get rupee input
    let rupeeInput = document.getElementById('rupee-id');
    // get kyat input
    // get baht input
    // get pound input

    // yen input = dollar input value *  135.39
    yenInput.value = dollarInput.value * 135.39;

    rupeeInput.value = dollarInput.value * 132.18;
}