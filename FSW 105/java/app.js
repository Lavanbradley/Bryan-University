//Return true or false
const isEqualTo100 = (a,b) => a ===100 || b === 100 || (a+b) === 100;

console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));

console.log(isEqualTo100(10,0));
console.log(isEqualTo100(0,10));

console.log(isEqualTo100(20,80));
console.log(isEqualTo100(50,50));

//Get extension of a file name
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));
console.log(getFileExtension('index.css'));

//Take string and shift it forward one letter into the alphabet
//String.fromCharCode
//charCodeAt

const moveCharsForward = (str) =>
str.split('')
.map(char => String.fromCharCode(char.charCodeAt
  (0) + 1))
  .join('');

  console.loglog(moveCharsForward(a,b,c,d));
