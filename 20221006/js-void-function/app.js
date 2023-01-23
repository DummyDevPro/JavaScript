/**
 * Void Function
 */
function createDiv(name){
    document.write('<div><p style="color: red;">' + name + '</p></div>')
}

createDiv('MIGERU');
createDiv('PRADIP');
createDiv('PARIK');
createDiv('THWIN');
createDiv('KHUN');

function greetingMsg() {
    let num = 1;
    num++;
    console.log('こんにちは > ' + num);
}

greetingMsg();
greetingMsg();