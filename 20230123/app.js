// variable declaration
let a = 10;
let b = a + 20;

a = a + 20;

a++; // a = a + 1
a--; // a = a - 1

b = a + b;

console.log(a); // 30
console.log(b); // 60

// ++
// a++;
console.log(a++); // 30 -> 31

console.log(a);

console.log(++a);


// --

console.log(a--);

console.log(a);

console.log(--a);


let c = 0;
let d = 0;

let e = (--c) + (--d) + (c++) + (d++);
console.log(e);
console.log(c);
console.log(d);

