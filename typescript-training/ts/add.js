const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const add = document.querySelector('#add');

// add.addEventListener('click', () => {
//     console.log(input1.value);
//     console.log(input2.value);
// });

const addFun = (number1, number2) => {
    return number1 + number2;
};

add.addEventListener('click', () => {
    console.log('---------------add---------------')
    console.log(addFun(input1.value, input2.value));
    console.log('---------------------------------')
});