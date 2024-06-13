// function outerFunction() {
//   const outerVariable = "I am from the outer function";

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// const closure = outerFunction();
// closure(); // Output: I am from the outer function

// function createCounter() {
//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//       console.log("Count:", count);
//     },
//     decrement: function () {
//       count--;
//       console.log("Count:", count);
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// }

// const counter = createCounter();
// counter.increment(); // Output: Count: 1
// counter.increment(); // Output: Count: 2
// counter.decrement(); // Output: Count: 1
// console.log(counter.getCount()); // Output: 1

// function memoize(func) {
//   const cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (!(key in cache)) {
//       cache[key] = func(...args);
//     }
//     return cache[key];
//   };
// }

// const fibonacci = memoize(function (n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// });

// console.log(fibonacci(10)); // Output: 55

// function createPerson(name, age) {
//   let _name = name;
//   let _age = age;

//   return {
//     getName: function () {
//       return _name;
//     },
//     getAge: function () {
//       return _age;
//     },
//     celebrateBirthday: function () {
//       _age++;
//     },
//   };
// }

// const person = createPerson("Alice", 30);
// console.log(person.getName()); // Output: Alice
// console.log(person.getAge()); // Output: 30
// person.celebrateBirthday();
// console.log(person.getAge()); // Output: 31

function fetchData(url, callback) {
  // Simulating AJAX request
  setTimeout(() => {
    const data = { name: "Example Data" };
    callback(data);
  }, 1000);
}

const container = document.getElementById("container");

fetchData("https://api.example.com/data", function (data) {
  // Closure: has access to container even when executed later
  container.innerHTML = `<p>${data.name}</p>`;
});
