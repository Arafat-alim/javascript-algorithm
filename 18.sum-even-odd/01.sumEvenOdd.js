function sumEvenOdd(arr) {
  let arr1 = [];
  let arr2 = [];

  arr.forEach((item) => {
    if (item % 2 === 0) {
      arr1.push(item);
    } else {
      arr2.push(item);
    }
  });
  const sum1 = arr1.reduce((acc, curr) => acc + curr);
  const sum2 = arr2.reduce((acc, curr) => acc + curr);
  //   const total = sum1 + sum2;
  //   return total

  let array = [];
  array.push(sum1);
  array.push(sum2);
  return array;
}

// const input = [11, 22, 45, 55, 66, 10, 54];
const input = [50, 60, 60, 45, 71];
const op = sumEvenOdd(input);
console.log(op);
