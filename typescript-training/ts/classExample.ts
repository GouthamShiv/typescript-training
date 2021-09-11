console.log('-------------class-example-------------');

class Department {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    describe(this: Department) {
        console.log("Department is :: " + this.name);
    }

}

let accDept = new Department("Accounting");
accDept.describe();
console.log(accDept);

// let accDeptCopy = { describe: accDept.describe }
// accDeptCopy.describe();

let accDeptCopy = { name: 'Sales', describe: accDept.describe }
accDeptCopy.describe();
console.log(accDeptCopy);

let anotherAccDeptCopy = { describe: accDept.describe }
anotherAccDeptCopy.describe.bind(accDept)();
console.log(anotherAccDeptCopy);

console.log('---------------------------------------');