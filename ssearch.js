//Javascript string search
//indexOf():
// indexOf(serachvalue,fronIndex = 0)
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index);
console.log(text.indexOf("locate", 15)); //,//g,//gi can not use

//lastIndexOf()
// lastindexOf(serachvalue,fronIndex = 0)
console.log(text.lastIndexOf("locate"));
console.log(text.lastIndexOf("locate", 15));

console.log(text.lastIndexOf("locatee"));

//search()
console.log(text.search("occurs"));
console.log(text.search(/occurs!/));
console.log(text.search(/occurs!/g));
console.log(text.search(/occurs!/i));

//match()
let new_text = "The rain SPAIN stays mainly in the plain";
let result = new_text.match("ain");
console.log(result.length + " " + result);
let result1 = new_text.match(/ain/);
console.log(result1.length + " " + result);
let result2 = new_text.match(/ain/g);
console.log(result2.length + " " + result);
let result3 = new_text.match(/ain/gi);
console.log(result3.length + " " + result);

//matchAll()
let matchall_str =
  "I love cats. Cats are very easy tolove. Cats are very popular.";
let iterator = matchall_str.matchAll("Cats");
console.log(Array.from(iterator));
// document.getElementById("demo").innerHTML = Array.from(iterator);

//include() : it return true if string contain that specified values othwrwise it will return false
//example
let incl_str = "hello world, welcome to the world";
console.log(incl_str.includes("world"));
// exampe 2
console.log(incl_str.includes("universe"));

//startsWith(): this method returs true if a string begins with a specified value. Otherwise it will return false
let startswith_str = "This is a sample text for startsWith method";
console.log(startswith_str.startsWith("This", 5));
console.log(startswith_str.startsWith("is"));

//endsWith() : this method return true if a string engs with a specified value. Otherwise it will return false.
let endswith_str = "This is a sample text for endsWith method";
console.log(endswith_str.endsWith("method", 9));
console.log(endswith_str.endsWith("method"));

// Template Strings
// 1) Back-Tics syntax
// template string use back-tics (``) rather than quotes ("") to define string
//example
let text1 = `Hello World`;
console.log(text1);

// Quotes Inside Strings
//it allow both single & double quotes inside a string.
//example
let sen = ` He's often called "Raj" `;
console.log(sen);

// Multiline Strings
// Template Strings allow multiline strings:
// Example
let text2 = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text2);

//Interpolation
// it provide an easy way to interpolate & expression into strings.
// so it called interpolation
//Syntax:
// ${...}

//Variable Substitutions:
// it allows variable in string
//Example 1
let firstName = "Virat";
let lastName = "Kholi";
let print = `Welcome ${firstName} ${lastName}`;
console.log(print);

//Example 2
let a = 5;
let b = 10;
let add = a + b;
let res = `The sum of ${a} and ${b} is ${add}`;
console.log(res);

// Expression Subsititution
//it allows expression string.
// Example
let price = 10;
let VAT = 0.25555;
let total = `Total: ${price * (1 + VAT).toFixed(2)}`;
console.log(total);

//Example for Templates
let head = "Template Strings";
let tag = ["HTML", "css", "js"];
let html = `<h2>${head}</h2><ul>`;
for (const x of tag) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
// document.getElementById("temp").innerHTML = html;

//login button event
function loginmessage() {
  alert("login in succe");
}

function myFunction(a, b) {
  return a * b;
}
let res1 = myFunction(2, 6);
console.log(res1);

function plus(c, d) {
  return c + d;
}
let adding = plus(4, 8);
console.log(adding);

