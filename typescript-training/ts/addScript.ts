const in1 = document.querySelector('#num1') as HTMLInputElement;
const in2 = document.querySelector('#num2') as HTMLInputElement;
const btn = document.querySelector('#add')!;

// add.addEventListener('click', () => {
//     console.log(input1.value);
//     console.log(input2.value);
// });

const addMethod = (number1: number, number2: number) => {
    return number1 + number2;
};

btn.addEventListener('click', () => {
    console.log('-------------addScript-------------');
    console.log(addMethod(+in1.value, +in2.value));
    console.log('-----------------------------------');
});