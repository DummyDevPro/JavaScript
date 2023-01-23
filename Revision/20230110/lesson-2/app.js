let str = 'Apple';
let oneChar = str.charAt(str.length - 1);
console.log(oneChar);

let oneCharCode = str.charCodeAt(str.length - 1);
console.log(oneCharCode);

let str1 = 'apple orange';
// orange apple


let str2 = 'egg'; // gge
let str3 = 'apple'; // god

let result = lastMidFirst(str2);
console.log(result);

let result1 = lastMidFirst(str3);
console.log(result1);

let result2 = lastMidFirst('blah blah');
console.log(result2);

function lastMidFirst(str) {
    let first = str.slice(0, 1);
    let mid = str.slice(1, -1);
    let last = str.slice(-1);

    return last.concat(mid, first);
}