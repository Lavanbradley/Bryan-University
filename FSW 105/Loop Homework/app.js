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

// Requirement 1

console.log("Requirement 1");

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
    console.log("old enough");
  }
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
    console.log("is not old enough");
  }
};

// Requirement 2

console.log("Requirement 2");

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max");
  }
  else {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max");
  }
};

// Requirement 3

console.log("Requirement 3");

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE'S good to see Mad Max Fury Road.");
  }
  else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in");
  }
  else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max Fury Road.");
  }
  else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HER in");
  }
};


// Requirement 4

console.log("Requirement 4");

for (var j = 0; j < 101; j += 1) {
  if (j % 2 === 0) {
    console.log(j + " is even");
  }
  else {
    console.log(j + " is odd");
  }
};


