console.log('------------objects------------');

let person = {
    name: 'John',
    age: 30,
};

console.log('Name: ' + person.name);

//error scenario, as the person object is not declared
// let personObj: object = {
//     name: 'John',
//     age: 30
// };
// console.log(personObj.name);

//to correct the above issue
// let personObj: {
//     name: string;
//     age: number;
// } = {
//     name: 'John',
//     age: 30
// };
// console.log(personObj.name);

console.log('-------------------------------');