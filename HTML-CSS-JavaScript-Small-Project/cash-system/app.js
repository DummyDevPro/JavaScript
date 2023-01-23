function calculateCash() {
    console.log("I'm here");
    let amountInput = document.getElementById('amount-id');
    let taxInput = document.getElementById('tax-id');
    let taxAmountShow = document.getElementById('total-result');

    // Calcualte Tax
    let taxAmount = (amountInput.value) * (taxInput.value/100);

    // Amount + Tax
    let totalAmount = Number(amountInput.value) + Number(taxAmount);

    // Show in HTML Element
    taxAmountShow.innerText = totalAmount;
}