//Function Student object, has a name property with the value of John and a gender property with a value of male
function Student(){
  this.name = "John";
  this.gender = "Male"
}

//Prototype: Adds new properties a at later stage to a function which will be shared across all the instances 
//Prototype: Is an object that is associated with every function and object by default in JavaScript 
Student.prototype.age = 15;

//Created instance using the "new" reserved word, and give it a age property with a value of 15
var student1 = new Student();

//student1.age = 15;
//Sending age property to the console
console.log(student1.age);

//Created new student
var student2 = new Student();
console.log(student2.age);

