//! Flatten the array
function flatten(array) {
  //! Solution 1
  //   return array.reduce((acc, curr) => {
  //     return acc.concat(curr);
  //   }, []);
  //! Solution 2
  //   return [].concat(...array);

  //! Solution 3
  return [].concat.apply([], array);
}

const input1 = [1, 2, [3, 4, 5], 6];
const input2 = [1, 2, [3, 4, [5, 6], 7], 8, [9, 10], [11, 12, [13, 14]]];
console.log(flatten(input1)); // single level - [ 1, 2, 3, 4, 5, 6 ]
console.log(flatten(input2)); // multiple level not fixed - [ 1, 2, 3, 4, [ 5, 6 ], 7, 8, 9, 10, 11, 12, [ 13, 14 ] ]
