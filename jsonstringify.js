// 1] Syntax:
// JSON.stringify(value [, replacer [, space]])

//Example 1: Converting JavaScript Object to JSON String:
// const person = { name: 'John', age: 30, city: 'New York' };
// const jsonString = JSON.stringify(person);

// console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}

// Example 2: Pretty-Printing JSON String:
// const person = { name: 'John', age: 30, city: 'New York' };
// const jsonString = JSON.stringify(person, null, 2);

// console.log(jsonString);
/* Output:
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
*/

//Example 3: Excluding Properties with Replacer Function:
// const person = { name: 'John', age: 30, city: 'New York' };
// const jsonString = JSON.stringify(person, (key, value) => {
//     if (key === 'age') {
//         return undefined; // Exclude age property from JSON string
//     }
//     return value;
// });

// console.log(jsonString); // Output: {"name":"John","city":"New York"}

//Example 4: Converting JavaScript Array to JSON String:
// const numbers = [1, 2, 3, 4, 5];
// const jsonString = JSON.stringify(numbers);

// console.log(jsonString); // Output: [1,2,3,4,5]

//Example 5: Handling Circular References:
const obj = { a: 1 };
obj.b = obj; // Create circular reference

try {
  JSON.stringify(obj);
} catch (error) {
  console.error("Circular reference detected:", error.message);
}
