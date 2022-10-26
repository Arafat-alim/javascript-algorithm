//! Reverse An Integer
const int = -531;
function reverseInteger(int) {
  const revInt = int.toString().split("").reverse("").join("");
  return parseInt(revInt) * Math.sign(int);
}

const output = reverseInteger(int);
console.log(typeof output); // Number
console.log(output); // -135
