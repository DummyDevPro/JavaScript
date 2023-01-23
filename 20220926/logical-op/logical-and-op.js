// (boolean condition) && (boolean condition)
//         T           &&         T              =   T
//         F           &&         T              =   F
//         T           &&         F              =   F
//         F           &&         F              =   F
a = 10;
b = 8;
c = 5;

compOne = a > b; // true
compTwo = a > c; // true
isALargest = (compOne && compTwo);// true && true => true

condOne = (true && true);
console.log(condOne);

condTwo = (true && false);
console.log(condTwo);

condThree = (false && true);
console.log(condThree);

condFour = (false && false);
console.log(condFour);