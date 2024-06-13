// //basic example
// function greet(name, callback) {
//     console.log('Hello, ' + name);
//     callback();
// }

// function sayGoodbye() {
//     console.log('Goodbye!');
// }

// greet('John', sayGoodbye); // Output: Hello, John followed by Goodbye!

// //Asynchronous Example:
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = 'Data from server';
//         callback(data);
//     }, 2000); // Simulating delay of 2 seconds
// }

// function processData(data) {
//     console.log('Received data:', data);
// }

// fetchData(processData); // Output after 2 seconds: Received data: Data from server

//Anonymous Function as Callback:
// function greet(name, callback) {
//     console.log('Hello, ' + name);
//     callback();
// }

// greet('Alice', function() {
//     console.log('Nice to meet you!');
// });

function fetchData(callback, errorCallback) {
  setTimeout(() => {
    const error = false; // Simulating success
    if (error) {
      errorCallback("Error occurred");
    } else {
      const data = "Data from server";
      callback(data);
    }
  }, 2000); // Simulating delay of 2 seconds
}

function processData(data) {
  console.log("Received data:", data);
}

function handleFetchError(error) {
  console.error("Error:", error);
}

fetchData(processData, handleFetchError);
