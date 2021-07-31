/* Ex of object and its constructor
a book object with 3 parameters*/
function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

//Below brings all 3 properties together
function displayBook(book) {
  console.log(book.name + " authored by: " + book.author + " was published in the year " + book.year + " . ");
}

//Defining instances 
var book1 = new Book("Node.js Web Development", "David Herron", 2020);
var book2 = new Book("Professional JavaScript for Web Developers", "Matt Frisbie", 2019);
var book3 = new Book("Modern Full-Stack Development", "Frank Zammetti", 2020);

displayBook(book1);
displayBook(book2);
displayBook(book3);

//JavaScript objects prototype approach

//Function Student object, has a name property with the value of John and a gender property with a value of male
function Student(){
  this.name = "John";
  this.gender = "Male"
}
//Created instance using the "new" reserved word, and give it a age property with a value of 15
var student1 = new Student();
student1.age = 15;
//Sending age property to the console
console.log(student1.age);

//Prototype: Adds new properties a at later stage to a function which will be shared across all the instances 
//Prototype: Is an object that is associated with every function and object by default in JavaScript 