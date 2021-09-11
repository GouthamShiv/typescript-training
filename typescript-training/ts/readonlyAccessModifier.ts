console.log('-------------readonly-modifier-------------');

class RODept {
    // private readonly id: number;
    // public name: string;
    private employees: string[] = [];

    constructor(private readonly id: number, public name: string) {
    }

    describe(this: RODept) {
        console.log("Department ID is ::" + this.id);
        console.log("Department name is :: " + this.name);
    }

    addEmployee(employee: string) {
        // this.id = 50;
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

let roDept = new RODept(1, "Accounting");
roDept.addEmployee('John');
roDept.addEmployee('Wick');

// dept.employees[2] = 'Don';

roDept.describe();
roDept.printEmployees();

console.log(roDept);

console.log('---------------------------------------');