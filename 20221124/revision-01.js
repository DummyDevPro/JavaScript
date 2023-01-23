let a = 10;
let b = 'Toyota';
let c = true;
let d = []; // empty array
console.log(a);
console.log(b);
console.log(c);
console.log(d);
a = a + 2; // a += 2;
console.log(a);
d.push(123);
console.log(d);
d.unshift(90);
console.log(d);
d[0] = 40;
console.log(d);

let numArr = [90];
console.log('Before > ');
console.log(numArr);
numArr[0] = 12;
console.log('After > ');
console.log(numArr);
numArr[1] = 14;
console.log(numArr);

numArr = [0, 1, 2, 3, 4];

let removeLastEle = numArr.pop();

console.log('remove last ele > ' + removeLastEle);
console.log(numArr);

let removeFirstEle = numArr.shift();
console.log('remove first ele > ' + removeFirstEle);
console.log(numArr);

function sumArrData(arr) {
    let firstELe = arr[0];
    let secondEle = arr[1];
    let sum = firstELe + secondEle;
    return sum;
}

let sumResult = sumArrData([1, 2]); // 3
console.log(sumResult);

sumResult = sumArrData([3, 5]); // 8
console.log(sumResult);

sumResult = sumArrData([13, 5]); // 18
console.log(sumResult);

function sumArrData3(arr) {

}

let sumResult1 = sumArrData3([1, 11, 21]); // 33
console.log(sumResult1);

sumResult1 = sumArrData3([2, 12, 22]); // 36
console.log(sumResult1);

sumResult1 = sumArrData3([3, 13, 23]); // 39
console.log(sumResult1);

function findMax(arr) {
    let f = arr[0];
    let s = arr[1];

    if (f > s) {
        return f;
    } else {
        return s;
    }
}

console.log(findMax([1, 11])); // 11
console.log(findMax([21, 0])); // 21

function findMaxFirstAndLast(arr) {
    let length = arr.length;
    // Arrayのlength 0 の場合、0を返す
    if (length == 0) {
        return 0;
    }
    // Arrayのlength 1 の場合、Arrayのfirst-elementのデータを返す
    else if (length == 1) {
        return arr[0];
    }
    // それ以外の場合
    else {
        let firstEle = arr[0];
        let lastEle = arr[arr.length - 1];
        if (firstEle > lastEle) {
            return firstEle;
        } else {
            return lastEle;
        }
    }
}
findMaxFirstAndLast([]);// 0
findMaxFirstAndLast([3]);// 3
findMaxFirstAndLast([5]);// 5
findMaxFirstAndLast([9]);// 9

findMaxFirstAndLast([1, 2]);// 2
findMaxFirstAndLast([11, 0, 3]); // 11
findMaxFirstAndLast([9, 10, 8, 4, 1]); // 9
findMaxFirstAndLast([4, 9, 7, 1, 5]); // 5
