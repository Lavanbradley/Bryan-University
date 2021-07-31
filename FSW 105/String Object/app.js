//Requirement 1
console.log("Requirement 1");

function capitalizeAndLowercase(str) {
  var AllCapsFollowedByLower = str.toUpperCase() + str.toLowerCase();
  return AllCapsFollowedByLower
};
console.log(capitalizeAndLowercase("March"));
console.log(capitalizeAndLowercase("April"));

//Requirement 2
console.log("Requirement 2");
function findMiddleIndex(str2) {
  var middleOfString = Math.floor(str2.length / 2);
  return middleOfString;
}
console.log(findMiddleIndex("Here is my string"));
console.log(findMiddleIndex("Here is another string"));

//Requirement 3
console.log("Requirement 3");

function firtsHalf(str3) {
  var HalfFirst = str3.slice(0, findMiddleIndex(str3))
  return HalfFirst;
};
console.log(firtsHalf("Hello"));
console.log(firtsHalf("Hello World"));

//Requirement 4
console.log("Requirement 4")
function capitalize(str4) {
  var half = str4.toUpperCase().slice(0, findMiddleIndex(str4)) + str4.slice(findMiddleIndex(str4));
  return half;
};
console.log(capitalize("doug"));


