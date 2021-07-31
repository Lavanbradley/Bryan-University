// Requirement 1
console.log("Requirement 1");

function ad(a, b) {
  return a + b;
};
var sum = ad(100, 200);
console.log("Sum is: " + sum);

//Requirement 2
console.log("Requirement 2");

function identifyMaxNumber(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
console.log("Here is the max number: " + identifyMaxNumber(1, 2, 8));

//Requirement 3
console.log("Requirement 3");
function number(a) {
  if (a % 2 === 0) {
    console.log("even")
  }
  else {
    console.log("odd");
  }
};
number(2);

//Requirement 4

console.log("Requirement 4");

function say(message) {
  if (message.length <= 20) {
    console.log(message + message)
  }
  else {
    console.log(message.slice(0, message.length / 2));
  }
};
