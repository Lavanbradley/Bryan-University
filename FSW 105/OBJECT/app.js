var person = {
  firstName: "Van",
  lastName: "Brad",
  birthDate: 1989,
  hasWallet: true,
  location: "USA",
  friends: ["Mike", "Joe", "Sam", "Chris"],
  displayInfo: function () {
    console.log(
      `${person.firstName} was born in ${this.birthDate} and has friends: ` +
        this.friends
    );
  },
  address: {
    street: "123 My Street",
    city: "LOs Angeles",
    state: "CA",
    country: "USA",
  },
};

person.displayInfo();
//console.log(person.friends);
//console.log(person.address.street)
//console.log(person["firstName"]);
console.log(
  "Complete address is:" +
    person["address"]["street"] +
    " " +
    person["address"]["city"] +
    ", " +
    person["address"]["state"] +
    " " +
    person["address"]["country"]
);
