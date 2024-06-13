//enabling strict mode in script
"use strict";

//Enabling strict mode in a function
function myFuction() {
  "use strict";
}

//example 1
("use strict");
x = 10;
//undefined variable : using variable with out declaring it first will result refrence error.

//example 2
("use strict");
NaN = 10;
//attempting to assign a value to a read - only property such as Nan , or undefined it will throw a type error

//example 3
("use strict");
delete Object.prototype;
// deleting undeletable properties will throw a type error.

//example 4
("use strict");
function myFuction1(a, a, b) {}
//Defining multiple fuction with same parameters name will throw a syntax error.

//example 6
("use strict");
var num = 0123; // literal r not allowed in strict mode.
console.log(num);
//(18^2 + 28^1 + 3*8^0 = 64 + 16 + 3 = 83).
// example 7
