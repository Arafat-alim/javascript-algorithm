function addNumbers() {
  console.log(arguments); //{ [Iterator]  0: 1, 1: 2, 2: 3, 3: 4, 4: 45, 5: 5, 6: 6, 7: 6, 8: 7, 9: 7 }
  const arr = Array.prototype.slice.call(arguments);
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  return total;
}

console.log(addNumbers(1, 2, 3, 4, 45, 5, 6, 6, 7, 7)); //86
