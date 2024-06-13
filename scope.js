//Scope:
// it define the boundary where u can access the variables & functions defined
//There 3 types of scope
// - Block scope
// - Function Scope
// - Global Scope

//Example 1
// {
//     let x = 5;
//     console.log(x)
// }
// console.log(x) // can not acess here // x not defined

//Example 2
// {
//     const x = 10
//     console.log(x)
// }
// console.log(x) // can not access here // x not defined

//Example 3
// {
//   var x = 15;
//   console.log(x); //accessing here
// }
// console.log(x); // accessing here

//Function Scope
//example 1
// function myfunction() {
//   var carname = "BMW";
//   console.log(carname);
// }
// myfunction();
// console.log(carname);

//example 2
let a = 20;
console.log(a);
if (a == 20) {
  let b = 30;
  const c = 40;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
// console.log(b); outside block we can't access
// console.log(c); outside block we can't access

// JavaScript Sets
// - it  is collection of unique values
//- Each value can only occurs once in a set

// How we can create sets?
// - passing an Array to new Set()
// - create new set & use add() to add values
// - create a new set & use add to add variables

// new Set( ) Methos
// pass an array to new Set( constructor)
//Example:
//create Set
const characters = new Set(["a", "b", "c"]);
console.log(characters);

// size
// it return the number of elements in the set
console.log(characters.size);

const letters = new Set();
//adding values to set
letters.add("A");
letters.add("B");
letters.add("C");
console.log(letters);

//has() : it return true if the value exists in the set
console.log(letters.has("C"));

//forEach() : it invokes a callback for each element in the sets
const letters_alpa = new Set(["c", "d", "e"]);
//list elements
let text = "";
letters_alpa.forEach(function (value) {
  text += value + "<br>";
});
// document.getElementById("list").innerHTML = text;

//values() : it returns an  iterator with all the values in a set
let store = "";
for (const x of letters_alpa.values()) {
  store += x + "<br>";
}
// document.getElementById("stored").innerHTML = store;

// delete() :
const fruits = new Set();
//add
fruits.add("Apple");
fruits.add("Orange");
console.log(fruits);

const delete1 = fruits.delete("Apple");
console.log(fruits);

// Map()
// it allows us to store key values pairs in javascript

let myMap = new Map();
myMap.set("name", "Rohit");
myMap.set("age", 23);
myMap.set("isStudent", true);

console.log(myMap);

console.log(myMap.get("name"));
console.log(myMap.has("age"));
myMap.delete("isStudent");
console.log(myMap.has("isStudent"));
console.log(myMap);

myMap.forEach((key, val) => {
  console.log(`${key}: ${val}`);
});
