
/**
 * Variable Declaration
 * 
 * const      ->     can't change value
 * let        ->     can't redeclare, local scope
 * var        ->     can redeclare, global scope
 * 
 */
var b = 10;
var b = 20;
console.log(b);

// let a = 10;
// let a = 20;
// console.log(a);

let a = 10;
let test = 'Hello';

if (true) {
    var local = 'Nice To Meet You';
    console.log(test);// global variable can access from local scope

    var b = 30;
    let a = 20;

    console.log('Inner Block ' + local);

    console.log('Inner Block ' + a)
}

console.log(local); // Error cause can't access local variable from global scope
console.log('If Block Outside ' + a);
console.log(b);