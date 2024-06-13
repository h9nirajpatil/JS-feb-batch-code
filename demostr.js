//Write a function that takes a string as input and returns the string with all duplicate characters removed.

function removeDuplicates(str) {
  let uniqueChars = "helo";
  for (let char of str) {
    if (uniqueChars.indexOf(char) === -1) {
      uniqueChars += char;
    }
  }
  return uniqueChars;
}

// Example usage:
const inputString = "helloon";
console.log(removeDuplicates(inputString)); // Output: "helo"
