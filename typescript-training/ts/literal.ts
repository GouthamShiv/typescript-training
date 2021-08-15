console.log('---------------literal---------------');

function combineLiteral(input1: number | string, input2: number | string, resultType: String) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number')
        result = input1 + input2;
    else if (typeof input1 === 'string' && typeof input2 === 'string')
        result = input1.toString() + input2.toString();

    if(resultType === 'as-number')
        return +result;
    else
        return result.toString();
    
};

console.log("Combin 4 and 6 as-string: " + combineLiteral(4, 6, 'as-string'));

console.log("Combin '4' and '6' as-number: " + combineLiteral('4', '6', 'as-number'));
console.log('-------------------------------------');


console.log('-------------literalType-------------');
function combineLiteralType(input1: number | string, input2: number | string, resultType: 'as-string' | 'as-number') {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number')
        result = input1 + input2;
    else if (typeof input1 === 'string' && typeof input2 === 'string')
        result = input1.toString() + input2.toString();

    if(resultType === 'as-number')
        return +result;
    else
        return result.toString();
    
};
console.log("Combin 4 and 6 as-string: " + combineLiteralType(4, 6, 'as-string'));

console.log("Combin '4' and '6' as-number: " + combineLiteralType('4', '6', 'as-number'));
console.log('------------------------------------');

console.log('-------------literalEnum-------------');
enum RESULT_TYPE {
    AS_NUMBER = 'as-number',
    AS_STRING = 'as-string'
}

function combineLiteralEnum(input1: number | string, input2: number | string, resultType: RESULT_TYPE) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number')
        result = input1 + input2;
    else if (typeof input1 === 'string' && typeof input2 === 'string')
        result = input1.toString() + input2.toString();

    if(resultType === RESULT_TYPE.AS_NUMBER)
        return +result;
    else
        return result.toString();
    
};
console.log("Combin 4 and 6 as-string: " + combineLiteralType(4, 6, RESULT_TYPE.AS_STRING));

console.log("Combin '4' and '6' as-number: " + combineLiteralType('4', '6', RESULT_TYPE.AS_NUMBER));
console.log('------------------------------------');