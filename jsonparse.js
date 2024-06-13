// JSON.parse(text [, reviver])
// const jsonString = '{"name": "John", "age": 30}';
// const obj = JSON.parse(jsonString);

// console.log(obj.name); // Output: John
// console.log(obj.age); // Output: 30

// const jsonString = '{"name": "John", "age": 30}';
// const obj = JSON.parse(jsonString, (key, value) => {
//     if (key === 'age') {
//         return value + 10; // Add 10 to the age
//     }
//     return value;
// });

// console.log(obj.age); // Output: 40

// const invalidJsonString = '{"name": "John", "age": }'; // Invalid JSON
// try {
//     const obj = JSON.parse(invalidJsonString);
// } catch (error) {
//     console.error('Invalid JSON:', error.message);
// }

// Example 1: Parsing JSON Array:
// const jsonArrayString = '[1, 2, 3, 4, 5]';
// const array = JSON.parse(jsonArrayString);

// console.log(array); // Output: [1, 2, 3, 4, 5]
// console.log(array.length); // Output: 5
// console.log(array[0]); // Output: 1

//Example 2: Parsing Nested JSON Objects:
// const nestedJsonString = '{"person": {"name": "John", "age": 30}}';
// const nestedObject = JSON.parse(nestedJsonString);

// console.log(nestedObject.person.name); // Output: John
// console.log(nestedObject.person.age); // Output: 30

//Example 3: Parsing JSON with Reviver Function:
// const jsonString = '{"name": "John", "age": 30}';
// const parsedObject = JSON.parse(jsonString, (key, value) => {
//     if (key === 'age') {
//         return value + 10;
//     }
//     return value;
// });

// console.log(parsedObject.age); // Output: 40

//Example 4: Handling Invalid JSON:
// const invalidJsonString = '{"name": "John", "age": }'; // Invalid JSON
// try {
//   const obj = JSON.parse(invalidJsonString);
// } catch (error) {
//   console.error("Invalid JSON:", error.message);
// }

//Example 5: Parsing JSON Boolean Values:
const jsonString = '{"isStudent": true}';
const parsedObject = JSON.stringify(jsonString);

console.log(parsedObject.isStudent); // Output: true
console.log(parsedObject);
