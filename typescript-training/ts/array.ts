console.log('-------------array-------------');

let personWithArray = {
    name: 'John',
    age: 30,
    hobbies: ['Music', 'Cooking']
};

let favourites: string[];

// will be an error
// favourites = 'animals';

// correct way
favourites = ['animals'];

console.log('Array with datatype - string')
// looping array
for(let hobby of personWithArray.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log('\n');
let anyTypeArray: any[];
anyTypeArray = ['Text', 25];
console.log('Array with datatype - any');
for(let data of anyTypeArray) {
    console.log(data);
}

console.log('-------------------------------');