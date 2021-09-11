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
console.log('-------------Inheritance-------------');
var IDepartment = /** @class */ (function () {
    function IDepartment(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    IDepartment.prototype.describe = function () {
        console.log("Department ID is ::" + this.id);
        console.log("Department name is :: " + this.name);
    };
    IDepartment.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    IDepartment.prototype.printEmployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return IDepartment;
}());
var ITDept = /** @class */ (function (_super) {
    __extends(ITDept, _super);
    function ITDept(id, admins) {
        var _this = _super.call(this, id, 'IT', admins) || this;
        _this.admins = admins;
        return _this;
    }
    return ITDept;
}(IDepartment));
var AccountsDept = /** @class */ (function (_super) {
    __extends(AccountsDept, _super);
    function AccountsDept(id, accountsEmployees) {
        var _this = _super.call(this, id, 'Accounts', accountsEmployees) || this;
        _this.accountsEmployees = accountsEmployees;
        _this.reports = [];
        return _this;
    }
    AccountsDept.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    AccountsDept.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountsDept;
}(IDepartment));
var it = new ITDept('D01', ['John', 'Brian']);
console.log(it);
var accounts = new AccountsDept('D02', []);
accounts.addEmployee('Smith');
accounts.addReport('Sales Report');
console.log(accounts);
accounts.printReports();
console.log('---------------------------------------');
