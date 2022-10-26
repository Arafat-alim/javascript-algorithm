//! Chunked Array

function ChunkedArray(arr, len) {
  //declare a chunked array
  let chunked = [];
  let i = 0;
  while (i < arr.length) {
    chunked.push(arr.slice(i, i + len));

    i += len;
  }
  return chunked;
}

const o1 = ChunkedArray([1, 2, 3, 4, 5, 6, 74, 56], 1);
const o2 = ChunkedArray([1, 2, 3, 4, 5, 6, 74, 56], 2);
const o3 = ChunkedArray([1, 2, 3, 4, 5, 6, 74, 56], 3);
console.log(o1); //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 74 ], [ 56 ] ]
console.log(o2); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 74, 56 ] ]
console.log(o3); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 74, 56 ] ]
