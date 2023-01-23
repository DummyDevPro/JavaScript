/**
 * 
 * Function Type (void,return)
 * 
 */
function vodiFunction() {
    console.log('Hello');
}

function returnFunction() {
    return 'Nice to meet you';
}

vodiFunction();

let result = returnFunction();
console.log(result);

// Add two number
function sumTwoNumber(a, b) { // a =10, b = 20
    let sum = a + b;
    return sum;
}

let sumResult = sumTwoNumber(10, 20);
console.log(sumResult);


calculateGrade(90); // Rank A
calculateGrade(91); // Rank S
calculateGrade(80); // Rank B

function calculateGrade(a) {
    return 'Grade E';
}

console.log(findMinNumber(1, -2, 3));

function findMinNumber(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMaxNumber(1, -2, 3));

function findMaxNumber(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMidNumber(1, -2, 3));

function findMidNumber(a, b, c) {
    if ((a > b && a < c) || (a < b && a > c)) {
        return a;
    } else if ((b > a && b < c) || (b < a && b > c)) {
        return b;
    } else {
        return c;
    }
}

function orderThreeNumber(a, b, c) {
    let min, mid, max;

    min = findMinNumber(a,b,c);
    mid = findMidNumber(a,b,c);
    max = findMaxNumber(a,b,c);

    return min + ' ' + mid + ' ' + max;
}

console.log(orderThreeNumber(1, -3, 0));