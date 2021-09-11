"use strict";
var in1 = document.querySelector('#num1');
var in2 = document.querySelector('#num2');
var btn = document.querySelector('#add');
// add.addEventListener('click', () => {
//     console.log(input1.value);
//     console.log(input2.value);
// });
var addMethod = function (number1, number2) {
    return number1 + number2;
};
btn.addEventListener('click', function () {
    console.log('-------------addScript-------------');
    console.log(addMethod(+in1.value, +in2.value));
    console.log('-----------------------------------');
});
