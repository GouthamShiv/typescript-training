console.log('-------------Inheritance-------------');

class IDepartment {

    constructor(private readonly id: string, public name: string, private employees: string[]) {
    }

    describe(this: IDepartment) {
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

class ITDept extends IDepartment {
    constructor(id: string, private readonly admins: string[]) {
        super(id, 'IT', admins);
    }
}

class AccountsDept extends IDepartment {
    private reports: string[] = [];
    constructor(id: string, private readonly accountsEmployees: string[]) {
        super(id, 'Accounts', accountsEmployees);
    }

    addReport(report: string) {
        this.reports.push(report);
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDept('D01', ['John', 'Brian']);
console.log(it);

const accounts = new AccountsDept('D02', []);
accounts.addEmployee('Smith');
accounts.addReport('Sales Report');
console.log(accounts);
accounts.printReports();

console.log('---------------------------------------');