/**
 * Comparison Operators       -> Boolean(true,false)
 * 
 * is eqaul                   ->  a == b
 * not equal                  ->  a != b
 * 
 * is greater than            ->  a > b
 * is less than               ->  a < b
 * is less than or equal      ->  a <= b
 * is greater than or equal   ->  a >= b
 * 
 * strict [equality]          ->  a === b
 * strict [not equality]      ->  a !== b
 * 
 */
let a = 10;
let b = 20;

let isEqual = (a == b); // Is a Equal b?
console.log('Is Equal Operator > ' + isEqual);

let isNotEqual = (a != b); // Is a not Equal b?
console.log('Is Not Equal Operator > ' + isNotEqual);

let x = 10; // Number
let y = '10'; // String

let normalEqual = (x == y); // Is x Equal y? ★★★　Check Only Data Value
console.log('Normal Equal > ' + normalEqual);

let strictEqual = (x === y); // ★★★　Check Data Value <And> Data Type
console.log('Strict Equal > ' + strictEqual);

let normalNotEqual = (x != y); // Is x Not Equal y? Check Only Data Value
console.log('Normal Not Equal > ' + normalNotEqual);

let strictNotEqual = (x !== y); // Not Equal Value <OR> Not Equal Data Type
console.log('Strict Not Equal > ' + strictNotEqual);