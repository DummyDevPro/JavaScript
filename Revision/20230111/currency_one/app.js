function calculateCurrency() {
    let dollarInput = document.getElementById('dollarId');
    let yenInput = document.getElementById('yenId');
    let rupeeInput = document.getElementById('rupeeId');

    yenInput.value = dollarInput.value * 132.33;
    rupeeInput.value = dollarInput.value * 130.88;
}