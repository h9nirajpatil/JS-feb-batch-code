//local storage:

// Stroring Data
// localStorage.setItem("username", "niraj"); //(key , value)

//Retreiving data
// const username = localStorage.getItem("username");
// console.log(username);

//Update Data
// localStorage.setItem("username", "Ganesh");

//Remove Data
// localStorage.removeItem("username");

//clearing local storage
// localStorage.clear();

//Example 1
//Stroing multiple data
// localStorage.setItem("username", "Girish");
// localStorage.setItem("email", "girishrajput123@gmail.com");
// localStorage.setItem("age", 30);

//Retrieving data

// const username = localStorage.getItem("username");
// const email = localStorage.getItem("email");
// const age = localStorage.getItem("age");

// console.log(username, email, age);

//Update Data
// localStorage.setItem("age", 35);

//Remove data
//email
// localStorage.removeItem("email");

//clear local storage
// localStorage.clear();

const user = { name: "karan", email: "karan@gmail.com" };
localStorage.setItem("user", JSON.stringify(user)); // object to string then stored while storing the data.

const storedUser = JSON.parse(localStorage.getItem("user")); // string is converted into object while getting the stored data.
console.log(storedUser);
