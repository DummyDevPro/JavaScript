function checkStartWithCharacterA(str) {
    // str のfirst characterは a/A ですか？
    // console.log(str);
    // cut first character
    let firstChar = str.substring(0, 1);
    // console.log(firstChar);

    // is first character equal to (a or A) 
    if (firstChar == 'a') {
        return 'Start with a';
    }
    else if (firstChar == 'A') {
        return 'Start with A';
    }
    else {
        return 'No';
    }
}

let firstCharResult = checkStartWithCharacterA('apple'); // start with a
console.log(firstCharResult);

firstCharResult = checkStartWithCharacterA('ball'); // No
console.log(firstCharResult);

firstCharResult = checkStartWithCharacterA('Aeroplane'); // start with A
console.log(firstCharResult);

function checkStartWithCharacterA_B(str) {
    // coding logic
    let firstChar = str.substring(0, 1);
    if (firstChar == 'a' || firstChar == 'A' || firstChar == 'b' || firstChar == 'B') {
        return 'start with ' + firstChar;
    } else {
        return 'No';
    }
}

console.log(checkStartWithCharacterA_B('another')); // return => 'start with a';
console.log(checkStartWithCharacterA_B('Acronu')); // return => 'start with A';
console.log(checkStartWithCharacterA_B('bathing')); // return => 'start with b';
console.log(checkStartWithCharacterA_B('Bus')); // return => 'start with B';
console.log(checkStartWithCharacterA_B('Car')); // return => 'No';
console.log(checkStartWithCharacterA_B('Valley')); // return => 'No';

function checkEndWithCharacterE(str) {
    // cut last char from str
    // let lastChar = str.slice(-1); // fist choice
    let lastCharPos = str.length - 1;
    let lastChar = str.substring(lastCharPos); // second choice
    console.log('Last Char >> ' + lastChar);
    if (lastChar == 'e') {
        return 'end with e'
    } else if (lastChar == 'E') {
        return 'end with E';
    } else {
        return 'No';
    }
}

checkEndWithCharacterE('polite'); // return => 'end with e';
checkEndWithCharacterE('animal'); // return => 'No';
checkEndWithCharacterE('PLEASE'); // return => 'end with E';
checkEndWithCharacterE('TRANSLATE'); // return => 'end with E';

function findMidCharacter(str) {
    if (str.length % 2 == 0) {
        return str.substr((str.length / 2) - 1, 2);
    } else {
        return str.substr((str.length / 2) - 0.5, 1);
    }
}

// Odd Problems
console.log(findMidCharacter('egg')); // g            3/2 = 1.5 - 0.5 = 1
console.log(findMidCharacter('apple')); // p          5/2 = 2.5 - 0.5 = 2
console.log(findMidCharacter('pineapple')); // a      9/2 = 4.5 - 0.5 = 4

// Even Problems
console.log(findMidCharacter('book')); // oo
console.log(findMidCharacter('amazon')); // az
console.log(findMidCharacter('facebook')); // eb