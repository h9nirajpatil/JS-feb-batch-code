// functionName.call(thisArg, arg1, arg2, ...);
// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const person2 = {
//   firstName: "Jane",
//   lastName: "Doe",
// };

// // Calling fullName function with different context using call()
// console.log(person.fullName.call(person1, "New York", "USA")); // John Doe, New York, USA
// console.log(person.fullName.call(person2, "London", "UK")); // Jane Doe, London, UK

//1
// function greet() {
//   return `Hello, ${this.name}!`;
// }

// const person = { name: "Alice" };

// console.log(greet.call(person)); // Output: Hello, Alice!

//2
// function introduce(age, gender) {
//   return `I am ${this.name}, ${age} years old, ${gender}.`;
// }

// const person = { name: "Bob" };

// console.log(introduce.call(person, 30, "male")); // Output: I am Bob, 30 years old, male.

//3
// const dog = {
//   speak: function () {
//     return `Woof, my name is ${this.name}!`;
//   },
// };

// const cat = { name: "Fluffy" };

// console.log(dog.speak.call(cat)); // Output: Woof, my name is Fluffy!

//4
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Student(name, age, grade) {
//   Person.call(this, name, age);
//   this.grade = grade;
// }

// const student = new Student("Alice", 20, "A");

// console.log(student); // Output: Student { name: 'Alice', age: 20, grade: 'A' }

//5
// function greet(greeting, punctuation) {
//   return `${greeting}, ${this.name}${punctuation}`;
// }

// const person = { name: "John" };

// const greetingFunction = greet.bind(person); // Preparing the function with a specific context

// console.log(greetingFunction("Hi", "!")); // Output: Hi, John!
