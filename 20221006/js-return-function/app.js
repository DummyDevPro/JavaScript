/**
 * return Function
 * 
 */
function greetingMsg() {
    console.log('You enter here...');
    // process
    return 'Hello';
}

function addTwoNumber(numOne, numTwo) {
    return numOne + numTwo;
}

function greetingMsgWithName(name) {
    let msg = 'Welcome ' + name;
    return msg;
}

let msg = greetingMsg();
console.log(typeof msg + ' > ' + msg);

let sum = addTwoNumber(1,2);
console.log(' >> ' + sum);

sum = addTwoNumber(33,55);
console.log(' >>> ' + sum);

msg = greetingMsgWithName('MIGERU');
console.log(msg);

msg = greetingMsgWithName('PRADIP');
console.log(msg);

msg = greetingMsgWithName('PARIT');
console.log(msg);

msg = greetingMsgWithName('THWIN');
console.log(msg);

msg = greetingMsgWithName('KHUN');
console.log(msg);
