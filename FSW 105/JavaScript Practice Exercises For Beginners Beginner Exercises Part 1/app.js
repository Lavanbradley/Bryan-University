/* Write a JavaScript program to check two numbers and return true if
one of the numbers is 100 or if the sum of the two numbers is 100 */

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;
console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(0, 100));
console.log(isEqualTo100(0, 10));
console.log(isEqualTo100(50, 50));
console.log(isEqualTo100(45, 55));

//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

const  moveCharsForward = (str) => str.split(' ').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join(' ');
console.log(moveCharsForward('abcd'));