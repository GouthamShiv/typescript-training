console.log('-------------shorthand-access-------------');

class SHDept {
    // private id: number;
    // public name: string;
    private employees: string[] = [];

    constructor(private id: number, public name: string) {
    }

    describe(this: SHDept) {
        console.log("Department ID is ::" + this.id);
        console.log("Department name is :: " + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

let shDept = new SHDept(1, "Accounting");
shDept.addEmployee('John');
shDept.addEmployee('Wick');

// dept.employees[2] = 'Don';

shDept.describe();
shDept.printEmployees();

console.log(shDept);

console.log('---------------------------------------');