console.log('-------------union-------------');
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number')
        return input1 + input2;
    else if (typeof input1 === 'string' && typeof input2 === 'string')
        return input1.toString() + input2.toString();
}
;
var inputN1 = 4;
var inputN2 = 3;
console.log("Sum of " + inputN1 + " and " + inputN2 + " is: " + combine(inputN1, inputN2));
var inputS1 = 'Solar ';
var inputS2 = 'System';
console.log("Concatination of " + inputS1 + "and " + inputS2 + " is: " + combine(inputS1, inputS2));
console.log('-------------------------------');
