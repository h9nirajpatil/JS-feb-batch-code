//apply() method :-
// u can write a method that can be used on different objects
// it similar to call() method
//Example 1
// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstName: "Ramesh",
//   lastName: "Patel",
// };
// document.getElementById("demo").innerHTML = person.fullName.apply(person1);

//Example 2
// const person = {
//   fullName: function (city,country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "Ramesh",
//   lastName: "Patel",
// };
// document.getElementById("demo").innerHTML = person.fullName.apply(person1,["Pune","India"]);

//example of call method comparisions woth apply which is above example
// const person = {
//     fullName: function (city,country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     },
//   };
  
//   const person1 = {
//     firstName: "Ramesh",
//     lastName: "Patel",
//   };
//   document.getElementById("demo").innerHTML = person.fullName.call(person1,"Pune","India");
