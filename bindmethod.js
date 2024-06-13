// const newFunction = originalFunction.bind(thisArg[, arg1[, arg2[, ...]]]);

//1
// const test = {
//   x: 42,
//   getX: function () {
//     return this.x;
//   },
// };

// const unboundGetX = test.getX;
// console.log(unboundGetX()); // Output: undefined

// const boundGetX = unboundGetX.bind(test);
// console.log(boundGetX()); // Output: 42

//Example 2: Partial Application
// function greet(greeting, name) {
//   return `${greeting}, ${name}!`;
// }

// const greetHello = greet.bind(null, "Hello");
// console.log(greetHello("Alice")); // Output: Hello, Alice!
// console.log(greetHello("Bob")); // Output: Hello, Bob!

//Example 3: Binding 'this' in Event Handlers
// const button = document.getElementById("myButton");

// const handler = {
//   message: "Button clicked!",
//   handleClick: function (event) {
//     console.log(this.message);
//     alert(this.message);
//   },
// };

// button.addEventListener("click", handler.handleClick.bind(handler));

//Example 4: Creating Bound Function with Class Methods
// class Counter {
//   constructor() {
//     this.count = 0;
//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.count++;
//     console.log(this.count);
//   }
// }

// const counter = new Counter();
// const increment = counter.increment;

// increment(); // Output: 1

//Example 5: Preventing Explicit 'this' Binding
function sayName() {
  console.log(this.name);
}

const obj = { name: "John" };
const boundSayName = sayName.bind(obj);

boundSayName(); // Output: John

const boundWithNull = sayName.bind(null);
boundWithNull(); // Output: undefined
