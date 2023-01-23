function addItem() {
    let fruitInput = document.getElementById('fruitInputId');
    let fruitListContainer = document.getElementById('fruitListId');

    // if fruit name is not empy
    if (fruitInput.value.trim() != "") {
        fruitListContainer.innerHTML = `<div class="fruit">${fruitInput.value}</div> ${fruitListContainer.innerHTML}`;
    }
}