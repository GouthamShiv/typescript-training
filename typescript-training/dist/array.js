"use strict";
console.log('-------------array-------------');
var personWithArray = {
    name: 'John',
    age: 30,
    hobbies: ['Music', 'Cooking']
};
var favourites;
// will be an error
// favourites = 'animals';
// correct way
favourites = ['animals'];
console.log('Array with datatype - string');
// looping array
for (var _i = 0, _a = personWithArray.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log('\n');
var anyTypeArray;
anyTypeArray = ['Text', 25];
console.log('Array with datatype - any');
for (var _b = 0, anyTypeArray_1 = anyTypeArray; _b < anyTypeArray_1.length; _b++) {
    var data = anyTypeArray_1[_b];
    console.log(data);
}
console.log('-------------------------------');
