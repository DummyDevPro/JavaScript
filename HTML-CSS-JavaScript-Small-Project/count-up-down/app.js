// Before Update
let title = document.getElementById("title-id"); // get h1 Element by using its id
console.log(title); // h1 Element
console.log(title.innerText); // Content of h1 Element

// Update
// title.innerText = 'Testing';

// After Update
console.log(title.innerText);

// ----------------------------------------------------------

// Do this function when click + button
function increasement() {
    let countText = document.getElementById('count-num-id');

    // String to Number => Number(Numeric-String)
    countText.innerText = Number(countText.innerText) + 1;
}

// Do this function when click - button
function decreasement() {
    let countText = document.getElementById('count-num-id');

    countText.innerText = countText.innerText - 1;
}

function reset() {
    let countText = document.getElementById('count-num-id');

    countText.innerText = 0;
}
