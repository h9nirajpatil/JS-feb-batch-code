// JavaScript String Length
let str = "Hellow World";
console.log(str.length); //12
//empty
let str1 = "";
console.log("Empty" + " " + str1);
// string with space
let str3 = "      Hello     world";
console.log(str3.length);

// chatAt()
// •	In JavaScript, the charAt() method is used to retrieve a character at the index specified in a string. The index is given as a parameter to the charAt() method, and it returns the characters at that index position.
// •	charAt() is a method of the JavaScript String object.
// example
let charstr = "Hello World";
console.log(charstr.charAt(0));
console.log(charstr.charAt(7));
console.log(charstr.charAt(-1));
console.log(charstr.charAt(4.7));
console.log(charstr.charAt(10));
console.log(charstr.charAt(20));

// JavaScript String charCodeAt()
// The charCodeAt() method returns an integer representing the Unicode character at the specified index in the string

let name = "Ramesh";
console.log(name.charCodeAt(0));
console.log(name.charCodeAt(2.5));

//at()
let fname = "Rohit Sharma";
console.log(fname.at(0));
console.log(fname.at(-1));

// Note:
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).

// JavaScript String slice()
/*
Definition:
•	The slice() method in JavaScript is used to extract a portion of a string and return it as a new string, without modifying the original string. Allows you to extract substrings based on specified start and end indices. slice() is a method of the JavaScript String object.
Usage:
•	You call slice() on the string and specify the start and end index positions to extract the substring.
Syntax:
•	The syntax for slice() is: string.slice(startIndex, endIndex).
•	string: The original string from which you want to extract a substring.
•	startIndex: The zero-based index at which to begin extraction. If negative, it counts from the end of the string.
•	endIndex: Optional. The zero-based index before which to end extraction. slice() extracts up to but not including endIndex. If omitted, slice() extracts to the end of the string.



Return value:
It returns a new string containing the extracted phase of the original string.

Special considerations:
•	If startIndex is greater than or equal to endIndex, slice() returns an empty string.
•	If startIndex or endIndex is negative, it counts from the end of the string. -1 refers to the last character, -2 refers to the second last character, and so on.
•	If startIndex is greater than the length of the string, slice() returns an empty string. If endIndex is greater than the length of the string, slice() extracts characters up to the end of the string.
•	slice() is commonly used for extracting substrings based on specified indices, such as when parsing strings or manipulating text data.

 */
//Example
// Extracting Substring from the Beginning:
let slicestring = " hi there";
console.log(slicestring.slice(0, 5));
// Extracting Substring from the End:
console.log(slicestring.slice(-6));
//Omitting the End Index (Extracting till the End of String):
console.log(slicestring.slice(4));
//Negative Start and End Index:
console.log(slicestring.slice(-3, -1)); // Returns '
// Start Index Greater than End Index (Returns an Empty String):
console.log(slicestring.slice(7, 5));
//last charater
console.log(slicestring.slice(-1));

//substring()
//it similar to slice()
// the difference is thta start & end values less than 0 are 0 treated as  in substring()
let fruits = "Apple, Banana, Kiwi";
let package = fruits.substring(7, 13);
console.log(package);

//substr()
console.log(fruits.substr(5, 9));

// If you omit the second parameter, substr() will slice out the rest of the string.
console.log(fruits.substr(10));

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():

let para1 = "this is para 1";
let para2 = "THIS IS PARA 2";
console.log(para1.toUpperCase());
console.log(para2.toLowerCase());

//concat()
//it joins 2 strings
let text1 = "hello";
let text2 = "world";
let comb = text1.concat(" ", text2);
console.log(comb);

let text = "Hello" + " " + "world";
console.log(text);

//trimStart()
let whitespace = "      Hello world          t ";
console.log(whitespace.trimStart());
//trimLast()
let lasttrim = "  H   ";
console.log(lasttrim.trimEnd());

//padStart()
let x = "5";
let padded = x.padStart(4, "0"); //0005
console.log(padded);
console.log(x.padStart(5, "X")); //XXXX5

//padEnd()
let y = "6";
let pad = y.padEnd(4, "x");
console.log(pad); //6xxx

//repeat()
// it returns a string with number of copies of a string
// it return new string
// it does not change the original string.

//Syntax:
// string.repeat(count)
// count = the number of copies u wanted

//Example
let repeatline = "Plz Find the location. ";
let result = repeatline.repeat(4);
console.log(result);

//Replacing the string content
//replace()
// it replace a specified value with  another in a string.
// Syntax : str.replace(searchvalue , replacelvalue ) ;
//example
let find = "plz find the location of google company & 'google'. Google";
console.log(find.replace("google", "Mircosoft"));
//Regular expression
console.log(find.replace(/google/g, "Axel"));
//to replace case insensitive , use a regular expression  with an /i flag(insensitive).
console.log(find.replace(/google/gi, "Axel"));

//ReplaceALL()
//It is similar to replace(), but it replaces all occurances of searchValue with replaceValue

let text5 = "I love dogs. Dogs are very easy to love. Dogs are very popular.";
let rep = text5.replaceAll("Dogs", "Cats");
console.log(rep);
console.log(text5.replaceAll(/dogs/g, "Cats"));
console.log(text5.replaceAll(/dogs/gi, "Cats"));

//split() : it covert string to array

let str_split = "a,b,c,d,e,f,g,h,i,j,";
let parts = str_split.split(",");
console.log(parts);
console.log(parts[4]);
console.log(str_split[4]);


