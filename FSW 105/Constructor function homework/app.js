var employees = [];


function employee(name, jobTitle, salary) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
}
employee.prototype.status = 'Full Time';

employee.prototype.printEmployeeForm = function () {
  console.log('Name: ' + this.name);
  console.log('Job Title: ' + this.jobTitle);
  console.log('Salary: ' + this.salary);
  console.log('Status: ' + this.status);
};

var ashley = new employee('Ashley', 'Cook', '$35K');
ashley.printEmployeeForm();

var ben = new employee('Ben', 'Dancer', '$100k');
ben.status = 'Contract';
ben.printEmployeeForm();

var Eric = new employee('Eric', 'Dog sitter', '$25k');
Eric.printEmployeeForm();

employees.push(ashley, ben, Eric);
console.log(employees);