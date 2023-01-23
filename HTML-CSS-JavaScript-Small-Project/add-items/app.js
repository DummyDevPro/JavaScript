function addItem() {
    let itemListBox = document.getElementById('item-list-id');
    let itemInput = document.getElementById('item-input-id');
    let errorMsg = document.getElementById('error-msg');

    // itemListBoxの中身を確認しましょう
    // console.log(itemListBox.innerHTML);

    // String empty check
    if (itemInput.value.trim() != '') {
        // itemListBox.innerHTML = itemListBox.innerHTML + '<div class="item"><p>' + itemInput.value + '</p></div>';
        itemListBox.innerHTML =  `<div class="item" onclick="deleteEle(this)"><p>${itemInput.value}</p></div>` + itemListBox.innerHTML;

        errorMsg.innerText = '';
    }
    else {
        errorMsg.innerText = '上のテキストボックスに何かを入れてください！';
    }
}

function deleteEle(ele){
    ele.remove();
}