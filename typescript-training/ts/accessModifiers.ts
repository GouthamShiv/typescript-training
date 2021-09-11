console.log('-------------access-modifiers-------------');

class Dept {
    name: string;
    private employees: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    describe(this: Dept) {
        console.log("Department is :: " + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

let dept = new Dept("Accounting");
dept.addEmployee('John');
dept.addEmployee('Wick');

// dept.employees[2] = 'Don';

dept.describe();
dept.printEmployees();

console.log(dept);

console.log('---------------------------------------');