// this keyword
// it refers current instance of the objects within context of a fuction or method

// Global context:
// console.log(this === window);
// in the global context this refers to the global objects. In broweser this typically the window object

//Function invocation:
function myFuction() {
  //   console.log(this === window);
}
myFuction();

// method invocation
// when function is called as method of an obj this refers to the object that owns the method.
//example
const obj = {
  name: "Rohit",
  greet: function () {
    console.log("hello , " + this.name);
  },
};
obj.greet();

//Constructor Invocation
// When a fuction is used as constructor function with new keyword , this refers to newly created instance of the object
//example
function Person(name) {
  this.name = name;
}

const virat = new Person("virat");
const ramesh = new Person("ramesh");
console.log(virat.name);
console.log(ramesh.name);

// instance in javascript intance is used as constructor function with new keyword , this refers to newly created instance of

//Event Handler

// arrow function
const obj1 = {
  name1: "ganesh",
  greet: function ()  {
    console.log("hello,   " + this.name1);
  },
};
obj1.greet();
