// JavaScript Date Objects
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

// new date()
let today = new Date();
console.log(today);

let specificDate = new Date(2024, 1, 21);
console.log(specificDate);

// creating a date object for sepecific date & time
let specificDatetime = new Date(2024, 1, 12, 30, 0); //(year, month, hour, minute, second)
console.log(specificDatetime);

let milisecondSince = 161387112400;

let datefromMilliseconds = new Date(milisecondSince);
console.log(datefromMilliseconds);

// Get Method of date objects
//getFullYear()
//Returns the year (4 digits) of the specified date according to local time.
let currentDate = new Date();
let year = currentDate.getFullYear();
console.log(year);

//getMonth()
// Returns the month (0-11) for the specified date according to local time. (0 for January, 1 for February, and so on)
let month = currentDate.getMonth();
console.log(month); // (0-11)

//getDate()
// Returns the day of the month (1-31) for the specified date according to local time.
let date = currentDate.getDate(); //(1-31)
console.log(date);

//getDay()
//Returns the day of the week (0-6) for the specified date according to local time. (0 for Sunday, 1 for Monday, and so on)
let day = currentDate.getDay(); // note : sunday is 0 , Monday is 1 a& so on
console.log(day); // o/p current of the week from (0 -6) 3

//getHours
// Returns the hour (0-23) in the specified date according to local time.
let hours = currentDate.getHours(); // in this way u can get hours
console.log(hours); // (0 - 23)

//getMinutes()
// Returns the minute (0-59) in the specified date according to local time
let min = currentDate.getMinutes(); // in this way u can get Minutes
console.log(min);

//getSecond()
// Returns the second (0-59) in the specified date according to local time. It does not include milliseconds.
let sec = currentDate.getSeconds(); // in this way u can get seconds
console.log(sec);

//getMiliseconds
// Return the miliseconds (0-999) in the specified date according to local time.
let milisec = currentDate.getMilliseconds(); // in this way u can get milliseconds // (0-999)
console.log(milisec);

//getTime()
// Return the numeric value of the specified date as the number miliseconds since January 1, 1970,00:00:00 UTC (Unix timestamp)
let timestamp = currentDate.getTime();
console.log(timestamp);

//set method of date object
//setFullYear()
let current = new Date();
currentDate.setFullYear(2025);
console.log(currentDate);

// setMonth()
currentDate.setMonth(5);
console.log(currentDate);

//setDate()
currentDate.setDate(15);
console.log(currentDate);

// setHours() , setMinutes() , setSeconds() ,setMilliseconds()
// currentDate.setHours(12, 30, 0, 0); // it will set time to 12:30:00:00
// console.log(currentDate);

currentDate.setMinutes(31);
console.log(currentDate);

//adding days
currentDate.setDate(currentDate.getDate() + 5);
console.log(currentDate);

//substracting hours
currentDate.setHours(currentDate.getHours() - 2);
console.log(currentDate);

// comparing date
let date1 = new Date("2024-02-21");
let date2 = new Date("2024-02-22");

if (date1 < date2) {
  console.log("date1 is before date2 ");
} else if (date1 > date2) {
  console.log("date1 is after date2");
} else {
  console.log("date1 is equal to to date2 ");
}

// Hoisting :
// hoisting  means that variable and function declaration are moved to the top of their containing scope before execution.

//example
// simple function declaration
//create  function
function sum(a, b) {
  add = a + b;
  console.log(add);
}
sum(5, 5); //calling

// hoisting example
substracting(20, 5);
function substracting(c, d) {
  sub = c - d;
  console.log(sub);
}
