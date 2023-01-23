let title = document.getElementById('title-id');
title.innerText = 'My Shop';

let fruitContaienr = document.getElementById('fruit-container-id');

let fruitImgArr = ['img/apple.png', 'img/orange.png', 'img/pineapple.jpg', 'img/lemon.jpg'];
let fruitNameArr = ['Apple', 'Orange', 'Pineapple', 'Lemon'];

for (let i = 0; i < fruitNameArr.length; i++) {

    // fruitContaienr.innerHTML += `<h2>This is test ${i}</h2>`;

    fruitContaienr.innerHTML = fruitContaienr.innerHTML +
        `<div class="fruit">
    <div class="fruit-img">
        <img src="${fruitImgArr[i]}" alt="">
    </div>
    <div class="fruit-name">
        ${fruitNameArr[i]}
    </div>
    </div>
    `;

}

let selectContainer = document.getElementById('select-container');
let countryArr = [
    'Nepal',
    'American',
    'Japan',
    'Korea',
    'Myanmar',
    'Taiwan',
    'Vietnam',
    'Thailand',
    'Laos',
    'India',
    'China',
    'Indonesia',
    'Phillipine',
    'Russia',
    'Butan',
    'Singapore',
    'Jordan',
    'Arabia',
    'Cambodia',
    'Ukuraina',
    'England',
    'Spain',
    'Poland'
]

for(let i = 0; i < countryArr.length; i++){
    selectContainer.innerHTML = selectContainer.innerHTML + 
    `<option>${countryArr[i]}</option>`;
}