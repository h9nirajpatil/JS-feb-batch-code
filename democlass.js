//Classes
// it allows u to create blueprints for objects with
// properties ,
// methods
// facilitating code organization
// inheritance
// code reuse

// class syntax
// use class keyword to create class
// always  add methods named constructor():
/*
class ClassName{-
    constructor(){...code}
}
 */

//Example
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// whey u have a class , u can use the class to create object
// const Car1 = new Car("Ford", 2024);
// const Car2 = new Car("Mustang", 1997);

//print
// console.log(Car1.year + " " + Car2.name);

//Example 2
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// const dog = new Animal("Dog");
// dog.speak();

//Example 3
// class Car {
//   constructor(name, year, distance) {
//     this.name = name;
//     this.year = year;
//     this.distance = distance;
//   }
//multiple methods.
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year; //2024 - 2024 //-> 4
//   }
//   driving() {
//     return `${this.distance}km covered till now.`;
//   }
// }

// const myCar = new Car("Ford", 2020);

// const myCar2 = new Car("Supra", 2021, 10);

// console.log("My car use" + " " + myCar.age() + " " + "years old.");

// console.log(myCar2.driving());

// U can send parameters to class methods
//example 4
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     return x - this.year;  // 2024 - 2016 / 8 year
//   }
// }
// const date = new Date();
// let year = date.getFullYear(); // current year /2024

// const myCar = new Car("Mustang", 2016);

// console.log("My car is" + " " + myCar.age(year) + " " + "years old.");

// Getter & setter
/*
Getter and setter methods are special functions in JavaScript 
classes that allow you to define how properties are accessed and 
assigned. They provide a way to control access to object properties 
and add validation or custom behavior when getting or setting 
values.
 */
//Getter Method:
/*
Getter methods are used to retrieve the value of a property from 
an object. They are defined using the get keyword followed by the 
method name. 
 */

//Example 1
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   //Getter method for the area property
//   get area() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const circle = new Circle(5);
// console.log(circle.area); // output : 78.5398

//Setter:
/*
Setter methods r used the value of a property in an object. They r defined using the set keyword followed by the method name.
 */
//Example 2
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   //Getter method for the area property
//   get area() {
//     return Math.PI * this._radius ** 2;
//     //corrected radius to _radius
//   }

//   set radius(value) {
//     if (value <= 0) {
//       throw new Error("Radius must be positive number");
//     }
//     this._radius = value; // corrected radius to _radius
//   }
// }

// const circle = new Circle(5);
// circle.radius = 7;
// console.log(circle.area); // output : 78.5398

//Constructor
/*
Constructor is a special method that is automatically called when a new instance of a class is created using the new keyword. The constructor method is used to initialize the newly created objects's properties or perform any setup that is necessary before the objects is ready for use.
 */
// Example 1 : Basic (parameter constructor)
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const person_name = new Person("Virat", 35);

// console.log(person_name.name); // virat
// console.log(person_name.age); // 35

// it can perform various tasks:
//Like
// intiliazing instance variables
// setting up default property values.
// Intializing Object state.
// Executing any setup logic required before object can be used.

//Example 2 : Default Constructor
// class Car {
//   constructor() {
//     this.brand = "Toyoyta";
//     this.model = "Camry";
//     this.year = 2020;
//   }
// }
// const myCar = new Car();
// console.log(myCar.brand);
// console.log(myCar.model);
// console.log(myCar.year);
// class college5{
//   constructor(name,branch,marks){
//       this.name=name;
//       this.branch=branch;
//       this.marks=marks;
//   }
//   get rank (){
//       if (this.marks>60){
//           return ` hello ${this.name} you have obtained ${this.marks} marks in accademics  mainatin like that`;
//       } else {
//           return ` hello ${this.name} you have obtained ${this.marks} marks pleace concentrate more`;
//       }
//   }
// }

// let stude= new college5('phani','civil',50);

// console.log(stude.rank);

/*
Examples
 */

// class Rectangle {
//   constructor(width, height) {
//     this._width = width;
//     this._height = height;
//   }

//   get width() {
//     return this._width;
//   }

//   set width(val) {
//     this._width = val;
//   }

//   get height() {
//     return this._height;
//   }
//   set height(val) {
//     this._height = val;
//   }
// }
// //Usages
// const rect = new Rectangle(4, 5);
// console.log(rect.width); // 4
// console.log(rect.height); //5

// rect.width = 10; //set  width property of the rect object to 10 using the setter method.
// rect.height = 20; // set height property of the rect object to 20 using the setter method.

// console.log(rect.width); // we access the width & height property again to verify that it has been updated to 10 & 20 which is printed as output.
// console.log(rect.height);
// let text =
//   '{ "employees" : [' +
//   '{ "firstName":"John" , "lastName":"Doe" },' +
//   '{ "firstName":"Anna" , "lastName":"Smith" },' +
//   '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// const obj = JSON.parse(text);
// console.log(obj);
// document.getElementById("demo").innerHTML =
//   obj.employees[1].firstName + " " + obj.employees[1].lastName;

// const jsonString = '{"name": "John", "age": 30}';
// const obj = JSON.parse(jsonString);
// console.log(obj.name); // Output: John
// console.log(obj.age); // Output: 30


