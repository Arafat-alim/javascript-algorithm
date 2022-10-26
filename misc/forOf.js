//! For of loop is iterate an array

const arr = [1, 23, 4, 5, 5, 6, 6, 7, 54];

for (let ele of arr) {
  console.log(ele); //1,23,4,5,6,7,54
}

//! NOTE OBJECT IS NOT ITERABLE WHILE USING
let obj = {
  a: 1,
  b: 2,
};

// for(let key of obj){ // obj is not iterable
//     console.log(key);
// }
