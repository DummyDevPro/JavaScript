function greeting() {
    // process
    console.log('This is void function.');
}

greeting();

function greetingWithName(name) {
    console.log('Welcome ' + name);
}

greetingWithName('Htun');


function selfIntroduction(name, age) {
    console.log('My name is ' + name);
    console.log('I am ' + age);
}

selfIntroduction('HtunMyatMaw', 27);


function findMaxTwoNumbers(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let maxResult = findMaxTwoNumbers(2, 5);
console.log(maxResult);

function findMinTwoNumbers(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let minResult = findMinTwoNumbers(-5, -2);
console.log(minResult);

function findMaxThreeNumbers(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

maxResult = findMaxThreeNumbers(2, 5, 1);
console.log(maxResult);

function findMaxFourNumbers(a, b, c, d) {
    return 0;
}

maxResult = findMaxFourNumbers(3, -9, 4, -5);
console.log(maxResult);

function findMidumNumber(a, b, c) {
    if ((a > b && a < c) || (a < b && a > c)) {
        return a;
    } else if ((b < a && b > c) || (b > a && b < c)) {
        return b;
    } else {
        return c;
    }
}

let midNumber = findMidumNumber(3, 5, 0); // 3
midNumber = findMidumNumber(3, 0, 5); // 3

midNumber = findMidumNumber(5, 3, 0); // 3
midNumber = findMidumNumber(0, 3, 5); // 3

midNumber = findMidumNumber(5, 0, 3); // 3
midNumber = findMidumNumber(0, 5, 3); // 3

let formattedTime = changeTime(1); // expected output => 1 PM
console.log(formattedTime);

formattedTime = changeTime(13); //  expected output => 1 AM
console.log(formattedTime);

formattedTime = changeTime(12); //  expected output => 12 PM
console.log(formattedTime);

formattedTime = changeTime(24); //  expected output => 0 AM
console.log(formattedTime);

function changeTime(time) { // 0
    if (time < 12) {
        return time + ' AM';
    } else if (time == 12) {
        return time + ' PM';
    } else if (time == 24) {
        return '0 AM';
    } else {
        return (time - 12) + ' PM';
    }
}

console.log(findDuplicateNumber(1, 1, 2)); // 1
console.log(findDuplicateNumber(1, 2, 1)); // 1
console.log(findDuplicateNumber(2, 1, 1)); // 1
console.log(findDuplicateNumber(1, 3, 2)); // There is no duplicate number

function findDuplicateNumber(a, b, c) {
    if (a == b || a == c) {
        return a;
    } else if (b == c) {
        return b;
    } else {
        return 'There is no duplicate number';
    }
}

console.log(sumEvenNumbers(1,2,3,4));

function sumEvenNumbers(a, b, c, d) { // 1 , 2 , 3 , 4
    let sum = 0;

    if (a % 2 == 0) {
        sum += a; // sum = sum + a
    }

    if (b % 2 == 0) {
        sum += b; // sum = 0 + 2 = 2
    }

    if (c % 2 == 0) {
        sum += c;
    }

    if (d % 2 == 0) {
        sum += d; // sum = 2 + 4 = 6
    }

    return sum;
}

console.log(calculateTax(3500,false));
function calculateTax(money, insideOutside){

    // false => 8%
    if(insideOutside == false) {
        let tax = money * 0.08;
        return money + tax;
    }
    // true => 10%
    else{
        let tax = money * 0.1;
        return money + tax;
    }

}