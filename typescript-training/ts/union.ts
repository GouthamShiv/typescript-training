console.log('-------------union-------------');

function combine(input1: number | string, input2: number | string) {
    if (typeof input1 === 'number' && typeof input2 === 'number')
        return input1 + input2;
    else if (typeof input1 === 'string' && typeof input2 === 'string')
        return input1.toString() + input2.toString();
};

let inputN1 = 4;
let inputN2 = 3;
console.log("Sum of " + inputN1 + " and " + inputN2 + " is: " + combine(inputN1, inputN2));

let inputS1 = 'Solar ';
let inputS2 = 'System';
console.log("Concatination of " + inputS1 + "and " + inputS2 + " is: " + combine(inputS1, inputS2));
console.log('-------------------------------');