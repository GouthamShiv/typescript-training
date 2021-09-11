"use strict";
console.log('-------------any-------------');
// let array:  string[];
// array.push('test');
// array.push(20); // Argument of type 'number' is not assignable to parameter of type 'string'.
var array = [];
array.push('test');
array.push(20);
console.log("Data in \"array: any[]\"");
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var data = array_1[_i];
    console.log(data);
}
console.log('-----------------------------');
