var i = 2;
if (i > 3) {
  console.log("is greater than");
};

var cat = 3;
var dog = 6;

if (cat == dog) {
  console.log("equal")
}
else {
  console.log("not the same")
};


var person = {
  firstName: "Bobby",
  age: 12
};
if (person.age > 18) {
  console.log(person.firstName + "  is allowed to go to the movie if they are old enough (18 or older)")
}
else {
  console.log(person.firstName + " is not allowed to go to the movie if they are not older than 18. ")
};
if (person.firstName.startsWith("B")) {
  console.log("Enjoy the movie this time" + person.firstName);
}


if (person.firstName.startsWith("B") && person.age > 18) {
  console.log("Would you like popcorn with the movie?");
};

if (1 === "1") {
  console.log("Strict")
}
else if (1 == "1") {
  console.log("loose")
}
else {
  console.log("Not equal at all")
};

if (1 <= 2 && 2 === 4) {
  console.log("yes");
};
console.log(typeof "Dog");
console.log(typeof (true));

var s = 13;
if (s > 12) {
  console.log("s is greater than 12");
}

var boat = "fit";
if (boat.length === 3) {
  console.log("yay")
};

var player = {
  highScore: 100,
  age: 21,
  system: "Playstation",
  firstName: "Lavan",
  state: "California"
};

if (player.highScore > 99 && player.age > 20) {
  console.log(player.firstName + " is the best player in " + player.state + ", he wins a  " + player.system);
}
else {
  console.log(" Sorry " + player.firstName + ", maybe next year");
};

var i;
for (i = 0; i < 11; i++) {
  console.log("hello");
}

function say(message) {
  console.log(message);
}
var result = say("Hello");
console.log("Result is:" + result);

var cat = "cat";

if (cat.length == 3) {
  console.log('Is equal');
}

var dog = "dog";

if (dog.length === cat.length) {
  console.log('is the same')
} else {
  console.log('is not the same')
};



var person = {
  firstName: "Booby",
  age: 12
};

if (person.age > 18) {
  console.log(person.firstName + ' is allowed ');
} else {
  console.log(person.firstName + ' is not allowed ');
}

var age = 15;
console.log((age > 18) ? "yes" : "no");


var person2 = {
  name: 'van',
  age: 31,
  score: 1000
};
console.log((person2.name === 'van') ? 'welcome' : 'not van');

