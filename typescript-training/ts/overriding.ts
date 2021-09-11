console.log('-------------Overriding-------------');

class IDepartment1 {
    // private employees: string[]
    constructor(private readonly id: string, public name: string, protected employees: string[]) {
    }

    describe(this: IDepartment1) {
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

class ITDept1 extends IDepartment1 {
    constructor(id: string, private readonly admins: string[]) {
        super(id, 'IT', admins);
    }
}

class AccountsDept1 extends IDepartment1 {
    private reports: string[] = [];
    constructor(id: string, private readonly accountsEmployees: string[]) {
        super(id, 'Accounts', accountsEmployees);
    }

    addEmployee(emp: string) {
        if(emp === 'Smith')
            return
        // super.addEmployee(emp);
        // this.employees.push(emp); // error :: Property 'employees' is private and only accessible within class 'IDepartment1'.
        this.employees.push(emp);
    }

    addReport(report: string) {
        this.reports.push(report);
    }

    printReports() {
        console.log(this.reports);
    }
}

const it1 = new ITDept1('D01', ['John', 'Brian']);
console.log(it1);

const accounts1 = new AccountsDept1('D02', []);
accounts1.addEmployee('Smith');
accounts1.addEmployee('Don');
accounts1.addEmployee('Dean');
accounts1.addReport('Sales Report');
console.log(accounts1);
accounts1.printReports();

console.log('---------------------------------------');