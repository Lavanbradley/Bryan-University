var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Please enter your first number: ");
var secondNum = readlineSync.questionInt("Please enter your second number: ");
var enteredOperation = readlineSync.questionInt("Please enter the operation to perform: add, sub, mul, div ");

//Addition function
function addTwoNumbers(num1, num2) {
  return (num1 + num2);
};

//Subtraction function
function subTwoNumbers(num1, num2) {
  return (num1 - num2);
};

//Multiplication function
function mulTwoNumbers(num1, num2) {
  return (num1 * num2);
};

//Divison function
function divTwoNumbers(num1, num2) {
  return (num1 / num2);
};


function calculator(number1, number2, operation) {
  if (operation == "add") {
    //Call the addition function
    console.log("Addition of two numbers: " + addTwoNumbers(number1, number2));
  } else if (operation == "sub") {
    //Call the subtraction function
    console.log("Subtraction of two numbers: " + subTwoNumbers(number1, number2));
  } else if (operation == "mul") {
    // Call the multiplication function
    console.log("Multiplication of two numbers: " + mulTwoNumbers(number1, number2));
  } else if (operation == "div") {
    //Cal the division function
    console.log("Divison of two numbers: " + divTwoNumbers(number1, number2));
  } else {
    //Catch all message
    console.log("Cannot identify the entered operation. Please try again!");
  }
};

//Call the calculator
calculator(firstNum, secondNum, enteredOperation);