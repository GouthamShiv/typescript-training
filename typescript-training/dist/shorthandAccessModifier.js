"use strict";
console.log('-------------shorthand-access-------------');
var SHDept = /** @class */ (function () {
    function SHDept(id, name) {
        this.id = id;
        this.name = name;
        // private id: number;
        // public name: string;
        this.employees = [];
    }
    SHDept.prototype.describe = function () {
        console.log("Department ID is ::" + this.id);
        console.log("Department name is :: " + this.name);
    };
    SHDept.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    SHDept.prototype.printEmployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return SHDept;
}());
var shDept = new SHDept(1, "Accounting");
shDept.addEmployee('John');
shDept.addEmployee('Wick');
// dept.employees[2] = 'Don';
shDept.describe();
shDept.printEmployees();
console.log(shDept);
console.log('---------------------------------------');
