//! Reverse String
const input1 = "racecar";
const input2 = "hello";
const input3 = "abba";

function revString(input) {
  let data = input;
  let reverse = input.split("").reverse().join("");
  if (data === reverse) {
    return reverse;
  } else {
    return "The given Input is not following the reverse pattern";
  }
}
// console.log(reverseString)

const output1 = revString(input1);
const output2 = revString(input2);
const output3 = revString(input3);
console.log(output1); //racecar
console.log(output2); // The given Input is not following the reverse pattern
console.log(output3); //abba
