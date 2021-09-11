"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('-------------Overriding-------------');
var IDepartment1 = /** @class */ (function () {
    // private employees: string[]
    function IDepartment1(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    IDepartment1.prototype.describe = function () {
        console.log("Department ID is ::" + this.id);
        console.log("Department name is :: " + this.name);
    };
    IDepartment1.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    IDepartment1.prototype.printEmployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return IDepartment1;
}());
var ITDept1 = /** @class */ (function (_super) {
    __extends(ITDept1, _super);
    function ITDept1(id, admins) {
        var _this = _super.call(this, id, 'IT', admins) || this;
        _this.admins = admins;
        return _this;
    }
    return ITDept1;
}(IDepartment1));
var AccountsDept1 = /** @class */ (function (_super) {
    __extends(AccountsDept1, _super);
    function AccountsDept1(id, accountsEmployees) {
        var _this = _super.call(this, id, 'Accounts', accountsEmployees) || this;
        _this.accountsEmployees = accountsEmployees;
        _this.reports = [];
        return _this;
    }
    AccountsDept1.prototype.addEmployee = function (emp) {
        if (emp === 'Smith')
            return;
        // super.addEmployee(emp);
        // this.employees.push(emp); // error :: Property 'employees' is private and only accessible within class 'IDepartment1'.
        this.employees.push(emp);
    };
    AccountsDept1.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    AccountsDept1.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountsDept1;
}(IDepartment1));
var it1 = new ITDept1('D01', ['John', 'Brian']);
console.log(it1);
var accounts1 = new AccountsDept1('D02', []);
accounts1.addEmployee('Smith');
accounts1.addEmployee('Don');
accounts1.addEmployee('Dean');
accounts1.addReport('Sales Report');
console.log(accounts1);
accounts1.printReports();
console.log('---------------------------------------');
