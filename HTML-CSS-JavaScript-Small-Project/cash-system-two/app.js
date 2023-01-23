let count = document.getElementById('count-id'); // いくつ注文するか
let price = document.getElementById('price-id'); // 商品の値段
let total = document.getElementById('total-cost-id'); // 数　×　商品の値段

function increase() {
    count.innerText = Number(count.innerText) + 1;

    total.innerText = price.innerText * count.innerText;
}

function decrease() {
    if (count.innerText > 0) {
        count.innerText = Number(count.innerText) - 1;

        total.innerText = price.innerText * count.innerText;
    }
}