/*
JSON:-
Javascript objcet notation
it is format for storing & transporting data.
it used when data is sent from a server to web page.
its self self describing
 */
/*
data is in name / value pairs (key , value)
data is seprated by commas
curly braces hold objects
square brackets hold arrays
 */
//Example
// {
//     "employee" : [
//         { "firstName": "Ramesh", "lastName": "Patil" },
//         { "firstName": "Virat", "lastName": "Patel" },
//         {"firstName" : "Ganesh", "lastName" : "Sharma" },
//     ]
// }

//Example
let employeedetails =
  '{"employees":[' +
  '{"firstName":"Ganesh","lastName":"Patil" },' +
  '{"firstName":"kunam","lastName":"patel" },' +
  '{"firstName":"akshay","lastName":"kumar" }]}';

const obj = JSON.parse(employeedetails); // string get converted in object
console.log(obj);
document.getElementById("demo").innerHTML = obj.employees[1].firstName;

//Example
// const jsonString = '{"name":"Karan","age":"30"}';
// let obj = JSON.parse(jsonString); // string get converted into object
// console.log(obj);

//stringify():
// it used to convert JSON objects or it values into JSON strings.
// this method is paritvurly used when u need to send data to server or store
//Examples
// const person = {
//   name: "Rahul",
//   age: 35,
//   city: "New York",
// };

// const obj = JSON.stringify(person); // object  get converted into string
// console.log(obj);
