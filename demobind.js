// Bind() :-
// in this method an object can borrow a method from another object.
//Example
const person = {
  firstName: "Rohit",
  lastName: "Sharma",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const member = {
  firstName: "Virat",
  lastName: "Kholi",
};
let fullName = person.fullName.bind(member);

document.getElementById("demo").innerHTML = fullName();
