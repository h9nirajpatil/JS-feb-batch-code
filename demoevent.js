function changeText(id) {
  id.innerHTML = "Hey u clicked";
}

function displaydate() {
  document.getElementById("demo").innerHTML = Date();
}

function checkCookies() {
  let text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are disabled.";
  }
  document.getElementById("onloade").innerHTML = text;
}

function uppercase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

// on click u will get value
function getValue() {
  const inputElement = document.getElementById("textInput");
  const inputValue = inputElement.value;
  console.log("Input value: " + inputValue);
}

//Live u get value
const input_element = document.getElementById("text_Input");
const output_element = document.getElementById("output");

input_element.addEventListener("input", function () {
  const input_value = input_element.value;
  output_element.textContent = "Live Input Values " + input_value;
  console.log(input_value);
});
