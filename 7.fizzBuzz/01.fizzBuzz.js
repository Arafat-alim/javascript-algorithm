//! Fizzbuzz

function fizzBuzz(num) {
  //! let print the 1 to 100 number
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz", i); // fizzbuzz 15
    } else if (i % 3 === 0) {
      console.log("Fizz", i); // fizz 3, fizz 6, fizz 12
    } else if (i % 5 === 0) {
      console.log("Buzz", i); // buzz 5, Buzz 10
    } else {
      console.log(i); //1,2,4,7,8,11,13,14
    }
  }
}

fizzBuzz(15);
