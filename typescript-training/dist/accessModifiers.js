"use strict";
console.log('-------------access-modifiers-------------');
var Dept = /** @class */ (function () {
    function Dept(name) {
        this.employees = [];
        this.name = name;
    }
    Dept.prototype.describe = function () {
        console.log("Department is :: " + this.name);
    };
    Dept.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Dept.prototype.printEmployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Dept;
}());
var dept = new Dept("Accounting");
dept.addEmployee('John');
dept.addEmployee('Wick');
// dept.employees[2] = 'Don';
dept.describe();
dept.printEmployees();
console.log(dept);
console.log('---------------------------------------');
