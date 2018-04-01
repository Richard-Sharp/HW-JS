let num = '33721';
let numArr = num.split('');
console.log (numArr);

//let ArrNummber = +numArr[0];
for(var i = 0; i < numArr.length; i++) {
    numArr[i] = +numArr[i];
}

//console.log(ArrNummber);
console.log(numArr);
let count = numArr[0];
for(var i = 1; i < numArr.length; i++) {
    count *= numArr[i];
}


// let count = numArr[0] * numArr[1] * numArr[2] * numArr[3] * numArr[4] * numArr[5];

console.log (count);
let res = count**3;
console.log (res);
alert('Полученный результат: ' + res);