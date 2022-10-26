function seekAndDestroy(arr) {
  let args = Array.from(arguments);
  console.log(args); //[[2, 3, 4, 4, 2, 2, 6, 6, "Hello"], 2, 6];
  function filterArray(arr) {
    return args.indexOf(arr) === -1;
  }
  return arr.filter(filterArray);
}

console.log(seekAndDestroy([2, 3, 4, 4, 2, 2, 6, 6, "Hello"], 2, 6)); // [ 3, 4, 4, 'Hello' ]
