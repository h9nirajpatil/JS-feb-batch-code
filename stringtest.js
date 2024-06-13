// Extracting String Characters
// There are 4 methods for extracting string characters:

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays

// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position).
//example
let name = "praksh";
console.log(name.charAt(1)); //p  L ---> R
console.log(name.charAt(-1)); //empty

// JavaScript String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).
//example
let x = "ABCDa";
console.log(x.charCodeAt(0)); //65
console.log(x.charCodeAt(1)); //66
console.log(x.charCodeAt(4)); //97

//JavaScript String at()
let atstring = "Rohit Sharma";
console.log(atstring.at(1)); // o  L --> R
console.log(atstring.at(-1)); // a  R --> L

//Property Access [ ]
let proacc = "Acces";
console.log(proacc[0]); // A

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

//Example:
// slice out a portion of a string from position 7 to 13
let Fruits = "Apple , Banana , Kiwi";
console.log(Fruits.slice(7, 13)); // Banan
//if u ommit the second parameter the method will slice out the rest of the string
console.log(Fruits.slice(7));
//If a parameter is negative the position is counted  from the end of the string
console.log(Fruits.slice(-13));
// This example slices out a portion of a string from position -12 to position -6:
console.log(Fruits.slice(-12, -6));

// JavaScript String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

console.log(Fruits.substring(4, 8));

// JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.
console.log(Fruits.substr(7, 6));
console.log(Fruits.substr(-4));

//trim()
let text = "     Hello World      ";
console.log(text.trim());
//trimStart()
console.log(text.trimStart());
//trimEnd()
console.log(text.trimEnd());
