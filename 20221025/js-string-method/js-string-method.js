/**
 * method = function
 * 
 * Learns about string's default method
 */
let str = 'Hello World 123';

// method name : length
console.log(str.length);

// start position, end position(not include end position)
console.log(str.slice(0,5));

console.log(str.slice(6,11));

console.log(str);

let str1 = 'Apple, Banana, Kiwi, Orange';

console.log(str1.slice(0,5)); // Apple

console.log(str1.slice(7,13)); // Banana

console.log(str1.slice(15,19)); // Kiwi

console.log(str1.slice(21,27)); // Orange

console.log(str1.slice(0,13)); // Apple, Banana

console.log(str1.slice(7,19)); // Banana, Kiwi

console.log(str1.slice(15,27)); // Kiwi, Orange

console.log(str1.slice(7));

// concat using + operator
console.log(str1.slice(0,5) + ' ' +  str1.slice(21)); // Apple Orange

let str2 = 'Thank You';

console.log(str2.slice(-3,27));

console.log(str2.slice(-9,-4));