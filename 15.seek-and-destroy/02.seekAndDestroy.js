function seekAndDestroy(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}

console.log(seekAndDestroy([2, 3, 4, 4, 2, 2, 6, 6, "Hello"], 2, 6));
