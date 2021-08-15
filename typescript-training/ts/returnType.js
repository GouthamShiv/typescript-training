console.log('-------------return-type-------------');
function returnType(input1, input2) {
    // return input1.toString() + input2.toString(); // error - return type has to be number
    return input1 + input2;
}
;
// void return-type as it's not returning anything
function printResult(value) {
    console.log('Result: ' + value);
}
// function printResult(value: number): undefined {
//     console.log('Result: ' + value);
//     return;
// }
printResult(returnType(4, 3));
console.log(printResult(returnType(4, 3)));
console.log('-------------------------------------');
