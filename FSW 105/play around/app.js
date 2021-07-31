if (5 < 3) {
  console.log("is great");
} else {
  console.log("NOP");
};

const cat = "cat"
if (cat.length === 3) {
  console.log("yes")
};

const catt = "cat";
const dog = "dg";

if (catt.length === dog.length) {
  console.log("yes")
} else if (catt.length != dog.length) {
  console.log("no");
}
var person = {
  firstName: "Bobby",
  age: 12
};

if (person.age > 18) {
  console.log("old enough");
} else {
  console.log("not old enough")
};
if (person.firstName.charAt(1) === "o") {
  console.log("yes")
};

if (person.age > 18 && person.age.charAt(0) === "B") {
  console.log("yes")
} else {
  console.log("Naw fam")
};

function getAge(isAge) {
  return (isAge ? "18" : "17");
}
console.log(getAge(false));


var st = "Please only find where only occurs";
var po = st.indexOf("only");

console.log(po);

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

var count = 0;

for (var i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    count++;
  }
}
console.log(count);

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  }, {
    name: "Madeline",
    age: 80,
    gender: "female"
  }, {
    name: "Cheryl",
    age: 22,
    gender: "female"
  }, {
    name: "Sam",
    age: 30,
    gender: "male"
  }, {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
    console.log("Old enough")
  } else {
    console.log("Not old enough")
  }
};

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is enough to see Mad Max ")
  } else {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
  }
};

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {

}
for (var j = 0; j < 101; j += 1);
console.log(j);

let arr = [2, 3, 4, 5, 6, 7, 8];
function evenOnly(num) {
  return (num % 2 == 0);
}
arr = arr.filter(evenOnly);
console.log(arr);

let arr2 = [2, 3, 4, 5, 6, 7, 8, 10];
function evenOnly(num) {
  return (num % 2 == 0);
}
arr2 = arr2.filter(evenOnly);
console.log(arr2);




// Check to numbers and return if one of the numbers is 100 or if the sum of the two numbers is 100
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;
console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(75, 25));
console.log(2 + "2" + 4);

//Spread operator 
let nums = [1, 2, 2, 3];
console.log(...new Set(nums))


let all = [1,1,2,2,3,3,4,4];
console.log(... new Set(all));

var powerRangers = [
  'van',
  'van',
  'van',
  'van',
  'van',
  'van'
];

