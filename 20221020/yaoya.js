function buyFruit(fruit, money) { // apple, 500
    // apple = 200
    if(fruit == 'apple'){
        if(money < 200){
            return (200 - money) + '円足りません。';
        }else{
            return (money - 200) + '円のおつりです。';
        }
    }

    // orange = 50
}

console.log(buyFruit('apple', 500)); // 300
console.log(buyFruit('orange', 500)); // 450