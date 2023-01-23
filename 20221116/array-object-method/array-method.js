let arr = [1, 2, 3, 4];

// length
console.log(arr.length);

// array to string -> not change original array
console.log(arr.toString());
console.log(arr);

console.log(arr.join(':'));
console.log(arr);

// adding data from rigt side -> change original
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);

console.log(arr);

// remove data from right side -> change original
arr.pop();
arr.pop();
arr.pop();

console.log(arr);

// add data from left side -> change original
arr.unshift(10);
console.log(arr);

// remove data from left side -> change original
arr.shift();
arr.shift();
console.log(arr);

let strArr = ['apple', 'orange', 'pineapple', 'lemon'];

// splice
let result = strArr.splice(1, 2, 'banana', 'strawberry');

console.log('----- splice -----');
console.log(result);
console.log(strArr);
console.log('----- splice -----');