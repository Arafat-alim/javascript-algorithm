//! Reverse String
const input = "hello";

function reverseString(input) {
  //! 1st way - Array method
  //   function reverseString(input) {
  //     return input.split("").reverse().join("");
  //   }

  //! 2nd way - for loop -- back side
  //   function reverseString(input) {
  //     let str = "";
  //     for (let i = input.length - 1; i >= 0; i--) {
  //       str = str + input[i];
  //     }
  //     return str;
  //   }

  //! 3rd way
  //   function reverseString(input) {
  //     let str = "";
  //     for (let i = 0; i <= input.length - 1; i++) {
  //       str = input[i] + str;
  //     }
  //     return str;
  //   }

  //! 4th way -- for of loop
  //   function reverseString(input) {
  //     let str = "";
  //     for (let char of input) {
  //       str = char + str;
  //     }
  //     return str;
  //   }

  //! 5th way - for Each
  // let str = "";
  // input.split("").forEach((char) =>{
  //     str =  char + str;
  // });
  // return str;

  //! 6th way - reduce method
  return input.split("").reduce((str, char) => char + str, "");
}
const output = reverseString(input);
console.log(output);
