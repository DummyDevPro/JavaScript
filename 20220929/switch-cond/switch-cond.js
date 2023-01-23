// Data Type : Number, String, boolean
// switch (param) {
//     case '':
//         console.log('Case One');
//         break;

//     case '':
//         console.log('Case Two');
//         break;

//     default:
//         console.log('default');
//         break;
// }

/**
 * Switch : Number
 */
varNum = 10.0;
switch (varNum) {
    case 5:
        console.log('Switch Number > Case One');
        break;

    case 10:
        console.log('Switch Number > Case Two');
        break;

    case '10':
        console.log('Switch Number > Case Three');
        break;

    case 15:
        console.log('Switch Number > Case Four');
        break;

    default:
        console.log('Switch Number > Default Case');
        break;
}

varString = 'A';
switch (varString) {
    case 'a':
        console.log('Switch String > Case One');
        break;

    case 'A':
        console.log('Switch String > Case Two');
        break;

    case 'b':
        console.log('Switch String > Case Three');
        break;

    case 'B':
        console.log('Switch String > Case Four');
        break;

    default:
        console.log('Switch String > Case Default');
        break;
}

varBoolean = true;
switch (varBoolean) {
    case true:
        console.log('Switch Boolean > Case True');
        break;

    case false:
        console.log('Switch Boolean > Case False');
        break;
}

mark = 80;
switch (true) {
    case mark < 40: // false
        console.log('Grade D');
        break;

    case mark < 60: // false
        console.log('Grade C');
        break;

    case mark < 80: // false
        console.log('Grade B');
        break;

    case mark <= 100: // true
        console.log('Grade A');
        break;
}

a = 3;
switch (a) {
    case 1:
        console.log(1);
        break;

    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;

    case 4:
        console.log(4);
        break;

    case 5:
        console.log(5);
        break;
}