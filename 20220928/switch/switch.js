mark = 80;
// switch parameter (Number, String, Boolean)
// checks each case
// equality check ( === )
switch (mark) {
    case 60:
        console.log('Grade B');
        break;

    case '80':
        console.log('Grade A');
        break;

    case 100:
        console.log('Grade S');
        break;

    default:
        console.log('Other');
        break;
}

let strVar = 'Tue';
switch(strVar) {
    case 'Mon':
        console.log('Monday');
        break;
    case 'Tue':
        console.log('Tuesday');
        break;
    case 'Wed':
        console.log('Wednesday');
        break;
    case 'Thu':
        console.log('Thursday');
        break;
    case 'Fri':
        console.log('Friday');
        break;
}