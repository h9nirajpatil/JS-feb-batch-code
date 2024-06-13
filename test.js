//bind()
let obj3 = {
    greet: function () {
      let greet = `hello ${this.name} very warm welcome`;
      console.log(greet);
    },
  };
  
  let name9 = {
    name: "ravi2",
  };
  
  let boundGreet = obj3.greet.bind(name9); // bind the 'name9' object to 'greet' function
  boundGreet(); // invoke the bound function to get the output
  
  // ----------------------------------------------------------------------------------
  //call()
  let obj3 = {
    greet: function () {
      let greet = `hello ${this.name} very warm welcome`;
      console.log(greet);
    },
  };
  
  let name9 = {
    name: "ravi2",
  };
  
  obj3.greet.call(name9);
  