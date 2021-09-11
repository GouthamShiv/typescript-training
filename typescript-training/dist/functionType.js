"use strict";
console.log('-------------function-type-------------');
function functionType(input1, input2) {
    // return input1.toString() + input2.toString(); // error - return type has to be number
    return input1 + input2;
}
;
// void return-type as it's not returning anything
function functionTypeResult(value) {
    console.log('Result: ' + value);
}
// function printResult(value: number): undefined {
//     console.log('Result: ' + value);
//     return;
// }
// declaring variable with function type
// let functionVar: Function;
// declaring variable with function type along with signature
var functionVar;
functionVar = functionType;
functionTypeResult(functionVar(4, 3));
console.log(functionTypeResult(functionVar(4, 3)));
console.log('---------------------------------------');
