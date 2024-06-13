/*
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished
 */
//Example
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }
// function sayGoodBye() {
//   console.log("Goodbye");
// }

// greet("Ganesh", sayGoodBye);

// Aynchronous
/*
Functions running in parallel with other functions are called asynchronous
setTimeout()
 */
// /Example 1
// function myDisplayer(something) {
//   document.getElementById("demo").innerHTML = something;
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }
// myCalculator(5, 5, myDisplayer);

// Example 2
// setTimeout(
//   myFuction,
//   3000
// );
/*3000  is the number of miliseconds so my fuction will called after 2 seconds.*/

// function myFuction() {
//   document.getElementById("setasy").innerHTML = "Hi how r u !!!";
// }

//Setinterval():- u can specify a callback function to be excuted for each interval.

//Exmaple 1
// setInterval(updatetime, 1000);
// function updatetime() {
//   let d = new Date();
//   document.getElementById("setintervaldemo").innerHTML =
//     d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// }

// Exmaple 2
// asynchronous
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = "Data from server";
//     callback(data);
//   }, 2000);
// }
// function processData(data) {
//   console.log("Received data", data);
// }

// fetchData(processData);

//Promises
/*
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an Object that links Producing code and 
Consuming code.
 */
// object properties
// 1 pending
// 2 fulfilled
// 3 rejected

// it support 2 properties
// 1 state
// 2 result

//when a promise is "pending " the result is undefined
// when a promise is "fulfilled" the result is a value
// when a promise is "rejected" the result is error as object .

/*
myPromise.state                             myPromise.result
"Pending"                                       undefined  
"fulfilled"                                         as value       
"rejected"                                       error object
 */

// note that u can not the Promises properties state & object
// u must use a promise method handle process.

/*
How to use:
myPromise.then(
    function(value){/ code if successful/ }
    function(error){/ code if some error/ }
)
 */

// here u cnan see that 2 arguments , a callback for success & another for failure

// Both r optional so u can add a caalback for success or failure only

//Example

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;

//   if (x == 1) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// Async & Await :
// async makes a function return promise
// await makes a function wait for promise

// Async
// the keywords before a function makes the function eturn promise.

// Example
// async function myFuction() {
//   return "Hello, ";
// }

// // is the same as:
// function myFuction() {
//   return Promise.resolve("Hello");
// }

// //here is how to use Prmoises.
// myFunction().then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );

//Example
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }
// async function displayMessage() {
//   return "Hello";
// }
// displayMessage().then(
//   function (value) {
//     {
//       myDisplayer(value);
//     }
//   },
//   function (error) {
//     {
//       myDisplayer(error);
//     }
//   }
// );

// Await
//Syntax
// let value = await promise
// await keyword makes the function pause the excecution and wait for a resolved promise before it contiues.
//Example 1 : await 
async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("Hi How r u ???");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
myDisplay();
