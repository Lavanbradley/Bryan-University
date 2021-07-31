//Adding an object method as a prototype
//Objects prototype property is invisible
function Student() {
  this.name = "John";
  this.gender = "Male"
}
//sayHi is the function
Student.prototype.age = 15;
Student.prototype.sayHi = function () {
  console.log("Hi, How are you?");
}
var student1 = new Student();
var proto = Object.getPrototypeOf(student1);
console.log(student1.age);
//Returns student function in its entirety 
console.log(proto.constructor);

var student2 = new Student();
student2.sayHi();
console.log(student2.age);

var student4 = new Student();
student4.toString();