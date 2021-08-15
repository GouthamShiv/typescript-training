console.log('-------------any-------------');

// let array:  string[];
// array.push('test');
// array.push(20); // Argument of type 'number' is not assignable to parameter of type 'string'.

let array: any[] = [];
array.push('test');
array.push(20);

console.log("Data in \"array: any[]\"");
for (let data of array) {
    console.log(data);
}

console.log('-----------------------------');