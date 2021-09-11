"use strict";
console.log('-------------readonly-modifier-------------');
var RODept = /** @class */ (function () {
    function RODept(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: number;
        // public name: string;
        this.employees = [];
    }
    RODept.prototype.describe = function () {
        console.log("Department ID is ::" + this.id);
        console.log("Department name is :: " + this.name);
    };
    RODept.prototype.addEmployee = function (employee) {
        // this.id = 50;
        this.employees.push(employee);
    };
    RODept.prototype.printEmployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return RODept;
}());
var roDept = new RODept(1, "Accounting");
roDept.addEmployee('John');
roDept.addEmployee('Wick');
// dept.employees[2] = 'Don';
roDept.describe();
roDept.printEmployees();
console.log(roDept);
console.log('---------------------------------------');
