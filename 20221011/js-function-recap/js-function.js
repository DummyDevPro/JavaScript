/**
 * JS Function void && return
 */
// dead code
function voidFunction(param1) {
    console.log('This is void function ' + param1);
}

voidFunction(123);

function findMax(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

let maxNum = findMax(2, 4);
console.log('Maximum number between 2,4 is ' + maxNum);

maxNum = findMax(58, 12);
console.log('Maximum number between 58,12 is ' + maxNum);

function findMax(a, b, c) {
    // comparison operators
    // logical operators
    if (a > b && a > c) {
        return a;
    }
    else if (b > c) {
        return b;
    }
    else {
        return c;
    }
}

findMax(10, 8, 20);

function findMax(a, b, c, d) {
    // comparison operators
    // logical operators
}

function findDuplicateNumber(a,b,c){

    return NaN;
}

findDuplicateNumber(1,2,2); // 2
findDuplicateNumber(5,5,4); // 5
findDuplicateNumber(4,5,4); // 4
findDuplicateNumber(1,2,3); // NaN

function checkEvenOrOdd(num) {

    // even odd check program

    // return num + ' is odd number';
    // return num + ' is even number';
}

checkEvenOrOdd(5); // return -> 5 is odd number
checkEvenOrOdd(6); // return -> 6 is even number
checkEvenOrOdd(11); // return -> 11 is odd number
checkEvenOrOdd(20); // return -> 20 is even number