//1
// function greet() {
//     return `Hello, ${this.name}!`;
//   }

//   const person = { name: 'Alice' };

//   console.log(greet.apply(person)); // Output: Hello, Alice!

// 2
// Example 2: Passing Arguments
// function introduce(age, gender) {
//   return `I am ${this.name}, ${age} years old, ${gender}.`;
// }

// const person = { name: "Bob" };
// const args = [30, "male"];

// console.log(introduce.apply(person, args)); // Output: I am Bob, 30 years old, male.

//3
//Example 3: Math Methods
// const numbers = [1, 2, 3, 4, 5];

// const max = Math.max.apply(null, numbers);
// console.log(max); // Output: 5

// const min = Math.min.apply(null, numbers);
// console.log(min); // Output: 1

//4
// Example 4: Array Concatenation
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [].concat.apply([], [arr1, arr2]);
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//5
// Example 5: Creating Instances with Constructor
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// const args = ["Phone", 500];
// const phone = new Product(...args);
// console.log(phone); // Output: Product { name: 'Phone', price: 500 }

//6
//Example 6: Function Currying
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "John" };
const args = ["Hi", "!"];

const greetingFunction = greet.bind(person);
console.log(greetingFunction.apply(null, args)); // Output: Hi, John!
