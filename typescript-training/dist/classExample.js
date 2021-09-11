"use strict";
console.log('-------------class-example-------------');
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department is :: " + this.name);
    };
    return Department;
}());
var accDept = new Department("Accounting");
accDept.describe();
console.log(accDept);
// let accDeptCopy = { describe: accDept.describe }
// accDeptCopy.describe();
var accDeptCopy = { name: 'Sales', describe: accDept.describe };
accDeptCopy.describe();
console.log(accDeptCopy);
var anotherAccDeptCopy = { describe: accDept.describe };
anotherAccDeptCopy.describe.bind(accDept)();
console.log(anotherAccDeptCopy);
console.log('---------------------------------------');
